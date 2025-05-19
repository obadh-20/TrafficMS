//src/app/containers/MapController.jsx
'use client';
import { useEffect, useState } from 'react';
import { fetchRouteData } from '@/lib/openRouteService';
import { fetchPredictedTime } from '@/lib/streetPredictions';
import MapView from '@/components/MapView';
import Controls from '@/components/Controls';

const MapController = () => {
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [routes, setRoutes] = useState([]);
  const [selecting, setSelecting] = useState(false);
  const [showTimes, setShowTimes] = useState(false);

  useEffect(() => {
    if (startPoint && endPoint && selecting) {
      const getRoutes = async () => {
        const rawRoutes = await fetchRouteData(startPoint, endPoint);

        const updatedRoutes = await Promise.all(
          rawRoutes.map(async (route, routeIndex) => {
            let estimatedTotal = 0;
            const streetBreakdown = [];

            for (const segment of route.properties.segments) {
              for (const step of segment.steps) {
                let time = step.duration;
                let streetDetail = { name: step.name, adjustedTime: time };

                if (step.name && step.name !== '-') {
                  const predicted = await fetchPredictedTime(step.name);

                  if (predicted?.predicted_time !== undefined) {
                    const rawTraffic = predicted.predicted_time;
                    const trafficPercentage = rawTraffic * 100;
                    const multiplier = trafficPercentage / 100;
                    const adjustedMultiplier = 1 + multiplier;

                    const adjustedTime = time * adjustedMultiplier;
                    time = adjustedTime;
                    streetDetail.adjustedTime = time;
                    streetDetail.predictedMultiplier = adjustedMultiplier;
                    streetDetail.metadata = predicted.metadata;

                    console.log(
                      `[Route ${routeIndex + 1}] ${step.name} | Base Time: ${step.duration.toFixed(
                        2
                      )}s | Traffic: ${trafficPercentage}% | Adjusted Time: ${adjustedTime.toFixed(2)}s`
                    );
                  } else {
                    console.log(
                      `[Route ${routeIndex + 1}] ${step.name} | Base Time: ${step.duration.toFixed(
                        2
                      )}s | No Prediction Found`
                    );
                  }
                }

                estimatedTotal += time;
                streetBreakdown.push(streetDetail);
              }
            }

            return {
              ...route,
              estimatedTotalTime: estimatedTotal,
              breakdown: streetBreakdown,
            };
          })
        );

        setRoutes(updatedRoutes);
        setSelecting(false);
      };

      getRoutes();
    }
  }, [startPoint, endPoint, selecting]);

  return (
    <div className="flex flex-col gap-4">
      <Controls
        onStart={() => {
          setSelecting(true);
          setStartPoint(null);
          setEndPoint(null);
          setRoutes([]);
        }}
        toggleShowTimes={() => setShowTimes(prev => !prev)}
        showTimes={showTimes}
      />
      <div className="relative">
        <MapView
          startPoint={startPoint}
          endPoint={endPoint}
          setStartPoint={setStartPoint}
          setEndPoint={setEndPoint}
          selecting={selecting}
          routes={routes}
          showTimes={showTimes}
        />
        {selecting && (
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded shadow text-sm z-[999]">
            Tap on the map to select start & end points
          </div>
        )}
      </div>
    </div>
  );
};

export default MapController;
