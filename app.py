
import os
from flask import Flask, render_template, request
import requests

DATA_SERVICE_BASE = os.environ.get("DATA_SERVICE_BASE", "http://localhost:8080")
app = Flask(__name__)

@app.route("/", methods=["GET"])
def home():
    return render_template("search.html", results=None, form={}, price_max=None, error=None, brand="Trail For Wanderers")

@app.route("/search", methods=["GET"])
def search():
    country = request.args.get("country","")
    state = request.args.get("state","")
    city = request.args.get("city","")
    price_max = request.args.get("price_max", type=int)
    form = {"country": country, "state": state, "city": city}

    if not (country and state and city):
        return render_template("search.html", results=None, form=form, price_max=price_max, error="Please fill Country, State, and City.", brand="Trail For Wanderers")

    try:
        resp = requests.get(f"{DATA_SERVICE_BASE}/api/search", params={"country": country, "state": state, "city": city}, timeout=10)
        if resp.status_code != 200:
            return render_template("search.html", results=None, form=form, price_max=price_max, error="No results for that location in demo data.", brand="Trail For Wanderers")
        data = resp.json()
    except Exception as e:
        return render_template("search.html", results=None, form=form, price_max=price_max, error=f"Service unavailable: {e}", brand="Trail For Wanderers")

    hotels = data.get("hotels", [])
    if price_max is not None:
        hotels = [h for h in hotels if h.get("price", 0) <= price_max]
        hotels = sorted(hotels, key=lambda h: h.get("price", 0))
    data["hotels"] = hotels

    return render_template("search.html", results=data, form=form, price_max=price_max, error=None, brand="Trail For Wanderers")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", "5000")), debug=False)
