# SONIVOLT Store

Premium electronics e-commerce storefront + full admin dashboard for **SONIVOLT** (flagship product: the 4-in-1 Multifunctional Study Buddy). Built with Next.js 15 (App Router), TypeScript, Tailwind CSS and an embedded PostgreSQL database (PGlite) — no external services required to run it locally.

## Quick start

```bash
npm install
npm run db:setup     # applies migrations + seeds the Study Buddy product
npm run dev          # http://localhost:3000
```

On first visit to **/admin**, you will be redirected to `/admin/setup` to create the first Super Admin account (no default password is baked into the codebase). After that, sign in at `/admin/login`.

| Where | URL |
|---|---|
| Storefront | http://localhost:3000 |
| Shop | http://localhost:3000/shop |
| Admin dashboard | http://localhost:3000/admin |
| Admin sign in | http://localhost:3000/admin/login |

## What is included

**Storefront** — homepage (announcement bar, hero, feature cards, product showcase, use cases, CTA), shop with search/sort/filters/pagination, product pages (gallery with zoom, variants, specs, reviews, JSON-LD structured data), persistent cart, coupons, checkout (Cash on Delivery), order confirmation + status timeline, order tracking by order number + phone, customer accounts (register/login, profile, order history), About, Contact (stored enquiries), FAQ, policy pages.

**Admin** — role-based permissions (Super Admin, Store Manager, Order Manager, Content Manager), dashboard with live stats and a 14-day sales chart, product CRUD with image upload/reorder, variants, specs and SEO fields, categories, inventory with stock adjustments + movement history, order management (status, payment status, courier/tracking, CSV export), customers (incl. suspend), coupons, storefront content editing (announcement, hero, copy, FAQs, policies, SEO), store settings (shipping fee, free-shipping threshold, tax, COD toggle), enquiry & review moderation, staff management, audit log, reports.

**Database** — data lives in `data/pglite` (git-ignored). The DB is the single source of truth for products, prices, stock, orders and payment status. Prices are stored as integer paise to avoid rounding errors.

## Important notes before going live

- **Never run `db:setup` / `db:seed` while the dev server is running.** The embedded Postgres allows only one process at a time; if that ever happens by accident and the site errors with "database could not be initialized", stop everything, delete the `data/pglite` folder and run `npm run db:setup` again.
- **Product data is seeded as a placeholder.** The Study Buddy price (₹1,499 / MRP ₹1,999), stock (25) and specifications are editable placeholders — verify and update them in **Admin → Products**. Unverified specs (battery, Bluetooth version, dimensions…) are intentionally left out.
- **Product images.** The seeded product uses a neutral placeholder illustration (`public/images/study-buddy.svg`). Upload real photos in Admin → Products. Uploads are stored under `data/uploads` and served via `/api/uploads/*`.
- **Payments.** Cash on Delivery only in this build (toggle in Admin → Settings). No online gateway is configured or claimed to be working.
- **Email.** Order confirmation emails are not sent yet (no SMTP configured). Orders are tracked on the website.
- **Sample coupon.** `WELCOME10` (10% off, min ₹499, max ₹200) is seeded for testing — edit or delete it in Admin → Coupons.
- **Policies & contact details** are editable placeholders — set the real ones in Admin → Content and Admin → Settings before launch.

## Environment variables

See `.env.example`. Everything is optional; the app runs with zero configuration. Never put gateway/SMTP secrets in `NEXT_PUBLIC_*` variables.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` / `npm start` | Production build / serve |
| `npm run db:migrate` | Apply pending migrations |
| `npm run db:seed` | Seed catalogue (idempotent) |
| `npm run db:setup` | Migrate + seed |
| `npm run typecheck` | TypeScript check |

## Deploying

1. Run on a host with persistent disk for `data/` (the embedded Postgres files live there). On ephemeral hosts, point `DATA_DIR` at mounted storage or migrate to a managed Postgres by swapping `src/lib/db.ts`.
2. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
3. Run `npm run db:setup` once, then complete `/admin/setup`.
4. Back up `data/` regularly — it contains the entire store.
