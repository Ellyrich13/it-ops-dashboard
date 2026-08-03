import { useState, useEffect } from 'react'
import { Plus, AlertCircle, Inbox, Search } from 'lucide-react'
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
  const [search, setSearch] = useState('')

  function loadTickets() {
    setLoading(true)
    setError(null)
    fetchTickets()
      .then(setTickets)
      .catch(() => setError('Failed to load tickets. Please try again.'))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    loadTickets()
  }, [])

  const filteredTickets = tickets.filter(
    (t) =>
      t.user.toLowerCase().includes(search.toLowerCase()) ||
      t.issue.toLowerCase().includes(search.toLowerCase()) ||
      t.id.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="md:ml-56 pt-20 md:pt-8 p-8 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <h1 className="text-2xl font-bold mb-1 tracking-tight">Tickets</h1>
      <div className="w-10 h-1 bg-teal-500 rounded-full mb-6" />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
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

      <div className="relative mb-6">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tickets..."
          aria-label="Search tickets"
          className="w-full pl-9 pr-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm placeholder-slate-400"
        />
      </div>

      {loading && <Spinner />}

      {error && (
        <div className="text-center py-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
          <AlertCircle className="mx-auto mb-3 text-red-500" size={28} />
          <p className="text-slate-600 dark:text-slate-400 mb-4">{error}</p>
          <button
            onClick={loadTickets}
            className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition"
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && filteredTickets.length === 0 && (
        <div className="text-center py-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
          <Inbox className="mx-auto mb-3 text-slate-400" size={28} />
          <p className="text-slate-600 dark:text-slate-400 mb-4">No tickets found</p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition"
          >
            Create your first ticket
          </button>
        </div>
      )}

      {!loading && !error && filteredTickets.length > 0 && (
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
                {filteredTickets.map((t) => (
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