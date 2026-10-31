import React from 'react';

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: '2023 — Present',
    role: 'Lead Frontend Engineer',
    company: 'HyperScale Systems',
    location: 'Remote',
    summary:
      'Directing core web client architecture across high-throughput data analytics and monitoring portals.',
    highlights: [
      'Migrated legacy webpack builds to Vite and ES modules, reducing CI build times from 9.4 minutes to 48 seconds.',
      'Enforced strict bundle budgets (<120kB initial JS payload) and eliminated 42 unused transitive dependencies.',
      'Spearheaded web accessibility compliance, achieving WCAG 2.1 AA across 18 customer-facing applications.',
    ],
  },
  {
    period: '2021 — 2023',
    role: 'Senior React Developer',
    company: 'Apex Digital Labs',
    location: 'Hybrid',
    summary:
      'Engineered customer-facing SaaS portals, collaborative workspaces, and component systems.',
    highlights: [
      'Built a realtime collaboration engine using WebSockets and optimistic UI updates for concurrent document editing.',
      'Implemented virtualized datatables handling 50k+ rows with smooth 60fps scrolling and sub-10ms filter latency.',
      'Mentored 6 junior/mid frontend engineers in modern TypeScript, performance profiling, and web standards.',
    ],
  },
  {
    period: '2019 — 2021',
    role: 'Frontend Developer',
    company: 'Veloce Interactive',
    location: 'On-site',
    summary:
      'Developed responsive single-page applications, custom design systems, and client marketing engines.',
    highlights: [
      'Authored reusable UI component primitives with zero external UI framework dependencies.',
      'Cut Largest Contentful Paint (LCP) from 4.1s to 1.3s across 12 high-traffic e-commerce landing pages.',
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Section heading left col (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-sky-700 font-medium">
              02 / Career Record
            </span>
            <h2 className="text-fluid-h2 font-display font-semibold text-ink tracking-tight">
              Work history &amp; impact.
            </h2>
            <p className="text-sm md:text-base text-ink-soft leading-relaxed max-w-sm">
              Six years specializing in frontend performance, responsive UI design, and production React architecture.
            </p>
          </div>

          {/* Timeline right col (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {experiences.map((item, index) => (
              <div
                key={item.company}
                className={`relative pl-8 md:pl-10 border-l border-line ${
                  index !== experiences.length - 1 ? 'pb-12' : ''
                }`}
              >
                {/* Timeline node */}
                <span
                  className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-sky-500 border-2 border-white ring-1 ring-sky-300"
                  aria-hidden="true"
                />

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="font-display font-semibold text-lg md:text-xl text-ink">
                    {item.role}{' '}
                    <span className="text-sky-700 font-medium font-sans">
                      @ {item.company}
                    </span>
                  </h3>
                  <span className="font-mono text-xs text-ink-soft uppercase tracking-wider">
                    {item.period} &bull; {item.location}
                  </span>
                </div>

                <p className="text-sm md:text-base text-ink-soft mb-4 leading-relaxed">
                  {item.summary}
                </p>

                <ul className="space-y-2 text-sm text-ink-soft">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="font-mono text-sky-700 font-bold select-none">&bull;</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

