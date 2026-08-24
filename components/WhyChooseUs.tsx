import { Heart, Users, Map, Headphones } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const features = [
  {
    icon: Heart,
    title: 'Personally Vetted Experiences',
    description:
      'Every destination is hand-picked and experienced by our team before it reaches you.',
  },
  {
    icon: Users,
    title: 'Local Guides',
    description:
      'Travel with insiders who know the land, the language, and the stories behind them.',
  },
  {
    icon: Map,
    title: 'Custom Itineraries',
    description:
      'No two journeys are the same. We shape each trip around your pace and interests.',
  },
  {
    icon: Headphones,
    title: '24×7 Support',
    description:
      'From the first call to your safe return home, our team is one message away.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-secondary/30 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Travel Unbounded"
          title="Travel that earns your trust"
          description="We believe the best journeys aren't sold off a shelf. They're built, carefully, around you."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
