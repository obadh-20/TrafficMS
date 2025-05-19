# prediction.py
import xgboost as xgb
import pandas as pd
from config import XGB_MODEL_PATH

xgb_model = xgb.Booster()
xgb_model.load_model(XGB_MODEL_PATH)

def historical_prediction_prob(features):
    df_features = pd.DataFrame([features])
    dmatrix = xgb.DMatrix(df_features)
    return xgb_model.predict(dmatrix)[0]
