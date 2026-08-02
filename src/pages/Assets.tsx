import { Plus } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { assets } from '../data/assets'

const statusColor: Record<string, string> = {
  Active: 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
  Maintenance: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
  Retired: 'bg-slate-400/10 text-slate-500 dark:text-slate-400',
}

function Assets() {
  return (
    <div className="md:ml-56 pt-20 md:pt-8 p-8 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <h1 className="text-2xl font-bold mb-1 tracking-tight">Asset Inventory</h1>
      <div className="w-10 h-1 bg-teal-500 rounded-full mb-6" />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <p className="text-slate-500 dark:text-slate-400 text-sm">{assets.length} assets</p>
        <button className="flex items-center justify-center gap-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition w-full sm:w-auto">
          <Plus size={16} />
          Add Asset
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
                    <span className={`px-2 py-1 rounded-full text-xs ${statusColor[a.status]}`}>{a.status}</span>
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