import '@testing-library/jest-dom'

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// @ts-expect-error — jsdom doesn't implement IntersectionObserver, so we stub it for tests
window.IntersectionObserver = MockIntersectionObserver