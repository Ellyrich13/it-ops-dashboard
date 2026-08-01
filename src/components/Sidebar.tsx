import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const links = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/users', label: 'Users', icon: '👥' },
    { path: '/tickets', label: 'Tickets', icon: '🎫' },
    { path: '/assets', label: 'Assets', icon: '💻' },
    { path: '/reports', label: 'Reports', icon: '📈' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ]

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 z-50 transition-colors">
        <span className="text-slate-900 dark:text-white font-bold flex items-center gap-2">
          <span>🖥️</span>IT Ops
        </span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="bg-slate-800 dark:bg-slate-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm"
          >
            {isDark ? '🌙' : '☀️'}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="text-slate-900 dark:text-white text-2xl w-8 h-8 flex items-center justify-center"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <aside
        className={`fixed left-0 top-0 h-screen w-56 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col py-6 z-40 transition-transform duration-300 transition-colors ${
          open ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="px-6 mb-8 mt-2 md:mt-0 hidden md:flex items-center justify-between">
          <h1 className="text-slate-900 dark:text-white font-bold text-lg flex items-center gap-2">
            <span>🖥️</span>IT Ops
          </h1>
          <button
            onClick={() => setIsDark(!isDark)}
            className="bg-slate-800 dark:bg-slate-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm"
          >
            {isDark ? '🌙' : '☀️'}
          </button>
        </div>
        <div className="px-6 mb-4 mt-14 md:hidden" />
        <nav className="flex-1 flex flex-col gap-1 px-3">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                location.pathname === link.path
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="md:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}
    </>
  )
}

export default Sidebar