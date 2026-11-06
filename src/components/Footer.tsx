import React from 'react';
import { useLenis } from 'lenis/react';
import { RollingText } from './ui/RollingText.tsx';
import { ArrowUpIcon } from './Icons.tsx';

// ponytail: clean footer without unnecessary slash labels or clutter
export const Footer: React.FC = () => {
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.6 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#141414] border-t border-white/[0.08] text-[#FAF7F3] pt-20 pb-8 overflow-hidden select-none">
      {/* Subtle Film Grain Noise on Black */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-screen bg-repeat z-0"
        style={{ backgroundImage: `url('/images/noise.png')` }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-10">
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/[0.08]">
          <div className="md:col-span-5 space-y-4">
            <p className="font-display font-bold text-2xl md:text-3xl text-white leading-snug">
              Scaling Start-ups for Growth.
            </p>
            <p className="text-sm text-white/70 font-sans max-w-sm">
              Building modern, scalable web products driven by clarity, structured component architecture, and speed.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3 font-mono text-xs uppercase tracking-wider">
            <span className="text-white/50 block mb-2">Quick links</span>
            <div className="flex flex-col space-y-2 text-white/80">
              <a href="#hero-section" className="hover:text-[#0099FF] transition-colors">
                <RollingText text="Home" />
              </a>
              <a href="#services" className="hover:text-[#0099FF] transition-colors">
                <RollingText text="Services" />
              </a>
              <a href="#projects" className="hover:text-[#0099FF] transition-colors">
                <RollingText text="Works" />
              </a>
              <a href="#contact" className="hover:text-[#0099FF] transition-colors">
                <RollingText text="Contact" />
              </a>
            </div>
          </div>

          <div className="md:col-span-4 space-y-4 font-mono text-xs uppercase tracking-wider flex flex-col justify-between">
            <div>
              <span className="text-white/50 block mb-2">Direct Contact</span>
              <a
                href="mailto:rehan.frontend@gmail.com"
                className="text-sm font-semibold text-white hover:text-[#0099FF] transition-colors"
              >
                rehan.frontend@gmail.com
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-xl border border-white/20 hover:border-white hover:bg-white hover:text-[#111111] transition-all text-xs font-mono uppercase tracking-wider text-white"
            >
              <span>Back to top</span>
              <ArrowUpIcon size={12} />
            </button>
          </div>
        </div>

        {/* Colossal Wordmark: Edge-to-edge typography blended seamlessly into the footer */}
        <div className="pt-12 sm:pt-16 pb-2 text-center overflow-hidden">
          <div className="font-display font-extrabold text-[22vw] sm:text-[24vw] lg:text-[25vw] leading-[0.80] tracking-[-0.05em] text-white/[0.06] hover:text-white/[0.10] select-none uppercase transition-colors duration-700">
            Rehan
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono uppercase text-white/40">
          <div>©2026 REHAN &bull; ALL RIGHTS RESERVED</div>
        </div>
      </div>
    </footer>
  );
};
