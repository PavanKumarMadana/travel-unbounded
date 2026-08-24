import './globals.css';
import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://travel-unbounded.onrender.com'),
  title: {
    default: 'Travel Unbounded | Experiential Travel Experts',
    template: '%s | Travel Unbounded',
  },
  description:
    'Travel Unbounded crafts journeys built around people, culture, and unforgettable experiences. India and international experiential travel, personally vetted.',
  keywords: [
    'experiential travel',
    'India travel',
    'Kerala',
    'Ladakh',
    'Kenya safari',
    'Iceland',
    'custom itineraries',
    'Travel Unbounded',
  ],
  openGraph: {
    title: 'Travel Unbounded | Experiential Travel Experts',
    description:
      "India's Most Trusted Experiential Travel Experts. Journeys built around people, culture, and unforgettable experiences.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Unbounded | Experiential Travel Experts',
    description:
      "India's Most Trusted Experiential Travel Experts. Journeys built around people, culture, and unforgettable experiences.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
