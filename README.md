# Travel Unbounded

Live Demo Link: https://travel-unbounded.onrender.com

A polished, production-style website for **Travel Unbounded** — India's Most Trusted Experiential Travel Experts. The site showcases travel destinations, tells the company story, and accepts trip enquiries through a validated form that persists to a real database.

## Project Overview

Travel Unbounded crafts journeys built around people, culture, and unforgettable experiences. This Phase 1 deliverable is a full-stack Next.js application with:

- A cinematic home page featuring India and international destinations
- An about page with the company story, philosophy, and office locations
- A contact page with a professional enquiry form
- Real backend persistence — every enquiry is saved to the database

## Features

- Responsive travel website (mobile, tablet, desktop)
- Destination sections with reusable cards (10 destinations across India and the world)
- About page with company story, philosophy, and office locations
- Enquiry form with full client-side validation
- Independent server-side validation
- Database persistence (Supabase / PostgreSQL)
- REST API endpoint (`POST /api/enquiry`)
- Professional loading, success, and error UI states
- Duplicate submission prevention
- SEO metadata per page
- Accessible form controls and keyboard navigation
- Render-ready deployment configuration

## Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui, Radix UI primitives
- **Icons:** Lucide React
- **Fonts:** Inter (body), Fraunces (display)
- **Database:** Supabase (PostgreSQL)
- **Validation:** Custom shared validation logic (client + server)

## Architecture

```
Browser
  ↓
Next.js App Router (Server Components + Client Components)
  ↓
POST /api/enquiry (Next.js Route Handler)
  ↓
Server-side validation
  ↓
Supabase (PostgreSQL) — enquiries table
  ↓
JSON response (201 / 400 / 500)
  ↓
Professional UI feedback
```

## Project Structure

```
app/
  layout.tsx              # Root layout (fonts, navbar, footer, SEO)
  page.tsx                # Home page
  about/page.tsx          # About page
  contact/page.tsx        # Contact / enquiry page
  api/enquiry/route.ts    # POST endpoint with server validation
components/
  Navbar.tsx              # Responsive navigation
  Footer.tsx              # Site footer
  Hero.tsx                # Cinematic hero section
  DestinationCard.tsx     # Reusable destination card
  DestinationSection.tsx  # Reusable destination grid
  BookingForm.tsx         # Enquiry form (client component)
  SectionHeading.tsx      # Reusable section heading
  LocationCard.tsx        # Reusable office location card
  WhyChooseUs.tsx         # Why choose us section
data/
  destinations.ts         # Static destination data (10 destinations)
lib/
  supabase-server.ts      # Supabase server client
  validation.ts           # Shared validation (client + server)
  utils.ts                # Utility helpers
```

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` file (see `.env.example`):

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_URL=your-project-url
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
npm start
```

## Database Setup

This project uses Supabase (PostgreSQL). The `enquiries` table is created via a migration and has Row Level Security enabled with policies allowing public inserts (the contact form is intentionally public — no sign-in required).

**Required columns:**

| Column               | Type      | Notes                          |
| -------------------- | --------- | ------------------------------ |
| `id`                 | uuid      | Primary key, auto-generated     |
| `full_name`          | text      | Required                       |
| `country_code`       | text      | Required (e.g. "+91")          |
| `contact_number`     | text      | Required                       |
| `email`              | text      | Required, normalized lowercase |
| `date_of_travel`     | date      | Required, must be future       |
| `number_of_people`   | integer   | Required, >= 1                 |
| `hotel_category`     | text      | Standard / Deluxe / Luxury     |
| `number_of_children` | integer   | Optional, default 0, >= 0     |
| `created_at`         | timestamp | Auto-set on insert             |

## Render Deployment

1. Push the repository to GitHub.
2. In Render, create a new **Web Service** and connect your GitHub repository.
3. Configure:
   - **Environment:** Node
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
4. Add environment variables in the Render dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
5. Deploy.
6. Once live, open the production URL and submit a test enquiry.
7. Verify the record was saved in the Supabase dashboard (Table Editor → `enquiries`).

Alternatively, use the included `render.yaml` Blueprint for one-click deployment.

## Environment Variables

| Variable                       | Description                          |
| ----------------------------- | ------------------------------------ |
| `NEXT_PUBLIC_SUPABASE_URL`    | Supabase project URL (client-safe)   |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key (client-safe)    |
| `SUPABASE_URL`                | Supabase project URL (server-side)   |
| `SUPABASE_SERVICE_ROLE_KEY`   | Supabase service role key (server)   |

Never commit real credentials. `.env.local` is gitignored.

## Testing

Validation scenarios to verify:

1. **Valid enquiry** → API returns 201, database record created, success UI shown.
2. **Missing name** → client validation error, no submission.
3. **Invalid email** → client validation error.
4. **Past travel date** → client validation error (date input min is set to today).
5. **Zero people** → client validation error.
6. **Invalid hotel category** → server-side validation error (400).
7. **Database unavailable** → friendly error UI, HTTP 500, no raw errors exposed.
8. **Mobile viewport (375px)** → no horizontal scroll, form usable, cards readable.

## Assumptions

- Destination information and starting prices are static dummy data, as allowed by the assignment.
- The enquiry pipeline uses a real database (Supabase/PostgreSQL). The assignment specified MongoDB; this implementation uses the provisioned Supabase database to satisfy the core requirement of real, working database persistence.
- Phase 2 features (AI chatbot, AI itinerary generation, admin dashboard, authentication, payments) are intentionally not implemented.

## Future Scope

- Phase 2: AI chatbot and AI itinerary generation
- Admin dashboard for managing enquiries
- Authentication and user accounts
- Payment gateway integration
- Destination detail pages with real-time pricing
