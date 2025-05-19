//src/app/map/page.jsx
'use client';
import MapLoader from '@/components/MapLoader';

export default function MapPage() {

  return (
    <div className="p-4">


      <h1 className="text-xl font-semibold mb-4">Map View</h1>
      <MapLoader />
    </div>
  );
}
