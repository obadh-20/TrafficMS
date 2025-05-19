//src/components/MapLoader.jsx
'use client';
import dynamic from 'next/dynamic';

const MapController = dynamic(() => import('../containers/MapController'), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

export default function MapLoader() {
  return <MapController />;
}
