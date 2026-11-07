import React from 'react';

// ponytail: refined footer perfectly aligned with reference design
const quickLinks = [
  { label: 'Home', href: '#hero-section' },
  { label: 'About Me', href: '#bio-section' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0F0F0F] border-t border-white/[0.08] text-[#FAF7F3] pt-16 sm:pt-20 pb-0 overflow-hidden select-none">
      {/* Subtle Film Grain Noise on Black */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-screen bg-repeat z-0"
        style={{ backgroundImage: `url('/images/noise.png')` }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-10">
        {/* Top footer row matching reference image layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-8 sm:pb-10 items-start">
          {/* Left Column: Heading */}
          <div className="md:col-span-5">
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-[54px] text-white leading-[1.05] tracking-[-0.03em]">
              Scaling<br />Start-ups<br />for Growth.
            </h2>
          </div>

          {/* Middle Column: /Quick links with white capsule badges */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-base sm:text-lg font-sans font-medium text-white block">
              /Quick links
            </span>
            <div className="flex flex-wrap gap-2.5 max-w-[310px]">
              {quickLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const lenis = (window as any).__lenis;
                    if (lenis) {
                      if (item.href === '#hero-section') {
                        lenis.scrollTo(0, { immediate: true, force: true });
                      } else {
                        lenis.scrollTo(item.href, { offset: -20, immediate: true, force: true });
                      }
                    } else {
                      if (item.href === '#hero-section') {
                        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
                      } else {
                        const target = document.querySelector(item.href);
                        if (target) {
                          target.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
                        }
                      }
                    }
                  }}
                  className="px-4 py-1.5 rounded-[10px] bg-white text-[#111111] text-xs sm:text-sm font-sans font-medium hover:bg-white/90 active:scale-95 transition-all shadow-sm inline-flex items-center justify-center select-none"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: /Contact */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-base sm:text-lg font-sans font-medium text-white block">
              /Contact
            </span>
            <div className="space-y-3">
              <a
                href="mailto:rehansajid.prof@gmail.com"
                className="text-sm sm:text-base font-sans font-medium text-white hover:text-white/80 transition-colors block break-all"
              >
                rehansajid.prof@gmail.com
              </a>
              <div className="flex items-center gap-4 text-xs font-mono uppercase text-white/50 pt-1">
                <a
                  href="https://github.com/Rehansajid2130"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/rehan-sajid-499b94317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Colossal Wordmark: Positioned at the very bottom of the footer, showing half of the characters clipped by the bottom edge */}
      <div className="relative z-10 w-full overflow-hidden flex items-start justify-center h-[10.5vw] sm:h-[11.5vw] lg:h-[12.5vw] select-none pointer-events-none mt-1 sm:mt-2">
        <div className="font-display font-black text-[22vw] sm:text-[24vw] lg:text-[25vw] leading-[0.76] tracking-[-0.04em] text-[#222222] select-none uppercase pointer-events-none transition-colors duration-700">
          Rehan
        </div>
      </div>
    </footer>
  );
};
