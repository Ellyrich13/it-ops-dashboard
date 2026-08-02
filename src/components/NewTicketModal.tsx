import { useState } from 'react'
import { X } from 'lucide-react'
import type { Ticket } from '../types'
import { createTicket, validateTicketForm } from '../services/api'

interface Props {
  onClose: () => void
  onCreated: (ticket: Ticket) => void
}

interface FormErrors {
  user?: string
  issue?: string
}

function NewTicketModal({ onClose, onCreated }: Props) {
  const [user, setUser] = useState('')
  const [issue, setIssue] = useState('')
  const [priority, setPriority] = useState<Ticket['priority']>('Medium')
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)

  function validate(): boolean {
    const next = validateTicketForm(user, issue)
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)
    try {
      const newTicket = await createTicket({ user, issue, priority, status: 'Open' })
      onCreated(newTicket)
      onClose()
    } catch {
      setErrors({ issue: 'Something went wrong creating the ticket. Try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 w-full max-w-md border border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">New Ticket</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label className="text-slate-500 dark:text-slate-400 text-sm block mb-1">User</label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border text-slate-900 dark:text-white text-sm ${
                errors.user ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
              }`}
              placeholder="e.g. Grace Mensah"
            />
            {errors.user && <p className="text-red-500 text-xs mt-1">{errors.user}</p>}
          </div>

          <div>
            <label className="text-slate-500 dark:text-slate-400 text-sm block mb-1">Issue</label>
            <textarea
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              rows={3}
              className={`w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border text-slate-900 dark:text-white text-sm ${
                errors.issue ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
              }`}
              placeholder="Describe the issue"
            />
            {errors.issue && <p className="text-red-500 text-xs mt-1">{errors.issue}</p>}
          </div>

          <div>
            <label className="text-slate-500 dark:text-slate-400 text-sm block mb-1">Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as Ticket['priority'])}
              className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold py-2.5 rounded-lg text-sm transition disabled:opacity-50"
          >
            {submitting ? 'Creating…' : 'Create Ticket'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewTicketModal