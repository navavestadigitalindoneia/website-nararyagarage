# Project Status & Roadmap

## Repository baseline
- Repository: `navavestadigitalindoneia/website-nararyagarage`
- Default branch: `main`
- Initial repository state: empty
- Current delivery: public Next.js foundation and clearly marked route placeholders

## Status definitions
Use only: COMPLETED, WORKING, PARTIALLY IMPLEMENTED, NOT CONFIGURED, NOT IMPLEMENTED, FAILED, NEEDS VERIFICATION.

| Area | Status | Notes |
|---|---|---|
| Public homepage and visual shell | WORKING | Initial responsive landing page |
| Shared header/footer and mobile menu | WORKING | Client-side menu state |
| Public route coverage | PARTIALLY IMPLEMENTED | Informational placeholders only |
| SEO metadata | PARTIALLY IMPLEMENTED | Root and section metadata; sitemap/robots/schema pending |
| PostgreSQL + Prisma 7 | NOT IMPLEMENTED | Preserve data; no destructive setup |
| Authentication / OAuth / email | NOT IMPLEMENTED | Must be server-side and securely tested |
| Member Center / RBAC | NOT IMPLEMENTED | Protect all private/admin routes |
| Community / events / convoy | NOT IMPLEMENTED | Requires persistent models and APIs |
| Modding / creator submissions | NOT IMPLEMENTED | Moderation workflow required |
| Gallery / videos / tutorials / downloads | NOT IMPLEMENTED | Storage, licensing, and moderation required |
| Forum / reports / moderation | NOT IMPLEMENTED | RBAC and audit trail required |
| Recruitment / fleet / achievements | NOT IMPLEMENTED | Database-backed workflows required |
| Admin Control Center | NOT IMPLEMENTED | No admin access until authorization exists |
| Store / checkout / Midtrans | NOT IMPLEMENTED | Server-owned catalog/prices and verified webhooks required |
| AI Store Assistant | NOT CONFIGURED | Must use server catalog and never invent payment status |
| GitHub API / webhook / scraper | NOT CONFIGURED | Credentials and verified webhook handling required |
| Localization (10 languages) | NOT IMPLEMENTED | Full page-level translation required |
| Automated tests / CI / deployment | NOT IMPLEMENTED | Build and integration checks pending |

## Roadmap
1. Foundation: app shell, accessibility, SEO, lint/build CI.
2. Data and security: Prisma schema, PostgreSQL migrations, auth, sessions, RBAC, validation, audit logging.
3. Community: platforms, communities, members, events, convoy registration.
4. Creator ecosystem: mods, liveries, showcase, gallery, videos, tutorials, downloads, moderation.
5. Member operations: forum, recruitment, fleet, achievements, notifications.
6. Admin Control Center: secure role-protected management and real database statistics.
7. Store: server catalog, cart, order persistence, Midtrans verified webhook, WhatsApp confirmation.
8. Integrations: AI assistant, GitHub discovery/webhooks, scheduled sync with rate limits and freshness.
9. Quality: localization, performance, accessibility, security, end-to-end tests, deployment readiness.

## Non-negotiable safeguards
- No fake data or fabricated live status.
- No secrets in client bundles.
- Never trust browser-supplied prices or payment status.
- Never publish creator submissions before moderation.
- No destructive production migrations without backup and explicit approval.
- Mark an integration active only after configuration and verification.
