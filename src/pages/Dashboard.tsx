import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'
import FadeIn from '../components/FadeIn'

function Dashboard() {
  const stats = [
    { label: 'Total Users', value: '1,284', icon: '👥', change: '+12 this week' },
    { label: 'Active Devices', value: '347', icon: '💻', change: '3 offline' },
    { label: 'Open Tickets', value: '28', icon: '🎫', change: '5 high priority' },
    { label: 'System Alerts', value: '4', icon: '🚨', change: '1 critical' },
  ]

  const ticketData = [
    { day: 'Mon', tickets: 12 },
    { day: 'Tue', tickets: 19 },
    { day: 'Wed', tickets: 8 },
    { day: 'Thu', tickets: 15 },
    { day: 'Fri', tickets: 22 },
    { day: 'Sat', tickets: 6 },
    { day: 'Sun', tickets: 4 },
  ]

  const networkStatus = [
    { name: 'Accra HQ', status: 'Online' },
    { name: 'Monrovia Office', status: 'Online' },
    { name: 'Backup Server', status: 'Degraded' },
    { name: 'VPN Gateway', status: 'Online' },
  ]

  return (
    <div className="md:ml-56 pt-20 md:pt-8 p-8 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 100}>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 transition-colors">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">{stat.label}</p>
              <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">{stat.change}</p>
            </div>
          </FadeIn>
        ))}
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