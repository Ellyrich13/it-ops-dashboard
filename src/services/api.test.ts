import { describe, it, expect } from 'vitest'
import { validateTicketForm } from './api'

describe('validateTicketForm', () => {
  it('returns an error when the user name is too short', () => {
    const errors = validateTicketForm('J', 'Cannot access email')
    expect(errors.user).toBeDefined()
  })

  it('returns an error when the issue description is too short', () => {
    const errors = validateTicketForm('John Smith', 'Hi')
    expect(errors.issue).toBeDefined()
  })

  it('returns no errors for valid input', () => {
    const errors = validateTicketForm('John Smith', 'Cannot access email')
    expect(errors.user).toBeUndefined()
    expect(errors.issue).toBeUndefined()
  })

  it('treats whitespace-only input as invalid', () => {
    const errors = validateTicketForm('   ', '     ')
    expect(errors.user).toBeDefined()
    expect(errors.issue).toBeDefined()
  })
})