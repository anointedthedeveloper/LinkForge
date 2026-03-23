import time
import urllib.request
import urllib.error
from datetime import datetime

URL = "https://linkforge-8l4l.onrender.com/"
INTERVAL = 600  # 10 minutes

def ping():
    try:
        with urllib.request.urlopen(URL, timeout=10) as res:
            print(f"[{datetime.now().strftime('%H:%M:%S')}] OK {res.status}")
    except urllib.error.URLError as e:
        print(f"[{datetime.now().strftime('%H:%M:%S')}] FAIL {e.reason}")

print(f"Pinging {URL} every {INTERVAL//60} minutes. Ctrl+C to stop.\n")
while True:
    ping()
    time.sleep(INTERVAL)
