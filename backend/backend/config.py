from dotenv import load_dotenv
import os

load_dotenv()

DB_CONFIG = {
    "host": os.getenv("DB_HOST"),
    "user": os.getenv("DB_USER"),
    "password": os.getenv("DB_PASSWORD"),
    "database": os.getenv("DB_NAME")
}

YOLO_MODEL_PATH = os.getenv("YOLO_MODEL_PATH")
XGB_MODEL_PATH = os.getenv("XGB_MODEL_PATH")

API_KEYS = {
    "openweather": os.getenv("OPENWEATHER_API_KEY"),
    "overpass_url": os.getenv("OVERPASS_API_URL")
}

FRAME_RATE = int(os.getenv("FRAME_RATE", 30))
PIXEL_TO_METER = float(os.getenv("PIXEL_TO_METER", 0.05))
DEFAULT_VEHICLE_THRESHOLD = int(os.getenv("DEFAULT_VEHICLE_THRESHOLD", 10))
