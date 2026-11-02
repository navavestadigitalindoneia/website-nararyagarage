# Nararya Garage Website

Virtual Simulator, Modding, and Gaming Community platform.

## Stack
- Next.js 16, React 19, TypeScript
- Tailwind CSS 4
- PostgreSQL + Prisma ORM 7 (database modules to be implemented/configured)

## Getting started
1. Install Node.js 20.9+.
2. Copy `.env.example` to `.env` and configure only the integrations you intend to enable.
3. Install dependencies: `npm install`.
4. Start development: `npm run dev`.

## Current implementation status
This repository started empty. The initial commit establishes the responsive public website shell, navigation, landing page, metadata, and route placeholders. It does **not** claim that authentication, PostgreSQL persistence, Admin Control Center, store checkout, Midtrans, AI, GitHub webhooks, or scraper integrations are operational.

See [PROJECT_STATUS.md](./PROJECT_STATUS.md) for the phased implementation plan. Never use sample values as live business data; never expose integration secrets to the browser.

## Project identity
Nararya Garage is the simulator and gaming community platform. Nararya Studio's service catalog is a separate business identity and must not be mixed with community mod catalogs.
