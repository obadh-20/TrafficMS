//src/components/MapView.jsx
'use client';
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import RoutePopup from './RoutePopup';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

const MapView = ({
  startPoint,
  endPoint,
  setStartPoint,
  setEndPoint,
  selecting,
  routes,
  showTimes,
}) => {
  function MapClickHandler() {
    useMapEvents({
      click(e) {
        if (!selecting) return;
        if (startPoint && endPoint) {
          setStartPoint([e.latlng.lat, e.latlng.lng]);
          setEndPoint(null);
        } else if (!startPoint) {
          setStartPoint([e.latlng.lat, e.latlng.lng]);
        } else {
          setEndPoint([e.latlng.lat, e.latlng.lng]);
        }
      },
    });
    return null;
  }

  const decodePolyline = (geometry) => geometry.coordinates.map(coord => [coord[1], coord[0]]);
  const routeColors = ['#FF0000', '#00FF00', '#0000FF'];

  return (
    <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">
      <MapContainer
        center={[31.9539, 35.9106]}
        zoom={13}
        style={{ height: '75vh', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        <MapClickHandler />

        {startPoint && <Marker position={startPoint}><Popup>Start Point</Popup></Marker>}
        {endPoint && <Marker position={endPoint}><Popup>End Point</Popup></Marker>}

        {showTimes && endPoint && <RoutePopup endPoint={endPoint} routes={routes} />}

        {routes.map((route, index) => (
          <Polyline
            key={index}
            positions={decodePolyline(route.geometry)}
            color={routeColors[index % routeColors.length]}
            weight={3}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
