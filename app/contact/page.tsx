import type { Metadata } from 'next';
import { Clock, ShieldCheck, Headphones } from 'lucide-react';
import { BookingForm } from '@/components/BookingForm';
import { LocationCard, type OfficeLocation } from '@/components/LocationCard';

export const metadata: Metadata = {
  title: 'Plan Your Trip',
  description:
    'Plan your journey with Travel Unbounded. Tell us your destination, dates, and preferences — our travel experts will craft a personal itinerary within 24 hours.',
};

const trustPoints = [
  {
    icon: Clock,
    title: '24-hour response',
    description: 'Our travel experts reach out within one business day.',
  },
  {
    icon: ShieldCheck,
    title: 'No commitment',
    description: 'Enquire freely. We craft the plan before you decide anything.',
  },
  {
    icon: Headphones,
    title: '24×7 support',
    description: 'From planning to your safe return, we are one message away.',
  },
];

const offices: OfficeLocation[] = [
  {
    city: 'Bengaluru',
    region: 'India — Headquarters',
    address: [
      '541, 7th Main Road, HAL 2nd Stage',
      'Indiranagar, Bengaluru – 560008',
      'India',
    ],
  },
  {
    city: 'Kochi',
    region: 'India — Kerala Office',
    address: [
      'LR Towers, S Janatha Road',
      'Palavivatton, Kochi – 682025',
      'India',
    ],
  },
  {
    city: 'Nairobi',
    region: 'Kenya Office',
    address: [
      'Westpark Towers, Muthithi Road',
      'Nairobi, P.O. Box 6950',
      'Postal Code 00100, Kenya',
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative flex min-h-[40vh] items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/30189567/pexels-photo-30189567.png?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Traveller standing before snowy mountains under a clear sky"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Plan Your Trip
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Let&apos;s craft your journey
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            Share a few details and our travel experts will build a personal
            itinerary for you — no obligation, just inspiration.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  Trip Enquiry
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fields marked with <span className="text-primary">*</span> are
                  required.
                </p>
                <div className="mt-6">
                  <BookingForm />
                </div>
              </div>
            </div>

            <div className="order-1 space-y-6 lg:order-2">
              <div className="space-y-4">
                {trustPoints.map((point) => (
                  <div
                    key={point.title}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <point.icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {point.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-secondary/50 p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Prefer to talk first?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Reach our team at{' '}
                  <span className="font-medium text-foreground">
                    hello@travelunbounded.com
                  </span>{' '}
                  or visit one of our offices below.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Our offices
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Three homes, one team — across India and Kenya.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {offices.map((office) => (
              <LocationCard key={office.city} location={office} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
