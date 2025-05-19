# data_processing/osm_weather.py
import requests
import math
from config import API_KEYS

def get_current_weather(lat, lon):
    """
    Fetch current weather data from OpenWeatherMap.
    Returns wind (m/s), precipitation (mm), and temperature (°C).
    """
    url = "https://api.openweathermap.org/data/2.5/weather"
    params = {
        "lat": lat,
        "lon": lon,
        "appid": API_KEYS["openweather"],
        "units": "metric"
    }
    try:
        response = requests.get(url, params=params, timeout=10)
        data = response.json()
        wind = data.get("wind", {}).get("speed", None)
        precipitation = data.get("rain", {}).get("1h", 0.0)
        temperature = data.get("main", {}).get("temp", None)
        return wind, precipitation, temperature
    except Exception as e:
        print(f"Error fetching weather data: {e}")
        return None, None, None

def geocode_street(street_name):
    """
    Use Nominatim to fetch latitude and longitude for a street.
    """
    url = "https://nominatim.openstreetmap.org/search"
    params = {
        "q": f"{street_name}, Amman, Jordan",
        "format": "json",
        "limit": 1
    }
    headers = {"User-Agent": "Mozilla/5.0"}
    try:
        response = requests.get(url, params=params, headers=headers, timeout=10)
        data = response.json()
        if data:
            lat = float(data[0]["lat"])
            lon = float(data[0]["lon"])
            return lat, lon
    except Exception as e:
        print(f"Error geocoding {street_name}: {e}")
    return None, None

def haversine_distance(lat1, lon1, lat2, lon2):
    """
    Compute the Haversine distance between two points (in km).
    """
    R = 6371
    phi1, phi2 = math.radians(lat1), math.radians(lat2)
    delta_phi = math.radians(lat2 - lat1)
    delta_lambda = math.radians(lon2 - lon1)
    a = math.sin(delta_phi/2.0)**2 + math.cos(phi1) * math.cos(phi2) * math.sin(delta_lambda/2.0)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    return R * c

def calculate_length_from_geom(geometry):
    """
    Compute total road segment length in meters given a list of nodes with 'lat' and 'lon'.
    """
    total_length = 0.0
    for i in range(1, len(geometry)):
        lat1, lon1 = geometry[i - 1]['lat'], geometry[i - 1]['lon']
        lat2, lon2 = geometry[i]['lat'], geometry[i]['lon']
        total_length += haversine_distance(lat1, lon1, lat2, lon2)
    return total_length * 1000

def fetch_osm_data(street_name):
    """
    Query OSM via Overpass API to retrieve road attributes.
    Returns: lanes, maxspeed, highway, oneway, length (in meters).
    """
    query = f"""
    [out:json];
    area["name"="Amman"]->.searchArea;
    way["name"="{street_name}"](area.searchArea);
    out geom;
    """
    try:
        response = requests.get(API_KEYS["overpass_url"], params={"data": query}, timeout=30)
        data = response.json()
        lanes, maxspeed, highway, oneway, length = None, None, None, None, None
        for element in data.get("elements", []):
            tags = element.get("tags", {})
            if "lanes" in tags:
                lanes = float(tags["lanes"])
            if "maxspeed" in tags:
                maxspeed_str = "".join([c for c in tags["maxspeed"] if c.isdigit()])
                if maxspeed_str:
                    maxspeed = float(maxspeed_str)
            if "highway" in tags:
                highway = tags["highway"]
            if "oneway" in tags:
                oneway = 1 if tags["oneway"] == "yes" else 0
            if "geometry" in element:
                geom = element["geometry"]
                length = calculate_length_from_geom(geom)
                break
        return lanes, maxspeed, highway, oneway, length
    except Exception as e:
        print(f"❌ OSM error for {street_name}: {e}")
        return None, None, None, None, None
