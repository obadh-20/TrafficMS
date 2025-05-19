# video_processing/video_analysis.py
import cv2
import numpy as np
from ultralytics import YOLO
from config import FRAME_RATE, PIXEL_TO_METER

# Load YOLOv8 model from models folder
yolo_model = YOLO("models/yolov8n.pt")

lk_params = dict(winSize=(15, 15),
                 maxLevel=2,
                 criteria=(cv2.TERM_CRITERIA_EPS | cv2.TERM_CRITERIA_COUNT, 10, 0.03))

def process_video(video_path):
    """
    Processes a video using YOLO and optical flow to estimate:
      - Average vehicle count
      - Average speed (km/h)
      - Queue length (approximation)
    """
    cap = cv2.VideoCapture("." + video_path)
    if not cap.isOpened():
        print("Error opening video:", video_path)
        return 0, 0, 0

    vehicle_counts = []
    speed_estimates = []
    total_frames = 0
    prev_gray = None
    prev_points = None

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        total_frames += 1
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        results = yolo_model(frame)
        current_centroids = []
        count = 0
        for result in results:
            for box in result.boxes:
                class_id = int(box.cls[0])
                if class_id in [2, 3, 5, 7]:
                    x1, y1, x2, y2 = map(int, box.xyxy[0])
                    centroid = ((x1 + x2) // 2, (y1 + y2) // 2)
                    current_centroids.append(centroid)
                    count += 1
        vehicle_counts.append(count)
        current_points = np.array(current_centroids, dtype=np.float32).reshape(-1, 1, 2) if current_centroids else None
        if prev_gray is not None and prev_points is not None and current_points is not None:
            new_points, status, error = cv2.calcOpticalFlowPyrLK(prev_gray, gray, prev_points, current_points, **lk_params)
            if new_points is not None and status is not None:
                good_new = new_points[status.flatten() == 1]
                good_old = prev_points[status.flatten() == 1]
                frame_speeds = []
                for (new, old) in zip(good_new, good_old):
                    displacement = np.linalg.norm(new - old)
                    speed_mps = displacement * PIXEL_TO_METER * FRAME_RATE
                    speed_kph = speed_mps * 3.6
                    frame_speeds.append(speed_kph)
                if frame_speeds:
                    speed_estimates.append(np.mean(frame_speeds))
        prev_gray = gray.copy()
        prev_points = current_points.copy() if current_points is not None else None

    cap.release()
    avg_vehicle_count = float(np.mean(vehicle_counts)) if vehicle_counts else 0
    avg_speed = float(np.mean(speed_estimates)) if speed_estimates else 0
    queue_length = avg_vehicle_count * 2
    print(f"Processed {total_frames} frames from {video_path}")
    print(f"Average Vehicle Count: {avg_vehicle_count:.2f}, Average Speed: {avg_speed:.2f} km/h, Queue Length: {queue_length:.2f}")
    return avg_vehicle_count, avg_speed, queue_length

def yolo_prediction_prob(video_path, vehicle_threshold):
    """
    Uses YOLO to process the video and compute a pseudo-probability based on average vehicle count.
    Returns a probability (normalized by vehicle_threshold) and extracted metrics.
    """
    avg_vehicle_count, avg_speed, queue_length = process_video(video_path)
    p_yolo = min(avg_vehicle_count / vehicle_threshold, 1.0)
    return p_yolo, avg_vehicle_count, avg_speed, queue_length
