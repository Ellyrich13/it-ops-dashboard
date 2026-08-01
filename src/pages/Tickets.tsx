import FadeIn from '../components/FadeIn'

function Tickets() {
  const tickets = [
    { id: '#1024', user: 'John Smith', issue: 'Cannot access email', priority: 'High', status: 'In Progress' },
    { id: '#1023', user: 'Grace Mensah', issue: 'VPN connection failing', priority: 'High', status: 'Open' },
    { id: '#1022', user: 'Samuel Okafor', issue: 'Printer offline in Finance', priority: 'Medium', status: 'In Progress' },
    { id: '#1021', user: 'Aisha Bello', issue: 'Password reset request', priority: 'Low', status: 'Resolved' },
    { id: '#1020', user: 'David Kwame', issue: 'Slow network performance', priority: 'Medium', status: 'Open' },
    { id: '#1019', user: 'Linda Owusu', issue: 'New laptop setup', priority: 'Low', status: 'Resolved' },
  ]

  const priorityColor: Record<string, string> = {
    High: 'bg-red-500/10 text-red-600 dark:text-red-400',
    Medium: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
    Low: 'bg-slate-400/10 text-slate-500 dark:text-slate-400',
  }

  const statusColor: Record<string, string> = {
    Open: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    'In Progress': 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
    Resolved: 'bg-green-500/10 text-green-600 dark:text-green-400',
  }

  return (
    <div className="md:ml-56 pt-20 md:pt-8 p-8 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-bold">Tickets</h1>
        <button className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition w-full sm:w-auto">
          + New Ticket
        </button>
      </div>

      <FadeIn>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-x-auto transition-colors">
          <table className="w-full text-sm min-w-[650px]">
            <thead className="bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-left">
              <tr>
                <th className="px-5 py-3 font-medium">Ticket</th>
                <th className="px-5 py-3 font-medium">User</th>
                <th className="px-5 py-3 font-medium">Issue</th>
                <th className="px-5 py-3 font-medium">Priority</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((t) => (
                <tr key={t.id} className="border-t border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition">
                  <td className="px-5 py-4 text-slate-700 dark:text-slate-300 font-medium">{t.id}</td>
                  <td className="px-5 py-4 text-slate-700 dark:text-slate-300">{t.user}</td>
                  <td className="px-5 py-4 text-slate-500 dark:text-slate-400">{t.issue}</td>
                  <td className="px-5 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${priorityColor[t.priority]}`}>
                      {t.priority}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${statusColor[t.status]}`}>
                      {t.status}
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

export default Tickets