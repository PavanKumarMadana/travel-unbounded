import { type Destination } from '@/data/destinations';
import { DestinationCard } from './DestinationCard';
import { SectionHeading } from './SectionHeading';

interface DestinationSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  destinations: Destination[];
}

export function DestinationSection({
  eyebrow,
  title,
  description,
  destinations,
}: DestinationSectionProps) {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
