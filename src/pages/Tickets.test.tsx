import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Tickets from './Tickets'

describe('Tickets page', () => {
  it('shows a loading state initially', () => {
    render(
      <BrowserRouter>
        <Tickets />
      </BrowserRouter>
    )
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it('eventually renders ticket data', async () => {
    render(
      <BrowserRouter>
        <Tickets />
      </BrowserRouter>
    )
    const ticketCell = await screen.findByText('Cannot access email')
    expect(ticketCell).toBeInTheDocument()
  })
})