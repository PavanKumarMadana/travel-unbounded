import { MapPin } from 'lucide-react';

export interface OfficeLocation {
  city: string;
  region: string;
  address: string[];
}

export function LocationCard({ location }: { location: OfficeLocation }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <MapPin className="h-5 w-5" strokeWidth={2} />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
        {location.city}
      </h3>
      <p className="text-sm font-medium text-primary">{location.region}</p>
      <address className="mt-3 space-y-0.5 text-sm not-italic leading-relaxed text-muted-foreground">
        {location.address.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </address>
    </div>
  );
}
