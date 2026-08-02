import { useState, useEffect } from 'react'
import { Plus } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import Spinner from '../components/Spinner'
import NewTicketModal from '../components/NewTicketModal'
import { fetchTickets } from '../services/api'
import type { Ticket } from '../types'

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

function Tickets() {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetchTickets()
      .then(setTickets)
      .catch(() => setError('Failed to load tickets. Please try again.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="md:ml-56 pt-20 md:pt-8 p-8 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <h1 className="text-2xl font-bold mb-1 tracking-tight">Tickets</h1>
      <div className="w-10 h-1 bg-teal-500 rounded-full mb-6" />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          {loading ? 'Loading…' : `${tickets.length} tickets`}
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center gap-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition w-full sm:w-auto"
        >
          <Plus size={16} />
          New Ticket
        </button>
      </div>

      {loading && <Spinner />}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {!loading && !error && (
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
                      <span className={`px-2 py-1 rounded-full text-xs ${priorityColor[t.priority]}`}>{t.priority}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${statusColor[t.status]}`}>{t.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      )}

      {showModal && (
        <NewTicketModal
          onClose={() => setShowModal(false)}
          onCreated={(newTicket) => setTickets((prev) => [newTicket, ...prev])}
        />
      )}
    </div>
  )
}

export default Tickets