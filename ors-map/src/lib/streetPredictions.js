//src/api/street_predictions.js
export const fetchPredictedTime = async (streetName) => {
    try {
      const res = await fetch(`/api/street_predictions?streetName=${encodeURIComponent(streetName)}`);
  
      if (!res.ok) {
        console.warn('Street prediction request failed:', res.statusText);
        return null;
      }
  
      const result = await res.json();
      return {
        predicted_time: result.FinalPrediction || 1,
        metadata: {
          roadID: result.RoadID,
          lanes: result.Lanes,
          speed: result.MaxSpeed,
          highway: result.HighwayType,
          length: result.Length,
        }
      };
    } catch (e) {
      console.warn('Prediction fetch failed:', e);
      return null;
    }
  };
  