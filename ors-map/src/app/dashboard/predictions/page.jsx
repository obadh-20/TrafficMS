import EditableTable from '@/components/EditableTable';

export default function PredictionDashboard() {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">⏱️ Manage Predictions</h1>
      <EditableTable
        endpoint="/api/dashboard/street_predictions"
        columns={[
          { key: 'FinalPrediction', label: 'Final Prediction', type: 'number' },
          { key: 'ProcessedAt', label: 'Last Updated' },
        ]}
      />
    </div>
  );
}
