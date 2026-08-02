# IT Operations Management Dashboard

An internal-style IT operations dashboard, built as a self-directed frontend project to demonstrate real enterprise IT workflows — ticket management, asset inventory, user administration, and reporting — drawing directly on real systems administration and IT operations experience.

**Live site:** https://ellyrich13.github.io/it-ops-dashboard/

## Overview

Simulates the kind of internal admin tool IT departments use daily: tracking support tickets, managing hardware/software assets, administering users, and reporting on operational metrics like resolution time and ticket volume by category.

## Features

- Sidebar navigation with 6 core sections: Dashboard, Users, Tickets, Assets, Reports, Settings
- Live data visualizations (bar, pie, and line charts) via Recharts
- Ticket and asset tables with color-coded priority/status badges
- Mobile-responsive collapsible sidebar with overlay
- Horizontally scrollable tables on small screens
- Full light/dark mode toggle
- Scroll-triggered fade-in animations

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/) — client-side routing
- [Recharts](https://recharts.org/) — data visualization
- [Vite](https://vitejs.dev/) — build tooling
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Lucide React](https://lucide.dev/) — icons
- Deployed via [GitHub Pages](https://pages.github.com/)

## Project Structure
src/
├── components/ # Sidebar, FadeIn
├── pages/ # Dashboard, Users, Tickets, Assets, Reports, Settings
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

## Deployment Notes

Deployed to GitHub Pages via the `gh-pages` package, with a `404.html` redirect workaround in `public/` to correctly restore deep-linked routes on direct page load.

```bash
npm run deploy
```

## Related Projects

This is one of three linked projects in a broader self-directed portfolio series:

- [Portfolio](https://ellyrich13.github.io/portfolio/) — personal portfolio site
- [CloudSecure](https://ellyrich13.github.io/cloudsecure/) — cybersecurity SaaS landing page

## Contact

- Email: elliothammond13@gmail.com
- LinkedIn: [linkedin.com/in/elliot-hammond](https://linkedin.com/in/elliot-hammond)