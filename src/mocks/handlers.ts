import { http, HttpResponse, delay } from 'msw'
import { tickets as mockTickets } from '../data/tickets'
import { assets as mockAssets } from '../data/assets'
import { users as mockUsers } from '../data/users'
import type { Ticket } from '../types'

// In-memory store so created tickets persist for the session
let ticketStore = [...mockTickets]

export const handlers = [
  http.get('/api/tickets', async () => {
    await delay(600)
    return HttpResponse.json(ticketStore)
  }),

  http.post('/api/tickets', async ({ request }) => {
    await delay(400)
    const body = (await request.json()) as Omit<Ticket, 'id'>
    const newTicket: Ticket = { ...body, id: `#${1000 + Math.floor(Math.random() * 9000)}` }
    ticketStore = [newTicket, ...ticketStore]
    return HttpResponse.json(newTicket, { status: 201 })
  }),

  http.get('/api/assets', async () => {
    await delay(600)
    return HttpResponse.json(mockAssets)
  }),

  http.get('/api/users', async () => {
    await delay(600)
    return HttpResponse.json(mockUsers)
  }),
]