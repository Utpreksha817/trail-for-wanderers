
# Trail For Wanderers — Render One‑Click Deploy

This repo is configured for **Render** free tier. It deploys **two web services**:

1. **trail-java-service** — Java microservice (serves data)
2. **trail-for-wanderers** — Python Flask app (UI)

## Deploy (Blueprint)

1) Push this folder to a new **GitHub repo** named `trail-for-wanderers`.
2) Go to https://dashboard.render.com → **New** → **Blueprint**.
3) Connect your repo. Render will detect `render.yaml` and create **both** services.
4) Click **Apply** / **Deploy**.
5) After deploy, your site URL will be like `https://trail-for-wanderers.onrender.com`.

### Logo
Place your logo file at `python_ui/static/images/logo.png` (replace the placeholder).

### Local Dev
- Java service:
  ```bash
  cd java_service
  javac PlacesService.java
  java PlacesService
  ```
- Python UI:
  ```bash
  cd python_ui
  python -m venv .venv && . .venv/bin/activate
  pip install -r requirements.txt
  python app.py
  ```
