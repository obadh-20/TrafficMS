//src/app/dashboard/reports/page.jsx
'use client';

import { useEffect, useState } from 'react';

export default function ReportsPage() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch('/api/dashboard/reports')
      .then(res => res.json())
      .then(data => setReports(data))
      .catch(err => console.error('Error fetching report data:', err));
  }, []);

  const exportToCSV = () => {
    if (!reports.length) return;

    const headers = ['Road ID', 'Street Name', 'Final Prediction', 'Processed At'];
    const rows = reports.map(r => [
      r.RoadID,
      r.StreetName,
      (r.FinalPrediction * 100).toFixed(2) + '%',
      new Date(r.ProcessedAt).toLocaleString(),
    ]);

    const csvContent =
      [headers, ...rows].map(row => row.map(field => `"${field}"`).join(',')).join('\n');

    const BOM = '\uFEFF'; // for Arabic encoding
    const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'traffic_report.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">📊 Traffic Reports</h1>

      <div className="flex justify-end mb-4 gap-3">
        <button
          onClick={exportToCSV}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Export CSV
        </button>
        <button
          onClick={() => window.print()}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Print Report
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded shadow p-4 border">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th>Road ID</th>
              <th>Street Name</th>
              <th>Final Prediction</th>
              <th>Processed At</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((row, i) => (
              <tr key={i} className="border-t">
                <td>{row.RoadID}</td>
                <td>{row.StreetName}</td>
                <td>{(row.FinalPrediction * 100).toFixed(0)}%</td>
                <td>{new Date(row.ProcessedAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
