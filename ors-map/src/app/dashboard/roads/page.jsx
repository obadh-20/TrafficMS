import EditableTable from '@/components/EditableTable';

export default function RoadDashboard() {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">📍 Manage Roads</h1>
      <EditableTable
        endpoint="/api/dashboard/road_data"
        columns={[
          { key: 'StreetName', label: 'Street Name' },
          { key: 'MaxSpeed', label: 'Speed', type: 'number' },
          { key: 'Lanes', label: 'Lanes', type: 'number' },
          { key: 'HighwayType', label: 'Highway' },
        ]}
      />
    </div>
  );
}
