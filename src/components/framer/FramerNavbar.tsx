import React, { useState } from 'react';
import { RollingText } from '../ui/RollingText.tsx';
import { ArrowUpRightIcon, MenuIcon, CloseIcon } from '../Icons.tsx';

export const FramerNavbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className="pointer-events-auto bg-[#111111] text-[#FAF7F3] rounded-[20px] px-6 py-3 flex items-center justify-between gap-8 shadow-2xl border border-white/10 w-full max-w-[820px] transition-all duration-300"
        aria-label="Main Navigation"
      >
        {/* Left: Logo */}
        <a
          href="#hero-section"
          className="font-display font-black text-xl tracking-tight text-[#FAF7F3] hover:text-[#0099FF] transition-colors"
        >
          Rehan
        </a>

        {/* Center / Desktop Links with RollingText */}
        <div className="hidden md:flex items-center gap-7 text-xs uppercase tracking-wider font-mono font-medium text-[#FAF7F3]/70">
          <a href="#services" className="hover:text-white transition-colors">
            <RollingText text="Services" />
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            <RollingText text="Projects" />
          </a>
          <a href="#testimonials" className="hover:text-white transition-colors">
            <RollingText text="Testimonials" />
          </a>
          <a href="#thoughts" className="hover:text-white transition-colors">
            <RollingText text="Thoughts" />
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            <RollingText text="Contact" />
          </a>
        </div>

        {/* Right CTA / Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF7F3] text-[#111111] hover:bg-[#0099FF] hover:text-white transition-colors text-xs font-mono uppercase tracking-wider font-semibold"
          >
            <RollingText text="Get Started" />
            <ArrowUpRightIcon size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-24 bg-[#111111] text-[#FAF7F3] rounded-2xl p-6 shadow-2xl border border-white/10 md:hidden space-y-4">
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-mono uppercase tracking-wider text-white/80 hover:text-white py-1"
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-mono uppercase tracking-wider text-white/80 hover:text-white py-1"
          >
            Projects
          </a>
          <a
            href="#testimonials"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-mono uppercase tracking-wider text-white/80 hover:text-white py-1"
          >
            Testimonials
          </a>
          <a
            href="#thoughts"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-mono uppercase tracking-wider text-white/80 hover:text-white py-1"
          >
            Thoughts
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-mono uppercase tracking-wider text-white/80 hover:text-white py-1"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center w-full px-5 py-3 rounded-full bg-[#FAF7F3] text-[#111111] font-mono text-xs uppercase tracking-wider font-semibold mt-2"
          >
            Get Started &rarr;
          </a>
        </div>
      )}
    </div>
  );
};

