'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr';
import { navItems, profile } from '../content/profile';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  // Track the section in view with IntersectionObserver instead of a scroll listener.
  useEffect(() => {
    const ids = navItems.map((item) => item.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        let best = '';
        let bestRatio = 0;
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        setActive(best);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock page scroll while the mobile panel is open and close it on Escape.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label="Primary"
        className="pointer-events-auto relative z-50 flex w-full max-w-6xl items-center justify-between gap-3 rounded-full border border-line bg-base/80 py-2 pl-4 pr-2 backdrop-blur-md"
      >
        <Link href="#main" className="title-3 rounded-md text-ink" aria-label={`${profile.name}, back to top`}>
          {profile.firstName}
          <span className="text-ink-3"> / </span>
          <span className="hidden text-ink-2 sm:inline">{profile.role}</span>
          <span className="text-ink-2 sm:hidden">Engineer</span>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={`title-4 inline-flex rounded-full px-3 py-2 transition-colors duration-300 ease-out ${
                    isActive ? 'bg-raised text-ink' : 'text-ink-2 hover:text-ink'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="icon-btn hidden h-10 w-10 border-0 bg-transparent sm:inline-flex"
          >
            <GithubLogo size={20} aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="icon-btn hidden h-10 w-10 border-0 bg-transparent sm:inline-flex"
          >
            <LinkedinLogo size={20} aria-hidden="true" />
          </a>
          <a href="#contact" className="btn btn-primary min-h-10 rounded-full button-sm">
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors duration-300 ease-out hover:bg-raised lg:hidden"
          >
            <span
              aria-hidden="true"
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-500 ease-out ${
                open ? 'rotate-45' : '-translate-y-1'
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-500 ease-out ${
                open ? '-rotate-45' : 'translate-y-1'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Full height mobile panel */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-base/95 backdrop-blur-xl transition-[opacity,visibility] duration-500 ease-out lg:hidden ${
          open ? 'pointer-events-auto visible opacity-100' : 'pointer-events-none invisible opacity-0'
        }`}
      >
        <div className="container-x flex h-full flex-col justify-center py-24">
          <ul className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <li
                key={item.href}
                className={open ? 'animate-rise' : 'opacity-0'}
                style={{ animationDelay: `${Math.min(index * 60, 340)}ms` }}
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="heading-4 block rounded-lg px-2 py-2 text-ink transition-colors duration-300 ease-out hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="icon-btn" tabIndex={open ? 0 : -1}>
              <GithubLogo size={22} aria-hidden="true" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="icon-btn" tabIndex={open ? 0 : -1}>
              <LinkedinLogo size={22} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
