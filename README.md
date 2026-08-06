# IT Operations Management Dashboard

An enterprise-style IT operations dashboard, built as a self-directed frontend project to demonstrate real IT workflows — ticket management, asset inventory, user administration, and reporting — backed by mock authentication, a network-level mocked API, and automated testing.

**Live site:** https://ellyrich13.github.io/it-ops-dashboard/

## Overview

Simulates the kind of internal admin tool IT departments use daily, drawing directly on real systems administration and IT operations experience: tracking support tickets, managing hardware/software assets, administering users, and reporting on operational metrics.

## Features

- **Authentication** — mock login/logout flow with protected routes and persisted sessions (no real backend, frontend-only demo)
- **Mocked API layer** — Mock Service Worker (MSW) intercepts real `fetch()` calls at the network level for tickets, assets, and users, including a working POST endpoint for ticket creation
- **Data tables** — sortable, searchable, and paginated across Tickets, Assets, and Users
- **Forms** — client-side validated "New Ticket" creation flow
- **Empty and error states** — including a retry action on failed loads
- **Data visualization** — bar, pie, line, and area charts via Recharts (ticket volume, type breakdown, resolution time trend, incident trends, SLA compliance)
- **Full light/dark theming**, shared across the login screen and the authenticated app
- **Mobile-responsive** collapsible sidebar and horizontally scrollable tables
- **Accessibility basics** — keyboard focus states, aria-labels on icon/search controls
- **CI pipeline** — lint, test, and build run automatically on every push via GitHub Actions

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Mock Service Worker](https://mswjs.io/) — API mocking at the network layer
- [Recharts](https://recharts.org/)
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- Deployed via [GitHub Pages](https://pages.github.com/), CI via [GitHub Actions](https://github.com/features/actions)

## Project Structure
src/
├── components/ # Sidebar, FadeIn, Spinner, NewTicketModal, ProtectedRoute
├── context/ # AuthContext, ThemeContext
├── pages/ # Login, Dashboard, Users, Tickets, Assets, Reports, Settings
├── services/ # Mocked API calls (fetch-based, intercepted by MSW)
├── mocks/ # MSW request handlers and browser worker setup
├── data/ # Typed sample data per page
├── types/ # Shared TypeScript interfaces
├── App.tsx
└── main.tsx
## Getting Started

```bash
git clone https://github.com/Ellyrich13/it-ops-dashboard.git
cd it-ops-dashboard
npm install
npm run dev
```

Log in with any valid-format email and a password of 6+ characters — this is a demo auth flow, not a real account system.

## Testing

```bash
npm run test
```

## Deployment Notes

Deployed to GitHub Pages via the `gh-pages` package, with a `404.html` redirect workaround to correctly restore deep-linked routes on direct page load. MSW is enabled in production specifically because this is a portfolio demo with no real backend — a real application would not do this.

```bash
npm run deploy
```

## Related Projects

- [Portfolio](https://ellyrich13.github.io/portfolio/)
- [CloudSecure](https://ellyrich13.github.io/cloudsecure/)

## Contact

- Email: elliothammond13@gmail.com
- LinkedIn: [linkedin.com/in/elliot-hammond](https://linkedin.com/in/elliot-hammond)