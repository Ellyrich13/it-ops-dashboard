import FadeIn from '../components/FadeIn'

function Assets() {
  const assets = [
    { id: 'AST-001', name: 'Dell Latitude 5420', type: 'Laptop', assignedTo: 'John Smith', status: 'Active' },
    { id: 'AST-002', name: 'HP ProDesk 400', type: 'Desktop', assignedTo: 'Finance Dept', status: 'Active' },
    { id: 'AST-003', name: 'Cisco ASA 5506', type: 'Firewall', assignedTo: 'Accra HQ', status: 'Active' },
    { id: 'AST-004', name: 'FortiGate 60F', type: 'Firewall', assignedTo: 'Monrovia Office', status: 'Active' },
    { id: 'AST-005', name: 'Dell PowerEdge R740', type: 'Server', assignedTo: 'Server Room', status: 'Maintenance' },
    { id: 'AST-006', name: 'Lenovo ThinkPad X1', type: 'Laptop', assignedTo: 'Grace Mensah', status: 'Active' },
    { id: 'AST-007', name: 'HP LaserJet Pro', type: 'Printer', assignedTo: 'Finance Dept', status: 'Retired' },
  ]

  const statusColor: Record<string, string> = {
    Active: 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
    Maintenance: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
    Retired: 'bg-slate-400/10 text-slate-500 dark:text-slate-400',
  }

  return (
    <div className="md:ml-56 pt-20 md:pt-8 p-8 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-bold">Asset Inventory</h1>
        <button className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition w-full sm:w-auto">
          + Add Asset
        </button>
      </div>

      <FadeIn>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-x-auto transition-colors">
          <table className="w-full text-sm min-w-[650px]">
            <thead className="bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-left">
              <tr>
                <th className="px-5 py-3 font-medium">Asset ID</th>
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Type</th>
                <th className="px-5 py-3 font-medium">Assigned To</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((a) => (
                <tr key={a.id} className="border-t border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition">
                  <td className="px-5 py-4 text-slate-700 dark:text-slate-300 font-medium">{a.id}</td>
                  <td className="px-5 py-4 text-slate-700 dark:text-slate-300">{a.name}</td>
                  <td className="px-5 py-4 text-slate-500 dark:text-slate-400">{a.type}</td>
                  <td className="px-5 py-4 text-slate-500 dark:text-slate-400">{a.assignedTo}</td>
                  <td className="px-5 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${statusColor[a.status]}`}>
                      {a.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>
    </div>
  )
}

export default Assets