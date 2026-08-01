import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts'

function Reports() {
  const ticketsByType = [
    { name: 'Hardware', value: 34 },
    { name: 'Network', value: 22 },
    { name: 'Software', value: 28 },
    { name: 'Access', value: 16 },
  ]

  const COLORS = ['#14b8a6', '#3b82f6', '#f59e0b', '#8b5cf6']

  const resolutionTrend = [
    { month: 'Jan', avgHours: 6.2 },
    { month: 'Feb', avgHours: 5.8 },
    { month: 'Mar', avgHours: 4.9 },
    { month: 'Apr', avgHours: 5.1 },
    { month: 'May', avgHours: 4.3 },
    { month: 'Jun', avgHours: 3.9 },
  ]

  return (
    <div className="md:ml-56 pt-20 md:pt-8 p-8 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <h1 className="text-2xl font-bold mb-8">Reports</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 transition-colors">
          <h2 className="font-semibold mb-4">Tickets by Type</h2>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={ticketsByType} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label>
                {ticketsByType.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 transition-colors">
          <h2 className="font-semibold mb-4">Avg. Resolution Time (Hours)</h2>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={resolutionTrend}>
              <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
              <Line type="monotone" dataKey="avgHours" stroke="#14b8a6" strokeWidth={2} dot={{ fill: '#14b8a6' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Reports