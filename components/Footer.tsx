import Link from 'next/link';
import { Compass, Mail, MapPin } from 'lucide-react';

const offices = [
  {
    city: 'Bengaluru',
    region: 'India — Headquarters',
  },
  {
    city: 'Kochi',
    region: 'India — Kerala Office',
  },
  {
    city: 'Nairobi',
    region: 'Kenya Office',
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2 text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Compass className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="font-display text-lg font-semibold">
                Travel Unbounded
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              India&apos;s Most Trusted Experiential Travel Experts. Journeys
              built around the people taking them.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Plan Your Trip
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Our Offices</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {offices.map((office) => (
                <li key={office.city} className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    <span className="font-medium text-foreground">{office.city}</span>
                    <br />
                    {office.region}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Travel Unbounded. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Mail className="h-3.5 w-3.5" />
            hello@travelunbounded.com
          </p>
        </div>
      </div>
    </footer>
  );
}
