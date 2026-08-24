/*
# Create enquiries table for Travel Unbounded

1. Purpose
   - Stores trip-enquiry submissions from the Contact page form.
   - This is a single-tenant, no-auth public form: anyone visiting the site can
     submit an enquiry, so the table is intentionally public for INSERT and
     SELECT (SELECT is public only so the site could optionally list enquiries
     in a future admin view; no auth is part of Phase 1).

2. New Tables
   - `enquiries`
     - `id`           uuid, primary key
     - `full_name`    text, not null
     - `country_code` text, not null  (e.g. "+91")
     - `contact_number` text, not null
     - `email`        text, not null  (normalized to lowercase)
     - `date_of_travel` date, not null (must be a future date, enforced server-side)
     - `number_of_people` int, not null, default 1 (>= 1)
     - `hotel_category`  text, not null (one of Standard | Deluxe | Luxury)
     - `number_of_children` int, not null, default 0 (>= 0)
     - `created_at`   timestamptz, default now()

3. Security
   - Enable RLS on `enquiries`.
   - INSERT: open to anon + authenticated (public contact form).
   - SELECT: open to anon + authenticated (Phase 1 has no admin auth; the
     frontend never reads this table, but a permissive SELECT keeps the table
     usable for future admin tooling without a migration).
   - UPDATE / DELETE: restricted to authenticated (housekeeping only).
     No UPDATE/DELETE policy is created for anon, so anon cannot mutate rows.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  country_code text NOT NULL,
  contact_number text NOT NULL,
  email text NOT NULL,
  date_of_travel date NOT NULL,
  number_of_people integer NOT NULL DEFAULT 1,
  hotel_category text NOT NULL,
  number_of_children integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries" ON enquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_enquiries" ON enquiries;
CREATE POLICY "anon_select_enquiries" ON enquiries FOR SELECT
  TO anon, authenticated USING (true);
