function Settings() {
  return (
    <div className="md:ml-56 pt-20 md:pt-8 p-8 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <h1 className="text-2xl font-bold mb-8">Settings</h1>

      <div className="max-w-xl space-y-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 transition-colors">
          <h2 className="font-semibold mb-4">Profile</h2>
          <div className="space-y-3">
            <div>
              <label className="text-slate-500 dark:text-slate-400 text-sm block mb-1">Full Name</label>
              <input
                type="text"
                defaultValue="Elliot Ashietey Hammond"
                className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm"
              />
            </div>
            <div>
              <label className="text-slate-500 dark:text-slate-400 text-sm block mb-1">Role</label>
              <input
                type="text"
                defaultValue="Systems Administrator"
                className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm"
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 transition-colors">
          <h2 className="font-semibold mb-4">Notifications</h2>
          <div className="space-y-3">
            {['Email alerts for critical tickets', 'Weekly summary reports', 'System maintenance reminders'].map((item) => (
              <label key={item} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <input type="checkbox" defaultChecked className="accent-teal-500 w-4 h-4" />
                {item}
              </label>
            ))}
          </div>
        </div>

        <button className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-6 py-2.5 rounded-lg text-sm transition">
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default Settings