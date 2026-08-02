import type { TicketsByType, ResolutionMonth } from '../types'

export const ticketsByType: TicketsByType[] = [
  { name: 'Hardware', value: 34 },
  { name: 'Network', value: 22 },
  { name: 'Software', value: 28 },
  { name: 'Access', value: 16 },
]

export const resolutionTrend: ResolutionMonth[] = [
  { month: 'Jan', avgHours: 6.2 },
  { month: 'Feb', avgHours: 5.8 },
  { month: 'Mar', avgHours: 4.9 },
  { month: 'Apr', avgHours: 5.1 },
  { month: 'May', avgHours: 4.3 },
  { month: 'Jun', avgHours: 3.9 },
]