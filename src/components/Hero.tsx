import React from 'react';
import { ArrowDownIcon } from './Icons.tsx';
import { HeroVisual } from './HeroVisual.tsx';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 cols): Text and CTAs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs text-ink-soft uppercase tracking-wider">
                Available for freelance & contract engineering
              </span>
            </div>

            {/* Headline with single orange highlight per Style Guide Section 6 */}
            <h1 className="text-fluid-h1 font-display font-semibold text-ink tracking-tight">
              I build fast,{' '}
              <span className="relative inline-block px-1.5 py-0.5 rounded-sm bg-accent-100 text-ink">
                clear
              </span>{' '}
              React interfaces for people who need them to work.
            </h1>

            {/* Supporting Sentence */}
            <p className="text-base md:text-lg text-ink-soft max-w-[65ch] leading-relaxed">
              Engineering web applications with strict performance budgets, sub-second interaction
              latencies, and uncompromising accessibility. No decorative bloat.
            </p>

            {/* CTAs: exactly one primary orange button per view */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-accent-500 text-ink font-medium text-sm md:text-base transition-all duration-150 hover:bg-accent-600 hover:-translate-y-px shadow-sm focus-visible:ring-3 focus-visible:ring-sky-500"
              >
                View selected work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-md border border-ink text-ink font-medium text-sm md:text-base transition-colors duration-150 hover:bg-sky-50 focus-visible:ring-3 focus-visible:ring-sky-500"
              >
                Discuss a project
              </a>
            </div>

            {/* Metrics highlight in mono */}
            <div className="pt-6 border-t border-line grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="font-mono text-xs uppercase text-ink-soft">Target LCP</div>
                <div className="font-display text-xl font-semibold text-ink mt-0.5">&lt; 1.2s</div>
              </div>
              <div>
                <div className="font-mono text-xs uppercase text-ink-soft">Lighthouse</div>
                <div className="font-display text-xl font-semibold text-sky-700 mt-0.5">99 / 100</div>
              </div>
              <div>
                <div className="font-mono text-xs uppercase text-ink-soft">Accessibility</div>
                <div className="font-display text-xl font-semibold text-ink mt-0.5">WCAG AA</div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Interactive 3D clay visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>

        {/* Scroll affordance */}
        <div className="mt-16 md:mt-24 pt-8 flex items-center justify-between text-xs font-mono text-ink-soft">
          <div className="flex items-center gap-2">
            <ArrowDownIcon size={14} className="text-sky-700 animate-bounce" />
            <span>Scroll to inspect projects</span>
          </div>
          <span className="hidden sm:inline">2024 &mdash; 2026 Production Archive</span>
        </div>
      </div>
    </section>
  );
};
