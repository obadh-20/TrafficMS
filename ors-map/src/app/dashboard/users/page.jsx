import EditableTable from '@/components/EditableTable';

export default function UsersDashboard() {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">👤 Manage Users</h1>
      <EditableTable
        endpoint="/api/dashboard/users"
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'role', label: 'Role', type: 'select', options: ['user', 'admin'] },
        ]}
      />
    </div>
  );
}
