'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Plan Your Trip' },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/85 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={cn(
            'flex items-center gap-2 transition-colors',
            scrolled ? 'text-foreground' : 'text-white'
          )}
          aria-label="Travel Unbounded home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Compass className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Travel Unbounded
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative text-sm font-medium transition-colors hover:text-primary',
                    active
                      ? 'text-primary'
                      : scrolled
                        ? 'text-foreground/80'
                        : 'text-white/90'
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-primary" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
          >
            Enquire Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'inline-flex items-center justify-center rounded-md p-2 transition-colors md:hidden',
            scrolled ? 'text-foreground' : 'text-white'
          )}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <ul className="space-y-1 px-4 py-4">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block rounded-lg px-3 py-2.5 text-base font-medium transition-colors',
                      active
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/80 hover:bg-muted'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href="/contact"
                className="block rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
              >
                Enquire Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
