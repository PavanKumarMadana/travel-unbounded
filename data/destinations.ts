export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  alt: string;
  description: string;
  price: number;
  category: 'india' | 'international';
}

export const destinations: Destination[] = [
  {
    id: 'kerala',
    name: 'Kerala',
    country: 'India',
    image:
      'https://images.pexels.com/photos/34588372/pexels-photo-34588372.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Houseboat drifting through the palm-lined Kerala backwaters.',
    description:
      'Drift through tranquil backwaters on a traditional houseboat, spice plantations, and palm-fringed beaches.',
    price: 28000,
    category: 'india',
  },
  {
    id: 'himachal',
    name: 'Himachal Pradesh',
    country: 'India',
    image:
      'https://images.pexels.com/photos/29494184/pexels-photo-29494184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'River winding through the mountain valleys of Himachal Pradesh.',
    description:
      'Snow-dusted peaks, alpine meadows, and the quiet charm of Manali and Spiti valleys.',
    price: 32000,
    category: 'india',
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    country: 'India',
    image:
      'https://images.pexels.com/photos/960220/pexels-photo-960220.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Serene mountain lake in Leh with dramatic rugged terrain.',
    description:
      'High-altitude monasteries, mirror-still lakes, and the raw silence of the Himalayan desert.',
    price: 38000,
    category: 'india',
  },
  {
    id: 'andaman',
    name: 'Andaman',
    country: 'India',
    image:
      'https://images.pexels.com/photos/37949152/pexels-photo-37949152.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Pristine white-sand beach and turquoise waters of the Andaman Islands.',
    description:
      'Coral reefs, untouched white-sand beaches, and the emerald waters of the Bay of Bengal.',
    price: 35000,
    category: 'india',
  },
  {
    id: 'goa',
    name: 'Goa',
    country: 'India',
    image:
      'https://images.pexels.com/photos/28520254/pexels-photo-28520254.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Golden sunset over the Arabian Sea at a Goa beach.',
    description:
      'Sunsets over the Arabian Sea, Portuguese heritage, and laid-back coastal evenings.',
    price: 22000,
    category: 'india',
  },
  {
    id: 'kenya',
    name: 'Kenya',
    country: 'East Africa',
    image:
      'https://images.pexels.com/photos/13932855/pexels-photo-13932855.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'African elephant roaming the grasslands of the Masai Mara, Kenya.',
    description:
      'The great wildebeest migration, Maasai Mara savanna, and unforgettable safari nights.',
    price: 95000,
    category: 'international',
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    country: 'Southeast Asia',
    image:
      'https://images.pexels.com/photos/34635610/pexels-photo-34635610.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Limestone islands rising from Ha Long Bay, Vietnam.',
    description:
      'Cruise the limestone karsts of Ha Long Bay, lantern-lit Hoi An, and bustling Hanoi.',
    price: 55000,
    category: 'international',
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    country: 'East Africa',
    image:
      'https://images.pexels.com/photos/33650634/pexels-photo-33650634.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Wildebeest roaming the vast savanna of Tanzania.',
    description:
      'Serengeti plains, Ngorongoro Crater, and the snow-capped peak of Kilimanjaro.',
    price: 105000,
    category: 'international',
  },
  {
    id: 'iceland',
    name: 'Iceland',
    country: 'Nordic Europe',
    image:
      'https://images.pexels.com/photos/12932356/pexels-photo-12932356.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Godafoss waterfall cascading through rocky terrain in Iceland.',
    description:
      'Thundering waterfalls, black-sand beaches, geothermal pools, and the northern lights.',
    price: 125000,
    category: 'international',
  },
  {
    id: 'sri-lanka',
    name: 'Sri Lanka',
    country: 'South Asia',
    image:
      'https://images.pexels.com/photos/321570/pexels-photo-321570.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Lush green tea plantations in the Sri Lankan highlands.',
    description:
      'Emerald tea plantations, ancient temples, and wild safaris in a compact island.',
    price: 42000,
    category: 'international',
  },
];

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}
