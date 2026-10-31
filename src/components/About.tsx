import React from 'react';
import { DownloadIcon, ArrowUpRightIcon } from './Icons.tsx';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (4 cols): Photo/Visual representation with subtle hover tilt */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group w-full max-w-[320px]">
              {/* Backing paper border */}
              <div className="absolute inset-0 bg-sky-50 rounded-md border border-line -rotate-2 group-hover:rotate-0 transition-transform duration-300" />

              {/* Foreground card */}
              <div className="relative bg-white rounded-md border border-line p-5 shadow-card transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="w-full aspect-[4/5] bg-paper rounded-sm border border-sky-100 flex flex-col justify-between p-6 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-sky-700 bg-sky-100 px-2 py-0.5 rounded-sm">
                      Rehan
                    </span>
                    <span className="font-mono text-xs text-ink-soft">UCP &apos;25</span>
                  </div>

                  <div className="space-y-3">
                    <div className="w-12 h-1 bg-accent-500 rounded-full" />
                    <div className="font-display font-semibold text-2xl text-ink leading-tight">
                      Frontend Software Engineer
                    </div>
                    <div className="font-mono text-xs text-ink-soft">
                      Lahore, Pakistan (UTC+5)
                    </div>
                  </div>

                  <div className="pt-4 border-t border-sky-100 flex items-center justify-between font-mono text-[11px] text-sky-700">
                    <span>React &bull; REST &bull; JS</span>
                    <span>Ready to ship</span>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <span className="font-mono text-xs text-ink-soft">
                    Software Engineering Graduate
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (8 cols): Real narrative & facts row */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-sky-700 font-medium">
                02 / About
              </span>
              <h2 className="text-fluid-h2 font-display font-semibold text-ink tracking-tight">
                A bit about me.
              </h2>
            </div>

            <div className="space-y-4 text-base md:text-lg text-ink-soft leading-relaxed max-w-[65ch]">
              <p>
                I&apos;m Rehan, a frontend developer from Lahore. I graduated in Software Engineering
                from the <strong className="text-ink font-semibold">University of Central Punjab in 2025</strong>,
                and since then I&apos;ve been building web apps with React and taking freelance work
                on Fiverr, Freelancer, and with direct partners.
              </p>
              <p>
                I care about interfaces that load quickly, behave predictably, and don&apos;t make people think.
                I like working on the full flow: reading an API, structuring components, handling the awkward
                loading and error states, and polishing the final layout.
              </p>
            </div>

            {/* Facts Row per Section 6 */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <div className="p-4 rounded-sm bg-paper border border-line">
                <span className="font-mono text-xs uppercase text-ink-soft block mb-1">Based in</span>
                <span className="font-display font-semibold text-base text-ink">Lahore, Pakistan</span>
              </div>
              <div className="p-4 rounded-sm bg-paper border border-line">
                <span className="font-mono text-xs uppercase text-ink-soft block mb-1">Education</span>
                <span className="font-display font-semibold text-base text-ink">BS Software Engineering, UCP (2025)</span>
              </div>
              <div className="p-4 rounded-sm bg-paper border border-line">
                <span className="font-mono text-xs uppercase text-ink-soft block mb-1">Technical Focus</span>
                <span className="font-display font-semibold text-base text-ink">React, JavaScript, REST APIs</span>
              </div>
              <div className="p-4 rounded-sm bg-paper border border-line">
                <span className="font-mono text-xs uppercase text-ink-soft block mb-1">Platforms</span>
                <span className="font-display font-semibold text-base text-ink">Fiverr, Freelancer, Direct</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="/cv-rehan.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white border border-ink text-ink font-medium text-sm hover:bg-sky-50 transition-colors"
              >
                <DownloadIcon size={16} strokeWidth={1.5} />
                <span>Download CV (PDF)</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-mono text-sky-700 hover:text-ink transition-colors font-medium"
              >
                <span>Discuss working together</span>
                <ArrowUpRightIcon size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

