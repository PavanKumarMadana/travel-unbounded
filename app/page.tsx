import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { DestinationSection } from '@/components/DestinationSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { destinations } from '@/data/destinations';

const indiaDestinations = destinations.filter((d) => d.category === 'india');
const internationalDestinations = destinations.filter(
  (d) => d.category === 'international'
);

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Our Philosophy
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            The best journeys aren&apos;t sold from a catalogue — they&apos;re
            built around the people taking them.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            At Travel Unbounded, we believe travel should feel personal. That
            means comfort without losing the raw edge of adventure, culture you
            can touch, and places we&apos;ve experienced ourselves before we
            ever bring you there. Every itinerary is a conversation, not a
            transaction.
          </p>
        </div>
      </section>

      <DestinationSection
        eyebrow="Across India"
        title="Discover India"
        description="From the backwaters of Kerala to the high passes of Ladakh — journeys across our homeland."
        destinations={indiaDestinations}
      />

      <DestinationSection
        eyebrow="Beyond Borders"
        title="International Destinations"
        description="Safari in Kenya, the northern lights of Iceland, and the karst seas of Vietnam — the world, curated."
        destinations={internationalDestinations}
      />

      <WhyChooseUs />

      <section className="relative overflow-hidden bg-primary py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to start your journey?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85">
            Tell us where you want to go. Our travel experts will craft a
            personal itinerary and reach out within 24 hours.
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
