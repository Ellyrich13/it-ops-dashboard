import { Link } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white px-6 transition-colors">
      <AlertTriangle className="text-teal-500 mb-4" size={40} />
      <h1 className="text-3xl font-bold mb-2">Page not found</h1>
      <p className="text-slate-500 dark:text-slate-400 mb-6 text-center">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        to="/"
        className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-6 py-2.5 rounded-lg text-sm transition"
      >
        Back to Dashboard
      </Link>
    </div>
  )
}

export default NotFound