# Claude Code Handoff — Seller Experience Platform (Next.js)

## Context
You are building the **Optum AI Marketplace Seller Experience Platform** — an internal operations portal for managing products, pricing, PDPs, intake forms, quotes, and orders on the Optum AI Marketplace. The UI is a faithful port of an existing HTML prototype (`seller_experience_v2.html`) into a Next.js app.

Read `seller_experience_v2.html` in full before writing any code. All design decisions, colors, layout, and component structure are defined there. Do not invent new UI — replicate what's in the file exactly.

---

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (use arbitrary values to match exact design tokens below — do not approximate)
- **Language**: TypeScript
- **Icons**: Use emoji as-is from the prototype (no icon library needed yet)
- **No UI component libraries** — build everything from scratch to match the prototype

---

## Design Tokens
Replicate these exactly as a Tailwind theme extension in `tailwind.config.ts`:

```ts
colors: {
  navy:        '#0d0f1c',
  'navy-mid':  '#12152a',
  'navy-card': '#181c30',
  'navy-row':  '#1e2236',
  'navy-hover':'#232840',
  border:      '#2a2e45',
  'border-lt': '#3a3f58',
  orange:      '#f68b1e',
  'text-primary': '#f0f1f5',
  'text-body':    '#c8cad8',
  'text-muted':   '#8890a8',
  'text-subtle':  '#565d7a',
  green:   '#22c55e',
  yellow:  '#f59e0b',
  red:     '#ef4444',
  blue:    '#60a5fa',
  purple:  '#a78bfa',
}
```

---

## Folder Structure
Scaffold this structure:

```
/app
  /layout.tsx                  ← root layout (TopNav + body wrapper)
  /page.tsx                    ← redirects to /operations/products
  /operations
    /layout.tsx                ← shared ops layout (breadcrumb + filter panel + main)
    /products/page.tsx
    /pricing/page.tsx
    /pdp/page.tsx
    /intake/page.tsx
    /quotes/page.tsx
    /orders/page.tsx

/components
  /layout
    TopNav.tsx                 ← sticky nav with Operations dropdown
    OpsDropdown.tsx            ← the 6-item dropdown menu
    FilterPanel.tsx            ← left sidebar with checkbox filter groups
    Footer.tsx                 ← Optum footer (Company/Support/Privacy + social)
    Breadcrumb.tsx             ← Home › Operations › [Screen]
  /ui
    DataTable.tsx              ← reusable dark table (thead, tbody, pagination)
    StatusDot.tsx              ← colored dot + label
    TrackerCircles.tsx         ← 5-circle progress tracker (Products screen)
    ProgressBar.tsx            ← thin horizontal bar (PDP/Intake screens)
    Pill.tsx                   ← rounded badge (API, Data, Software etc)
    SearchBar.tsx              ← rounded dark search input
    Button.tsx                 ← btn-primary (orange) and btn-ghost variants
    TemplateCard.tsx           ← pricing page template cards
    ActiveFilterTags.tsx       ← orange filter tag pills with × dismiss

/lib
  /types.ts                    ← TypeScript interfaces for all data shapes
  /data
    products.ts                ← mock data for Products screen
    pricing.ts                 ← mock data for Pricing Pages screen
    pdp.ts                     ← mock data for PDP Pages screen
    intake.ts                  ← mock data for Intake Forms screen
    quotes.ts                  ← mock data for Quotes screen
    orders.ts                  ← mock data for Order History screen
```

---

## Shared Layout Rules

### TopNav (`components/layout/TopNav.tsx`)
- Fixed, `h-[54px]`, `bg-[#0a0c19]`, `border-b border-[#2a2e45]`
- Left: Optum logo — **"Optum"** in orange (`#f68b1e`), **" AI Marketplace"** in white, bold
- Right: **Operations ▾** trigger button + vertical divider + "Sign out" + ✦ icon
- The Operations trigger opens `OpsDropdown` absolutely positioned below it
- Trigger shows the **currently active screen name** (e.g. "Pricing Pages ▾") — update on navigation
- Close dropdown on outside click

### OpsDropdown (`components/layout/OpsDropdown.tsx`)
Six items in this order, each with icon, label, sub-label, and badge where noted:
| Label | Icon | Sub-label | Badge |
|---|---|---|---|
| Products | 🗂️ | Catalog, offerings & status | — |
| Pricing Pages | 💲 | Templates & JSON configs | — |
| PDP Pages | 📄 | Product detail page content | — |
| Intake Forms | 📋 | Content intake & review | 2 (orange) |
| Quotes | 💬 | Buyer quote requests | 5 (orange) |
| Order History | 📦 | Completed & active orders | — |

Each item navigates to `/operations/[slug]` using Next.js `router.push`. Active item gets `bg-[rgba(246,139,30,0.12)]`.

### FilterPanel (`components/layout/FilterPanel.tsx`)
- `w-[210px]`, `border-r border-[#2a2e45]`, `py-5`
- Receives `groups` prop: array of `{ label: string, items: { label: string, count: number, checked?: boolean }[] }`
- Each group has an uppercase label, then checkbox rows with item count badges
- Horizontal divider `<hr>` between groups
- Checkboxes use `accent-[#f68b1e]`

### Footer (`components/layout/Footer.tsx`)
Three columns: Company, Support, Privacy & Conduct — exact links as in the prototype. Below: copyright left, social icons right (in, f, 𝕏, 📷). Follow us label above social icons.

---

## Reusable UI Components

### DataTable (`components/ui/DataTable.tsx`)
Props:
```ts
interface DataTableProps {
  columns: { key: string; label: string; width?: string; sortable?: boolean }[]
  rows: Record<string, React.ReactNode>[]
  totalItems: number
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  footerExtra?: string  // e.g. "Total: $1,432,800"
}
```
- Dark table: `bg-[#181c30]`, `border border-[#2a2e45]`, `rounded-[10px]`, `overflow-hidden`
- `thead`: `bg-[#12152a]`, th: `text-[11px] font-bold uppercase tracking-[0.6px] text-[#8890a8] px-[14px] py-[11px]`
- `tbody tr`: hover `bg-[#232840]`, cursor pointer, `border-b border-[#2a2e45]`
- First column always: expand chevron `›` in `text-[#565d7a]`
- Last column always: `···` row menu button
- Pagination below table with Previous / page numbers / Next buttons

### StatusDot (`components/ui/StatusDot.tsx`)
```ts
// Usage: <StatusDot status="Published" />
// Maps status string → dot color class
```
Color map (dot color + glow):
- New, Published, Completed, Approved, Accepted → green (`#22c55e`)
- In Review, Under Review, Configured, Scheduled, Approved, Under Revision → blue (`#60a5fa`)
- Ready for Review, On Hold, Processing, Open, Marketing Review → orange (`#f68b1e`)
- Draft, Archived, Inactive, Expired, Inactive → gray (`#565d7a`)
- Cancelled, Rejected, Error → red (`#ef4444`)
- Pending Approval, Legal Review → purple (`#a78bfa`)
- Fee Config → orange

### TrackerCircles (`components/ui/TrackerCircles.tsx`)
- 5 circles, `w-4 h-4`, `rounded-full`, `border-2`
- Empty: `border-[#3a3f58]`
- Done (✓): `border-[#22c55e] bg-[rgba(34,197,94,0.14)] text-[#22c55e]`
- Warning (!): `border-[#f59e0b] bg-[rgba(245,158,11,0.14)] text-[#f59e0b]`
- Error (✕): `border-[#ef4444] bg-[rgba(239,68,68,0.14)] text-[#ef4444]`
- Props: `steps: ('empty'|'done'|'warn'|'error')[]`

### ProgressBar (`components/ui/ProgressBar.tsx`)
- `w-full h-[5px] bg-[#2a2e45] rounded-[3px]`
- Fill color passed as prop, width = percentage

### Pill (`components/ui/Pill.tsx`)
- Small rounded badge: `px-[9px] py-[2px] rounded-full text-[11px] font-semibold`
- Variants: `api` (blue), `data` (orange), `software` (purple), `bundle` (blue), `services` (gray)

---

## Screen-by-Screen Specs

### /operations/products
- Page title: **"Product"** + "Add New Product Offering" (orange btn)
- Sub-heading: "Product Catalog"
- Table meta: "50 items | Last 6 months | Last updated {date/time}"
- Active filter tags: "Products – API ×", "Products – Services ×" + "Clear"
- **Columns**: expand | PIM | Product line | Tracker (5 circles) | Status (dot) | Product | menu
- Filter panel groups: Status (8 items), Products (5 items), Product Family (7 items), Products/channel (3 items)
- Pagination: page 1 of 3

### /operations/pricing
- Page title: **"Pricing Pages"** + "Create Pricing Template" (orange btn)
- **Template cards section** above table (3 cards: Published/New/Configured)
- Sub-heading: "Product catalog"
- **Columns**: expand | Product Name | Product Line | Product Type | Offering Type | Status | Updated | menu
- Filter panel groups: Status (5), Template Type (3), Product Family (5)
- Pagination: page 1 of 4

### /operations/pdp
- Page title: **"PDP Pages"** + "+ New PDP" (orange btn)
- **Columns**: expand | Product Name | Category | Owner | Go-Live | Completion (progress bar) | Stage (dot) | menu
- Filter panel groups: Stage (6), Category (5), Has AI (3)
- Pagination: page 1 of 2

### /operations/intake
- Page title: **"Intake Forms"** + "+ New Intake" (orange btn)
- **Columns**: expand | Product | Submitter | Type (pill) | Submitted | Go-Live | Completion (bar) | Status (dot) | menu
- Filter panel groups: Status (5), Product Type (5), Business Unit (4)
- Pagination: page 1 of 2

### /operations/quotes
- Page title: **"Quotes"** + "+ Create Quote" (orange btn)
- **Columns**: expand | Quote ID | Buyer | Product | Amount | Submitted | Expires | Status (dot) | menu
- Filter panel groups: Status (5), Product (5), Amount Range (3)
- Pagination: page 1 of 3

### /operations/orders
- Page title: **"Order History"** + "Export CSV" (ghost btn)
- **Columns**: expand | Order ID | Buyer | Product | Type (pill) | Amount | Order Date | Status (dot) | menu
- Footer note: "Total: $1,432,800"
- Filter panel groups: Status (5), Product Type (5), Date Range (3)
- Pagination: page 1 of 24

---

## Mock Data
Populate each `/lib/data/*.ts` file with the exact rows visible in the prototype HTML. Use TypeScript interfaces from `/lib/types.ts`. Keep data static for now — no API calls yet.

---

## Build Order
Complete in this sequence. Do not move to the next step until the current one renders correctly:

1. `npx create-next-app@latest seller-experience --typescript --tailwind --app --no-src-dir`
2. Add design tokens to `tailwind.config.ts`
3. Build `TopNav` + `Footer` + root `layout.tsx` — verify nav renders
4. Build `FilterPanel` + `OpsDropdown` + ops `layout.tsx`
5. Build shared UI: `DataTable`, `StatusDot`, `Pill`, `ProgressBar`, `TrackerCircles`, `Button`, `SearchBar`
6. Build `/operations/products` page with mock data
7. Build remaining 5 screens one at a time
8. Wire up `OpsDropdown` navigation — active screen highlights, trigger label updates
9. Add `TemplateCard` and wire into `/operations/pricing`

---

## What NOT to change
- The dark color scheme — do not lighten or substitute colors
- The exact layout: filter panel left, main content right, footer below
- The Operations dropdown as the sole navigation mechanism (no sidebar, no tabs)
- The breadcrumb pattern: Home › Operations › [Screen Name]
- Font stack: `'Segoe UI', system-ui, -apple-system, sans-serif` (set in globals.css, not Tailwind)
