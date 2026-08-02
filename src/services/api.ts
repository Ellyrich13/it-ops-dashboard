import { tickets as mockTickets } from '../data/tickets'
import { assets as mockAssets } from '../data/assets'
import { users as mockUsers } from '../data/users'
import type { Ticket, Asset, User } from '../types'

function simulateRequest<T>(data: T, delayMs = 600): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delayMs)
  })
}

export async function fetchTickets(): Promise<Ticket[]> {
  return simulateRequest(mockTickets)
}

export async function fetchAssets(): Promise<Asset[]> {
  return simulateRequest(mockAssets)
}

export async function fetchUsers(): Promise<User[]> {
  return simulateRequest(mockUsers)
}

export async function createTicket(ticket: Omit<Ticket, 'id'>): Promise<Ticket> {
  const newTicket: Ticket = { ...ticket, id: `#${1000 + Math.floor(Math.random() * 9000)}` }
  return simulateRequest(newTicket, 400)
}

export function validateTicketForm(user: string, issue: string): { user?: string; issue?: string } {
  const errors: { user?: string; issue?: string } = {}
  if (user.trim().length < 2) errors.user = "Enter the user's full name."
  if (issue.trim().length < 5) errors.issue = 'Describe the issue in at least 5 characters.'
  return errors
}