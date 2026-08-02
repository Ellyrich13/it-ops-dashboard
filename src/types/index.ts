export interface Stat {
  label: string
  value: string
  change: string
}

export interface TicketDay {
  day: string
  tickets: number
}

export interface NetworkSite {
  name: string
  status: 'Online' | 'Degraded'
}

export interface Ticket {
  id: string
  user: string
  issue: string
  priority: 'High' | 'Medium' | 'Low'
  status: 'Open' | 'In Progress' | 'Resolved'
}

export interface Asset {
  id: string
  name: string
  type: string
  assignedTo: string
  status: 'Active' | 'Maintenance' | 'Retired'
}

export interface User {
  id: string
  name: string
  department: string
  role: 'Admin' | 'Manager' | 'User'
  status: 'Active' | 'Inactive'
}

export interface TicketsByType {
  name: string
  value: number
}

export interface ResolutionMonth {
  month: string
  avgHours: number
}