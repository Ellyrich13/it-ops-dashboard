import '@testing-library/jest-dom'
import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from '../mocks/server'

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// @ts-expect-error — jsdom doesn't implement IntersectionObserver, so we stub it for tests
window.IntersectionObserver = MockIntersectionObserver

// Start the MSW Node server before tests, reset handlers between tests,
// and close it down after all tests finish.
beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())