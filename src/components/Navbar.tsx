import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon, ArrowUpRightIcon } from './Icons.tsx';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // ponytail: standard scroll listener with passive flag for 60fps compositor performance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'projects', 'experience', 'principles', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Principles', href: '#principles', id: 'principles' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-white/85 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#hero"
          className="group flex items-baseline gap-2 text-ink hover:text-sky-700 transition-colors focus-visible:ring-2"
        >
          <span className="font-display font-semibold text-xl tracking-tight">Rehan</span>
          <span className="font-mono text-xs uppercase tracking-wider text-ink-soft group-hover:text-sky-700">
            / Frontend
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  isActive ? 'text-ink' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {link.label}
                {/* 2px orange underline for active per style guide */}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-500 rounded-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}

          {/* Quick Contact CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-mono text-sky-700 hover:text-ink transition-colors group"
          >
            <span>Get in touch</span>
            <ArrowUpRightIcon
              size={14}
              strokeWidth={1.5}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ink hover:bg-sky-50 rounded-sm focus-visible:ring-2"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <CloseIcon size={22} strokeWidth={1.5} /> : <MenuIcon size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-line px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-ink hover:text-sky-700 py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-mono text-sky-700 pt-2 border-t border-line"
          >
            Get in touch &rarr;
          </a>
        </div>
      )}
    </header>
  );
};
