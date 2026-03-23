from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import RedirectResponse
from sqlalchemy.orm import Session
from database import get_db
from models import URL
from schemas import URLCreate, URLResponse
from utils import generate_code
import os

router = APIRouter()

BASE_URL = os.getenv("BASE_URL", "http://localhost:8000")

@router.post("/shorten", response_model=URLResponse)
async def shorten_url(payload: URLCreate, db: Session = Depends(get_db)):
    url_str = str(payload.url)

    existing = db.query(URL).filter(URL.original_url == url_str).first()
    if existing:
        return {"short_url": f"{BASE_URL}/{existing.short_code}"}

    for _ in range(5):
        code = generate_code()
        if not db.query(URL).filter(URL.short_code == code).first():
            break
    else:
        raise HTTPException(status_code=500, detail="Could not generate unique code")

    db.add(URL(original_url=url_str, short_code=code))
    db.commit()
    return {"short_url": f"{BASE_URL}/{code}"}

@router.get("/{short_code}")
async def redirect(short_code: str, db: Session = Depends(get_db)):
    url = db.query(URL).filter(URL.short_code == short_code).first()
    if not url:
        raise HTTPException(status_code=404, detail="Short URL not found")
    return RedirectResponse(url=url.original_url)
