//src/app/dashboard/map/page.jsx
'use client';

import { MapContainer, TileLayer, Circle, Tooltip } from 'react-leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

export default function AdminMapView() {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    fetch('/api/dashboard/street_predictions')
      .then(res => res.json())
      .then(data => setPredictions(data))
      .catch(err => console.error('❌ Error fetching predictions:', err));
  }, []);

  const getColorByCongestion = (value) => {
    if (value >= 0.8) return 'red';
    if (value >= 0.6) return 'orange';
    if (value >= 0.4) return 'yellow';
    return 'green';
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🚦 Congestion Overview</h1>

      <MapContainer
        center={[31.9539, 35.9106]} // Amman
        zoom={13}
        style={{ height: '75vh', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {predictions.map((segment, i) => {
          const { RoadID, FinalPrediction, Latitude, Longitude } = segment;

          if (!Latitude || !Longitude || isNaN(Latitude) || isNaN(Longitude)) return null;

          return (
            <Circle
              key={i}
              center={[parseFloat(Latitude), parseFloat(Longitude)]}
              radius={150}
              pathOptions={{
                color: getColorByCongestion(FinalPrediction),
                fillOpacity: 0.6,
              }}
            >
              <Tooltip>
                <div>
                  <strong>Road ID:</strong> {RoadID}<br />
                  <strong>Congestion:</strong> {(FinalPrediction * 100).toFixed(0)}%
                </div>
              </Tooltip>
            </Circle>
          );
        })}
      </MapContainer>
    </div>
  );
}
