import type { Ticket } from '../types'

export const tickets: Ticket[] = [
  { id: '#1024', user: 'John Smith', issue: 'Cannot access email', priority: 'High', status: 'In Progress' },
  { id: '#1023', user: 'Grace Mensah', issue: 'VPN connection failing', priority: 'High', status: 'Open' },
  { id: '#1022', user: 'Samuel Okafor', issue: 'Printer offline in Finance', priority: 'Medium', status: 'In Progress' },
  { id: '#1021', user: 'Aisha Bello', issue: 'Password reset request', priority: 'Low', status: 'Resolved' },
  { id: '#1020', user: 'David Kwame', issue: 'Slow network performance', priority: 'Medium', status: 'Open' },
  { id: '#1019', user: 'Linda Owusu', issue: 'New laptop setup', priority: 'Low', status: 'Resolved' },
]