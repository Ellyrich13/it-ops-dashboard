import type { Ticket, Asset, User } from '../types'

export async function fetchTickets(): Promise<Ticket[]> {
  const res = await fetch('/api/tickets')
  if (!res.ok) throw new Error('Failed to fetch tickets')
  return res.json()
}

export async function fetchAssets(): Promise<Asset[]> {
  const res = await fetch('/api/assets')
  if (!res.ok) throw new Error('Failed to fetch assets')
  return res.json()
}

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch('/api/users')
  if (!res.ok) throw new Error('Failed to fetch users')
  return res.json()
}

export async function createTicket(ticket: Omit<Ticket, 'id'>): Promise<Ticket> {
  const res = await fetch('/api/tickets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ticket),
  })
  if (!res.ok) throw new Error('Failed to create ticket')
  return res.json()
}

export function validateTicketForm(user: string, issue: string): { user?: string; issue?: string } {
  const errors: { user?: string; issue?: string } = {}
  if (user.trim().length < 2) errors.user = "Enter the user's full name."
  if (issue.trim().length < 5) errors.issue = 'Describe the issue in at least 5 characters.'
  return errors
}