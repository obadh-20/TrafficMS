import schedule
import time
from main import run_street_level_prediction

# Schedule to run every hour
schedule.every().hour.at(":00").do(run_street_level_prediction)

print("⏳ Scheduler started. Running every hour...")
while True:
    schedule.run_pending()
    time.sleep(1)
