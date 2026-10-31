import React from 'react';
import { ArrowDownIcon, DownloadIcon, ArrowUpRightIcon } from './Icons.tsx';
import { HeroVisual } from './HeroVisual.tsx';
import { socialLinks } from '../data/socials.ts';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 cols): Content */}
          <div className="lg:col-span-7 space-y-7">
            {/* Mono identity & location label */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-sky-700 font-medium">
                Frontend developer / Lahore, Pakistan
              </span>
            </div>

            {/* Headline with single orange highlight per Section 3 & Style Guide */}
            <h1 className="text-fluid-h1 font-display font-semibold text-ink tracking-tight">
              I build React interfaces that are{' '}
              <span className="relative inline-block px-2 py-0.5 rounded-sm bg-accent-100 text-ink">
                fast
              </span>{' '}
              and easy to use.
            </h1>

            {/* Sub line from authentic spec */}
            <p className="text-base md:text-lg text-ink-soft max-w-[65ch] leading-relaxed">
              I&apos;m Rehan, a software engineering graduate who builds web apps with React,
              JavaScript, and REST APIs. I take freelance projects on Fiverr and Freelancer, and I
              work directly with clients too.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#work"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-accent-500 text-ink font-medium text-sm md:text-base transition-all duration-150 hover:bg-accent-600 hover:-translate-y-px shadow-sm focus-visible:ring-3 focus-visible:ring-sky-500"
              >
                View my work
              </a>
              <a
                href="/cv-rehan.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-ink text-ink font-medium text-sm md:text-base transition-colors duration-150 hover:bg-sky-50 focus-visible:ring-3 focus-visible:ring-sky-500"
              >
                <DownloadIcon size={16} strokeWidth={1.5} />
                <span>Download CV</span>
              </a>
            </div>

            {/* Availability status line with dot */}
            <div className="inline-flex items-center gap-2 pt-2 text-xs font-mono text-ink-soft">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span>Available for freelance projects from November 2026</span>
            </div>

            {/* Small row of text links per Section 3 */}
            <div className="pt-4 border-t border-line flex flex-wrap items-center gap-6 text-xs font-mono text-ink-soft">
              <span className="text-ink font-medium uppercase tracking-wider">Profiles:</span>
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 hover:text-ink transition-colors inline-flex items-center gap-0.5"
                >
                  <span>{item.name}</span>
                  <ArrowUpRightIcon size={11} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Interactive clay visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>

        {/* Scroll affordance */}
        <div className="mt-14 md:mt-20 pt-6 flex items-center justify-between text-xs font-mono text-ink-soft border-t border-line">
          <a href="#work" className="flex items-center gap-2 hover:text-ink transition-colors">
            <ArrowDownIcon size={14} className="text-sky-700 animate-bounce" />
            <span>01 / Selected work</span>
          </a>
          <span className="hidden sm:inline">UCP Software Engineering &bull; 2025</span>
        </div>
      </div>
    </section>
  );
};
