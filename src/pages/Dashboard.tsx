import { Users, Monitor, Ticket, AlertTriangle } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'
import FadeIn from '../components/FadeIn'
import { stats, ticketData, networkStatus } from '../data/dashboard'

const icons = [Users, Monitor, Ticket, AlertTriangle]

function Dashboard() {
  return (
    <div className="md:ml-56 pt-20 md:pt-8 p-8 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <h1 className="text-2xl font-bold mb-1 tracking-tight">Dashboard</h1>
      <div className="w-10 h-1 bg-teal-500 rounded-full mb-8" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => {
          const Icon = icons[i % icons.length]
          return (
            <FadeIn key={stat.label} delay={i * 100}>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 transition-colors">
                <Icon size={22} className="text-teal-600 dark:text-teal-400 mb-2" />
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{stat.label}</p>
                <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">{stat.change}</p>
              </div>
            </FadeIn>
          )
        })}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 transition-colors">
          <h2 className="font-semibold mb-4">Tickets This Week</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={ticketData}>
              <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
              <Bar dataKey="tickets" fill="#14b8a6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 transition-colors">
          <h2 className="font-semibold mb-4">Network Status</h2>
          <div className="space-y-3">
            {networkStatus.map((site) => (
              <div key={site.name} className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-300">{site.name}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    site.status === 'Online'
                      ? 'bg-teal-500/10 text-teal-600 dark:text-teal-400'
                      : 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
                  }`}
                >
                  {site.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard