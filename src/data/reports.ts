import type { TicketsByType, ResolutionMonth, IncidentTrend, SlaCompliance } from '../types'

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

export const incidentTrends: IncidentTrend[] = [
  { month: 'Jan', incidents: 14 },
  { month: 'Feb', incidents: 11 },
  { month: 'Mar', incidents: 9 },
  { month: 'Apr', incidents: 12 },
  { month: 'May', incidents: 7 },
  { month: 'Jun', incidents: 5 },
]

export const slaCompliance: SlaCompliance[] = [
  { category: 'Hardware', compliance: 96 },
  { category: 'Network', compliance: 91 },
  { category: 'Software', compliance: 94 },
  { category: 'Access', compliance: 99 },
]