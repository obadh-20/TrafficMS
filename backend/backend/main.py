# main.py
import datetime
import math
from database import get_videos_from_db, store_street_prediction
from prediction.ensemble import refined_final_traffic_prediction


def prepare_historical_features(road_id, street_name, date_uploaded, latitude, longitude):
    """
    Prepare a feature vector for the XGBoost model based on road attributes and DateUploaded.
    Fetches road attributes from OSM and weather data from OpenWeatherMap.
    """
    from data_processing import fetch_osm_data, get_current_weather
    # Fetch road attributes from OSM
    lanes, maxspeed, highway, oneway, road_length = fetch_osm_data(street_name)
    if lanes is None: lanes = 2.0
    if maxspeed is None: maxspeed = 50.0
    if highway is None: highway = "primary"
    if oneway is None: oneway = 0
    if road_length is None: road_length = -0.382243724

    # Map highway string to numeric value
    highway_map = {"motorway": 10, "primary": 7, "secondary": 5, "residential": 2}
    highway_val = highway_map.get(highway, 3)

    # Convert DateUploaded to datetime
    if isinstance(date_uploaded, str):
        try:
            dt = datetime.datetime.strptime(date_uploaded, "%Y-%m-%d %H:%M:%S")
        except Exception as e:
            print("Error parsing DateUploaded, using current time:", e)
            dt = datetime.datetime.now()
    elif isinstance(date_uploaded, datetime.datetime):
        dt = date_uploaded
    else:
        dt = datetime.datetime.now()

    # Time-based features
    hour = dt.hour
    hour_sin = math.sin((2 * math.pi * hour) / 24.0)
    hour_cos = math.cos((2 * math.pi * hour) / 24.0)
    week_day = dt.weekday()
    day_type_Holiday = 0
    day_type_Saturday = 1 if week_day == 5 else 0
    day_type_Sunday = 1 if week_day == 6 else 0
    day_type_Working_day = 1 if week_day < 5 else 0
    month_features = {f"month_{i}": 1 if dt.month == i else 0 for i in range(1, 13)}

    # Get weather data
    wind, precipitation, temperature = get_current_weather(latitude, longitude)
    if wind is None: wind = -0.9
    if precipitation is None: precipitation = -0.2
    if temperature is None: temperature = -0.6

    features = {
        "hour_sin": hour_sin,
        "hour_cos": hour_cos,
        "week_day": week_day,
        "latitude": latitude,
        "longitude": longitude,
        "wind": wind,
        "precipitation": precipitation,
        "temperature": temperature,
        "lanes": lanes,
        "maxspeed": maxspeed,
        "length": road_length,
        "day_type_Holiday": day_type_Holiday,
        "day_type_Saturday": day_type_Saturday,
        "day_type_Sunday": day_type_Sunday,
        "day_type_Working day": day_type_Working_day,
        **month_features,
        "highway": highway_val,
        "oneway": oneway,
        "id": 3397  # Placeholder, as expected by the model.
    }
    return features

def run_street_level_prediction():
    """
    Processes each video individually and stores the resulting street prediction in the database.
    """
    videos = get_videos_from_db()
    for video in videos:
        video_id, file_path, date_uploaded, road_id, street_name, latitude, longitude, vehicle_threshold = video
        features = prepare_historical_features(road_id, street_name, date_uploaded, latitude, longitude)
        final_pred, p_hist, p_yolo, veh_count, avg_speed, queue_length = refined_final_traffic_prediction(
            file_path, features, vehicle_threshold
        )
        store_street_prediction(road_id, final_pred)  # Now final_pred is a float probability
        print(f"Final Prediction for {street_name}: {final_pred:.2%}")


if __name__ == "__main__":
    run_street_level_prediction()
