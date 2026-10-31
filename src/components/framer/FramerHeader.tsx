import React, { useState, useEffect } from 'react';
import { RollingText } from '../ui/RollingText.tsx';
import { ArrowUpRightIcon, MenuIcon, CloseIcon } from '../Icons.tsx';

export const FramerHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F3]/90 backdrop-blur-md border-b border-[#111111]/10 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand identity block from Majd Framer layout */}
        <div className="flex items-center gap-4">
          <a href="#hero" className="flex items-baseline gap-2 group">
            <span className="font-display font-extrabold text-2xl tracking-tighter text-[#111111] uppercase">
              Rehan
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#111111]/50 hidden sm:inline">
              / SOFTWARE ENGINEER ©2026
            </span>
          </a>

          {/* Status pill with green dot */}
          <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#111111]/10 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[#111111]/70">Available for projects</span>
          </div>
        </div>

        {/* Desktop Nav Links with RollingText effect */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-wider font-mono font-medium text-[#111111]/80">
          <a href="#services" className="hover:text-[#111111] transition-colors py-1">
            <RollingText text="Services" />
          </a>
          <a href="#projects" className="hover:text-[#111111] transition-colors py-1">
            <RollingText text="Projects" />
          </a>
          <a href="#testimonials" className="hover:text-[#111111] transition-colors py-1">
            <RollingText text="Reviews" />
          </a>
          <a href="#thoughts" className="hover:text-[#111111] transition-colors py-1">
            <RollingText text="Thoughts" />
          </a>
          <a href="#contact" className="hover:text-[#111111] transition-colors py-1">
            <RollingText text="Contact" />
          </a>

          {/* Pill CTA button from Majd site */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] text-[#FAF7F3] hover:bg-[#0099FF] transition-colors duration-200"
          >
            <RollingText text="Get Started" className="text-white" />
            <ArrowUpRightIcon
              size={12}
              className="text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-white/80 border border-[#111111]/10 text-[#111111]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F3] border-b border-[#111111]/10 px-6 py-6 space-y-4">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-display font-medium uppercase text-[#111111]"
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-display font-medium uppercase text-[#111111]"
          >
            Projects
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-display font-medium uppercase text-[#111111]"
          >
            Reviews
          </a>
          <a
            href="#thoughts"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-display font-medium uppercase text-[#111111]"
          >
            Thoughts
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center w-full px-5 py-3 rounded-full bg-[#111111] text-white font-mono text-xs uppercase tracking-wider mt-2"
          >
            Get Started &rarr;
          </a>
        </div>
      )}
    </header>
  );
};

