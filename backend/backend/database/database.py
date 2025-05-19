# database/database.py
import mysql.connector
from config import DB_CONFIG

def connect_db():
    return mysql.connector.connect(**DB_CONFIG)

def get_videos_from_db():
    """
    Retrieve all videos along with road attributes from the joined tables.
    Expects columns: VideoID, FilePath, DateUploaded, RoadID, StreetName, Latitude, Longitude, VehicleThreshold.
    """
    conn = connect_db()
    cursor = conn.cursor()
    query = """
    SELECT v.VideoID, v.FilePath, v.DateUploaded, 
           r.RoadID, r.StreetName, r.Latitude, r.Longitude, r.VehicleThreshold
    FROM videos v
    JOIN road_data r ON v.RoadID = r.RoadID;
    """
    cursor.execute(query)
    videos = cursor.fetchall()
    conn.close()
    return videos

def store_street_prediction(road_id, final_prob):
    """
    Stores the final traffic prediction probability (0 to 1).
    """
    conn = connect_db()
    cursor = conn.cursor()
    query = """
    INSERT INTO street_predictions (RoadID, FinalPrediction)
    VALUES (%s, %s)
    ON DUPLICATE KEY UPDATE FinalPrediction = VALUES(FinalPrediction), ProcessedAt = CURRENT_TIMESTAMP;
    """
    cursor.execute(query, (road_id, float(final_prob)))

    conn.commit()
    conn.close()
    print(f"Stored final prediction probability for RoadID {road_id}: {final_prob:.2f}")
