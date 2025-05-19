
import pandas as pd
import numpy as np
import xgboost as xgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

# Load the dataset (update with your actual file path)
df = pd.read_csv("../MLDAS.csv")

# Display basic information about the dataset
print("Dataset shape:", df.shape)
print("First few rows:\n", df.head())

# Convert continuous 'traffic_intensity' into binary classes using median threshold
threshold = df["traffic_intensity"].median()
df["TrafficStatus"] = np.where(df["traffic_intensity"] > threshold, 1, 0)

# Define features (X) and target (y)
X = df.drop(columns=["traffic_intensity", "TrafficStatus"])  # Drop target variable
y = df["TrafficStatus"]  # Target variable

# Split data into training and testing sets (80% train, 20% test)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Convert data to DMatrix format for XGBoost (optimizes GPU processing)
dtrain = xgb.DMatrix(X_train, label=y_train)
dtest = xgb.DMatrix(X_test, label=y_test)

# Set up XGBoost parameters (using GPU acceleration)
params = {
    "objective": "binary:logistic",  # Binary classification
    "tree_method": "gpu_hist",  # Enable GPU acceleration
    "eval_metric": "logloss",  # Loss function
    "learning_rate": 0.1,
    "max_depth": 6,
    "n_estimators": 100,
}

# Train the XGBoost model
model = xgb.train(params, dtrain, num_boost_round=100)

# Make predictions
y_pred_prob = model.predict(dtest)
y_pred = (y_pred_prob > 0.5).astype(int)  # Convert probabilities to binary classes

# Evaluate model performance
accuracy = accuracy_score(y_test, y_pred)
print(f"XGBoost GPU Model Accuracy: {accuracy:.4f}")
print("Classification Report:\n", classification_report(y_test, y_pred))

# Save the trained model for later use
model.save_model("traffic_xgboost_gpu.json")
print("Model saved as traffic_xgboost_gpu.json")
