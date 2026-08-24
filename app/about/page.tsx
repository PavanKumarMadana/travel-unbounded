import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { LocationCard, type OfficeLocation } from '@/components/LocationCard';
import { WhyChooseUs } from '@/components/WhyChooseUs';

export const metadata: Metadata = {
  title: 'About Travel Unbounded',
  description:
    'Travel Unbounded believes the best journeys are built around people, not catalogues. Learn about our philosophy, our team, and our offices across India and Kenya.',
};

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

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[55vh] items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/34033018/pexels-photo-34033018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Snow-covered peaks and lush valleys in a national park"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            About Us
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Travel, the way it should feel
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            We&apos;re a team of travellers who got tired of cookie-cutter trips.
            So we started building journeys that feel like they were made for
            one person — you.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title="Built by travellers, for travellers"
          />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Travel Unbounded began with a simple belief: the best journeys
              aren&apos;t simply sold from a catalogue — they are built around
              the people taking them. We saw too many trips that were efficient
              but empty, and too many travellers who came home with photos but
              no stories.
            </p>
            <p>
              So we set out to do it differently. Every destination we offer is
              one we&apos;ve walked ourselves. Every itinerary starts with a
              conversation about what you want to feel, not just where you want
              to go. We blend comfort with the raw edge of nature, culture you
              can touch, and the quiet confidence of knowing someone has your
              back.
            </p>
            <p>
              Today we craft journeys across India and the world — from the
              backwaters of Kerala to the savannas of Kenya, from the high
              passes of Ladakh to the waterfalls of Iceland. Different places,
              same promise: travel that earns your trust.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Comfort, culture, and raw nature"
            description="We don't choose between comfort and adventure. We believe the best travel has all three — and we design every trip to hold them in balance."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Comfort without compromise
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Hand-picked stays and smooth logistics, so you can focus on the
                experience — not the planning.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Culture you can touch
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Local guides, real communities, and moments that connect you to
                a place rather than pass you through it.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Raw nature, personally vetted
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We&apos;ve stood where we send you. The landscapes we recommend
                are ones we know by heart.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Find Us"
            title="Our offices"
            description="Three homes, one team. Visit us in Bengaluru, Kochi, or Nairobi — or reach out from anywhere."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {offices.map((office) => (
              <LocationCard key={office.city} location={office} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="relative overflow-hidden bg-primary py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
            Let&apos;s build your journey together
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85">
            Tell us where you want to go. We&apos;ll handle the rest — and reach
            out within 24 hours.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-base font-medium text-primary transition-transform hover:scale-[1.03] active:scale-95"
          >
            Plan Your Trip
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
