import { useState } from 'react'
import { Plus, Search, Inbox, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { users } from '../data/users'
import type { User } from '../types'

const statusColor: Record<string, string> = {
  Active: 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
  Inactive: 'bg-slate-400/10 text-slate-500 dark:text-slate-400',
}

const roleColor: Record<string, string> = {
  Admin: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  Manager: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  User: 'bg-slate-400/10 text-slate-500 dark:text-slate-400',
}

function Users() {
  const [search, setSearch] = useState('')
  const [sortKey, setSortKey] = useState<keyof User>('id')
  const [sortAsc, setSortAsc] = useState(true)
  const [page, setPage] = useState(1)
  const pageSize = 4

  function handleSort(key: keyof User) {
    if (sortKey === key) {
      setSortAsc(!sortAsc)
    } else {
      setSortKey(key)
      setSortAsc(true)
    }
  }

  const filteredUsers = users
    .filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.id.toLowerCase().includes(search.toLowerCase()) ||
        u.department.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const result = String(a[sortKey]).localeCompare(String(b[sortKey]))
      return sortAsc ? result : -result
    })

  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / pageSize))
  const paginatedUsers = filteredUsers.slice((page - 1) * pageSize, page * pageSize)

  return (
    <div className="md:ml-56 pt-20 md:pt-8 p-8 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <h1 className="text-2xl font-bold mb-1 tracking-tight">User Management</h1>
      <div className="w-10 h-1 bg-teal-500 rounded-full mb-6" />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <p className="text-slate-500 dark:text-slate-400 text-sm">{users.length} users</p>
        <button className="flex items-center justify-center gap-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition w-full sm:w-auto">
          <Plus size={16} />
          Add User
        </button>
      </div>

      <div className="relative mb-6">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setPage(1)
          }}
          placeholder="Search users..."
          aria-label="Search users"
          className="w-full pl-9 pr-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm placeholder-slate-400"
        />
      </div>

      {filteredUsers.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
          <Inbox className="mx-auto mb-3 text-slate-400" size={28} />
          <p className="text-slate-600 dark:text-slate-400">No users found</p>
        </div>
      ) : (
        <>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-x-auto transition-colors">
            <table className="w-full text-sm min-w-[600px]">
              <thead className="bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-left">
                <tr>
                  {([
                    ['id', 'User ID'],
                    ['name', 'Name'],
                    ['department', 'Department'],
                    ['role', 'Role'],
                    ['status', 'Status'],
                  ] as [keyof User, string][]).map(([key, label]) => (
                    <th key={key} className="px-5 py-3 font-medium">
                      <button
                        onClick={() => handleSort(key)}
                        className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition"
                      >
                        {label}
                        <ArrowUpDown size={12} className={sortKey === key ? 'text-teal-500' : 'text-slate-400'} />
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((u) => (
                  <tr key={u.id} className="border-t border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition">
                    <td className="px-5 py-4 text-slate-700 dark:text-slate-300 font-medium">{u.id}</td>
                    <td className="px-5 py-4 text-slate-700 dark:text-slate-300">{u.name}</td>
                    <td className="px-5 py-4 text-slate-500 dark:text-slate-400">{u.department}</td>
                    <td className="px-5 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${roleColor[u.role]}`}>{u.role}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${statusColor[u.status]}`}>{u.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-4 text-sm text-slate-500 dark:text-slate-400">
            <span>Page {page} of {totalPages}</span>
            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                aria-label="Previous page"
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                aria-label="Next page"
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Users