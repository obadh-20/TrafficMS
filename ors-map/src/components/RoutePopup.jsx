//src/app/components/RoutePopup.jsx
'use client';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

export default function RoutePopup({ endPoint, routes }) {
  const map = useMap();

  useEffect(() => {
    if (!endPoint || !routes || routes.length === 0) return;

    const popup = L.popup()
      .setLatLng(endPoint)
      .setContent(`
        <div>
          <h3><strong>Estimated Times</strong></h3>
          <ul style="margin-top: 8px; font-size: 0.85em">
            ${routes
              .map(
                (route, index) =>
                  `<li><strong>Route ${index + 1}:</strong> ${Math.round(
                    route.estimatedTotalTime / 60
                  )} min</li>`
              )
              .join('')}
          </ul>
        </div>
      `);

    map.openPopup(popup);

    return () => {
      map.closePopup(popup);
    };
  }, [endPoint, routes, map]);

  return null; // Don't render another Marker
}
