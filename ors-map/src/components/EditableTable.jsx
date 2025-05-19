'use client';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditableTable({ endpoint, columns }) {
  const [data, setData] = useState([]);
  const [savingId, setSavingId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then(setData)
      .catch(() => toast.error('❌ Failed to load data'))
      .finally(() => setLoading(false));
  }, [endpoint]);

  const handleChange = (id, key, value) => {
    setData((prev) =>
      prev.map((row) =>
        row.id === id || row.RoadID === id ? { ...row, [key]: value } : row
      )
    );
  };

  const handleSave = async (row) => {
    const rowId = row.id || row.RoadID;
    setSavingId(rowId);

    const res = await fetch(endpoint, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(row),
    });

    if (res.ok) {
      toast.success('✅ Saved successfully');
    } else {
      toast.error('❌ Failed to save');
    }

    setSavingId(null);
  };

  if (loading) {
    return <p className="p-4 text-sm text-gray-500">Loading data...</p>;
  }

  return (
    <div className="overflow-x-auto border rounded p-4 bg-white shadow-sm">
      <ToastContainer />
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => {
            const rowId = row.id || row.RoadID;
            return (
              <tr key={rowId } className="border-t">
                {columns.map((col) => (
                  <td key={col.key}>
                    {col.type === 'select' ? (
                      <select
                        value={row[col.key]}
                        onChange={(e) => handleChange(rowId, col.key, e.target.value)}
                        className="border px-2 py-1 rounded"
                      >
                        {col.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={col.type || 'text'}
                        value={row[col.key] || ''}
                        onChange={(e) => handleChange(rowId, col.key, e.target.value)}
                        className="border px-2 py-1 rounded w-full"
                      />
                    )}
                  </td>
                ))}
                <td>
                  <button
                    onClick={() => handleSave(row)}
                    disabled={savingId === rowId}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 disabled:opacity-50"
                  >
                    {savingId === rowId ? 'Saving...' : 'Save'}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
