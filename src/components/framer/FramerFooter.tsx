import React from 'react';
import { RollingText } from '../ui/RollingText.tsx';
import { ArrowUpIcon } from '../Icons.tsx';

export const FramerFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF7F3] border-t border-[#111111]/10 text-[#111111] pt-20 pb-8 overflow-hidden select-none">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#111111]/10">
          <div className="md:col-span-5 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/50 block">
              / Mission
            </span>
            <p className="font-display font-bold text-2xl md:text-3xl text-[#111111] leading-snug">
              Scaling Start-ups for Growth.
            </p>
            <p className="text-sm text-[#111111]/60 font-sans max-w-sm">
              Building modern, scalable web products driven by clarity, structured component architecture, and speed.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3 font-mono text-xs uppercase tracking-wider">
            <span className="text-[#111111]/50 block mb-2">/ Quick links</span>
            <div className="flex flex-col space-y-2 text-[#111111]">
              <a href="#hero" className="hover:text-[#0099FF] transition-colors">
                <RollingText text="Home" />
              </a>
              <a href="#services" className="hover:text-[#0099FF] transition-colors">
                <RollingText text="Services" />
              </a>
              <a href="#projects" className="hover:text-[#0099FF] transition-colors">
                <RollingText text="Works" />
              </a>
              <a href="#thoughts" className="hover:text-[#0099FF] transition-colors">
                <RollingText text="Thoughts" />
              </a>
              <a href="#contact" className="hover:text-[#0099FF] transition-colors">
                <RollingText text="Contact" />
              </a>
            </div>
          </div>

          <div className="md:col-span-4 space-y-4 font-mono text-xs uppercase tracking-wider flex flex-col justify-between">
            <div>
              <span className="text-[#111111]/50 block mb-2">/ Direct Contact</span>
              <a
                href="mailto:rehan.frontend@gmail.com"
                className="text-sm font-semibold text-[#111111] hover:text-[#0099FF] transition-colors"
              >
                rehan.frontend@gmail.com
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full border border-[#111111]/20 hover:border-[#111111] transition-colors text-xs font-mono uppercase tracking-wider"
            >
              <span>Back to top</span>
              <ArrowUpIcon size={12} />
            </button>
          </div>
        </div>

        {/* Colossal Wordmark from Majd Framer Site: Edge-to-edge typography */}
        <div className="pt-10 pb-6 text-center overflow-hidden">
          <div className="font-display font-black text-[18vw] leading-[0.8] tracking-tighter text-[#111111] select-none uppercase hover:text-[#0099FF] transition-colors duration-500">
            Rehan
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 border-t border-[#111111]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono uppercase text-[#111111]/40">
          <div>©2026 REHAN &bull; ALL RIGHTS RESERVED</div>
          <div>POWERED BY CLEAN REACT &amp; ZERO VENDOR LOCK-IN</div>
        </div>
      </div>
    </footer>
  );
};

