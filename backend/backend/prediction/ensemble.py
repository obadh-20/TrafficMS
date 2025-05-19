# prediction/ensemble.py
import xgboost as xgb
import pandas as pd
from config import XGB_MODEL_PATH

xgb_model = xgb.Booster()
xgb_model.load_model(XGB_MODEL_PATH)

def historical_prediction_prob(features):
    """
    Uses historical features to obtain a probability prediction from the XGBoost model.
    """
    df_features = pd.DataFrame([features])
    dmatrix = xgb.DMatrix(df_features)
    pred_prob = xgb_model.predict(dmatrix)
    return pred_prob[0]

def refined_final_traffic_prediction(video_path, features, vehicle_threshold,
                                     weight_hist=0.6, weight_yolo=0.4, threshold=0.55):
    """
    Combines historical and YOLO-based probabilities to produce a refined traffic prediction.
    Returns final binary prediction and intermediate values.
    """
    p_hist = historical_prediction_prob(features)
    from video_processing.video_analysis import yolo_prediction_prob
    p_yolo, veh_count, avg_speed, queue_length = yolo_prediction_prob(video_path, vehicle_threshold)
    combined_prob = (weight_hist * p_hist + weight_yolo * p_yolo) / (weight_hist + weight_yolo)
    final_prediction = 1 if combined_prob > threshold else 0
    print(f"Historical Prob: {p_hist:.2f}, YOLO Prob: {p_yolo:.2f}, Combined Prob: {combined_prob:.2f}")
    return combined_prob, p_hist, p_yolo, veh_count, avg_speed, queue_length

