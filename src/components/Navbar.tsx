import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './Icons.tsx';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = ['hero', 'work', 'about', 'services', 'process', 'stack', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
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
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Stack', href: '#stack', id: 'stack' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-white/85 backdrop-blur-md border-b border-line shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Wordmark: Rehan with small orange dot per Section 2 */}
        <a
          href="#hero"
          className="group flex items-center gap-1.5 text-ink hover:text-sky-700 transition-colors focus-visible:ring-2"
        >
          <span className="font-display font-semibold text-2xl tracking-tight">Rehan</span>
          <span className="w-2 h-2 rounded-full bg-accent-500 inline-block mb-1 group-hover:scale-125 transition-transform" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-ink-soft ml-1 hidden sm:inline">
            / React Dev
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
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
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-500 rounded-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}

          {/* Desktop Primary Orange CTA Button: 'Hire me' per Section 2 */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-accent-500 text-ink font-medium text-xs font-mono tracking-wider uppercase hover:bg-accent-600 hover:-translate-y-px transition-all shadow-sm focus-visible:ring-2"
          >
            Hire me
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

      {/* Mobile Drawer Sheet */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-line px-6 py-6 space-y-4 shadow-card">
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
            className="inline-flex items-center justify-center w-full px-5 py-3 rounded-md bg-accent-500 text-ink font-medium text-sm mt-3"
          >
            Hire me &rarr;
          </a>
        </div>
      )}
    </header>
  );
};
