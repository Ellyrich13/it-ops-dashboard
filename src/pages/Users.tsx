function Users() {
  const users = [
    { id: 'U-001', name: 'John Smith', department: 'Finance', role: 'User', status: 'Active' },
    { id: 'U-002', name: 'Grace Mensah', department: 'Operations', role: 'Manager', status: 'Active' },
    { id: 'U-003', name: 'Samuel Okafor', department: 'Sales', role: 'User', status: 'Active' },
    { id: 'U-004', name: 'Aisha Bello', department: 'HR', role: 'User', status: 'Active' },
    { id: 'U-005', name: 'David Kwame', department: 'IT', role: 'Admin', status: 'Active' },
    { id: 'U-006', name: 'Linda Owusu', department: 'Finance', role: 'User', status: 'Inactive' },
  ]

  const statusColor: Record<string, string> = {
    Active: 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
    Inactive: 'bg-slate-400/10 text-slate-500 dark:text-slate-400',
  }

  const roleColor: Record<string, string> = {
    Admin: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
    Manager: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    User: 'bg-slate-400/10 text-slate-500 dark:text-slate-400',
  }

  return (
    <div className="md:ml-56 pt-20 md:pt-8 p-8 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-bold">User Management</h1>
        <button className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition w-full sm:w-auto">
          + Add User
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-x-auto transition-colors">
        <table className="w-full text-sm min-w-[600px]">
          <thead className="bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-left">
            <tr>
              <th className="px-5 py-3 font-medium">User ID</th>
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Department</th>
              <th className="px-5 py-3 font-medium">Role</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition">
                <td className="px-5 py-4 text-slate-700 dark:text-slate-300 font-medium">{u.id}</td>
                <td className="px-5 py-4 text-slate-700 dark:text-slate-300">{u.name}</td>
                <td className="px-5 py-4 text-slate-500 dark:text-slate-400">{u.department}</td>
                <td className="px-5 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${roleColor[u.role]}`}>
                    {u.role}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${statusColor[u.status]}`}>
                    {u.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users