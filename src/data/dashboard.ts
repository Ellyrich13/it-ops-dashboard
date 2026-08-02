import type { Stat, TicketDay, NetworkSite } from '../types'

export const stats: Stat[] = [
  { label: 'Total Users', value: '1,284', change: '+12 this week' },
  { label: 'Active Devices', value: '347', change: '3 offline' },
  { label: 'Open Tickets', value: '28', change: '5 high priority' },
  { label: 'System Alerts', value: '4', change: '1 critical' },
]

export const ticketData: TicketDay[] = [
  { day: 'Mon', tickets: 12 },
  { day: 'Tue', tickets: 19 },
  { day: 'Wed', tickets: 8 },
  { day: 'Thu', tickets: 15 },
  { day: 'Fri', tickets: 22 },
  { day: 'Sat', tickets: 6 },
  { day: 'Sun', tickets: 4 },
]

export const networkStatus: NetworkSite[] = [
  { name: 'Accra HQ', status: 'Online' },
  { name: 'Monrovia Office', status: 'Online' },
  { name: 'Backup Server', status: 'Degraded' },
  { name: 'VPN Gateway', status: 'Online' },
]