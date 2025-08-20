# 🌍 Trail For Wanderers

Trail For Wanderers is a tourism website similar to Google Maps that helps you explore countries, states, and cities worldwide.  
It provides:
- ✨ List of attractions (parks, museums, libraries, restaurants, etc.)
- 🍴 Famous local foods
- 🏨 Hotel suggestions with price ranges (no booking)
- ☀️ Weather alerts & best seasons to visit
- 🖼️ Custom logo & branding

This project is powered by:
- **Java** (backend service for places, foods, hotels, weather, etc.)
- **Python Flask** (frontend web app with UI/UX)
- **HTML, CSS** (UI styling)
- Deployed for free on **Render** using `render.yaml`.

---

## 🚀 Live Demo
Once deployed via Render, your site will be available at:


---

## 🗂 Project Structure


---

## 🛠️ Local Development

### 1. Run the Java backend
```bash
cd java_service
javac PlacesService.java
java PlacesService   # runs on http://localhost:8080

cd python_ui
python -m venv .venv
source .venv/bin/activate   # (use .venv\Scripts\activate on Windows)
pip install -r requirements.txt
export DATA_SERVICE_BASE=http://localhost:8080  # (setenv in Windows: set DATA_SERVICE_BASE=...)
python app.py   # runs on http://localhost:5000

python_ui/static/images/logo.png


---

