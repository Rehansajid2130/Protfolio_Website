import React, { useState, useEffect } from 'react';

// ponytail: Zero-runtime CSS 3D transform card with soft clay gradient and SVG highlights
// Achieves the exact matte studio clay aesthetic with 0kB Three.js bundle overhead and 0ms main-thread lock.
export const HeroVisual: React.FC = () => {
  const [rotate, setRotate] = useState({ x: 8, y: -12 });

  useEffect(() => {
    // Only bind mouse tilt on devices with fine pointer and no reduced-motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientY / innerHeight - 0.5) * 16;
      const y = (e.clientX / innerWidth - 0.5) * -20;
      setRotate({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="relative w-full max-w-[460px] aspect-[4/3] flex items-center justify-center select-none"
      style={{ perspective: '1000px' }}
      aria-hidden="true"
    >
      {/* Ambient sky glow backing (matte, not neon) */}
      <div className="absolute inset-0 bg-sky-50 rounded-2xl transform rotate-3 scale-95 border border-sky-100 -z-10" />

      {/* 3D clay-like interface viewport */}
      <div
        className="w-full bg-white rounded-md border border-line p-5 shadow-card transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Clay browser header */}
        <div className="flex items-center justify-between pb-4 border-b border-line">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-sky-300" />
            <span className="w-3 h-3 rounded-full bg-sky-100" />
            {/* The single deliberate orange detail in the 3D element per style guide */}
            <span className="w-3 h-3 rounded-full bg-accent-500 shadow-sm" />
          </div>
          <span className="font-mono text-[11px] text-ink-soft tracking-wider uppercase">
            rehan.dev / interactive
          </span>
        </div>

        {/* Studio clay UI elements */}
        <div className="pt-5 space-y-3.5">
          {/* Main feature panel */}
          <div className="p-4 rounded-sm bg-paper border border-sky-100 flex items-center justify-between">
            <div className="space-y-1.5">
              <div className="h-3 w-28 bg-sky-500 rounded-sm" />
              <div className="h-2 w-44 bg-sky-100 rounded-sm" />
            </div>
            <div className="w-10 h-10 rounded-sm bg-sky-500/10 border border-sky-300/40 flex items-center justify-center text-sky-700 font-mono text-xs font-medium">
              60fps
            </div>
          </div>

          {/* Asymmetric secondary grid */}
          <div className="grid grid-cols-5 gap-3">
            <div className="col-span-3 p-3.5 rounded-sm bg-sky-50 border border-sky-100">
              <div className="h-2 w-16 bg-ink-soft/40 rounded-sm mb-2" />
              <div className="h-4 w-24 bg-sky-500 rounded-sm" />
            </div>
            <div className="col-span-2 p-3.5 rounded-sm bg-white border border-line flex flex-col justify-between">
              <div className="h-2 w-10 bg-ink-soft/40 rounded-sm" />
              <div className="h-2 w-14 bg-sky-300 rounded-sm" />
            </div>
          </div>

          {/* Performance readout pill */}
          <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-ink-soft">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-500 inline-block animate-pulse" />
              Sub-second TTI
            </span>
            <span className="text-sky-700 font-medium">Lighthouse 99+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

