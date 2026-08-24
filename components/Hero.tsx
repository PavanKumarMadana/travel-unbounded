import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/31385957/pexels-photo-31385957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Misty mountain landscape with evergreen forest"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-up">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            India&apos;s Most Trusted Experiential Travel Experts
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Journeys built around{' '}
            <span className="italic text-accent">you</span>, not a catalogue.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            We craft travel around the people taking them — blending culture,
            comfort, and raw nature into experiences you&apos;ll carry for life.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
            >
              Plan Your Trip
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <Play className="h-4 w-4" />
              Our Story
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 hidden h-24 bg-gradient-to-t from-background to-transparent lg:block" />
    </section>
  );
}
