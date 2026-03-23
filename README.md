# LinkForge

A lightweight URL shortener built with FastAPI and Next.js.

## Features
- Shorten any URL instantly
- Fast redirects
- Duplicate URL detection
- Clean, minimal UI

## Tech Stack
- **Backend:** FastAPI, SQLAlchemy, SQLite
- **Frontend:** Next.js, Tailwind CSS

## Project Structure
```
LinkForge/
├── backend/
│   ├── main.py
│   ├── models.py
│   ├── database.py
│   ├── schemas.py
│   ├── utils.py
│   ├── requirements.txt
│   └── routes/url.py
└── frontend/
    ├── pages/index.js
    └── pages/api/shorten.js
```

## Setup

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
Runs at `http://localhost:8000`

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs at `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/shorten` | Create a short URL |
| GET | `/{short_code}` | Redirect to original URL |

### POST `/shorten`
```json
// Request
{ "url": "https://example.com/long/path" }

// Response
{ "short_url": "http://localhost:8000/abc123" }
```

## Deployment

- **Frontend** → [Vercel](https://vercel.com) — set `BACKEND_URL` env var to your backend URL
- **Backend** → [Render](https://render.com) or [Railway](https://railway.app) — set `BASE_URL` env var to your deployed backend URL
