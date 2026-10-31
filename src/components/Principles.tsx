import React from 'react';

interface Principle {
  number: string;
  title: string;
  rule: string;
  detail: string;
}

const principles: Principle[] = [
  {
    number: '01',
    title: 'Restraint over decoration',
    rule: 'Every animation, line, and color must justify its existence.',
    detail:
      'If removing an element does not break clarity or hierarchy, delete it. Fast websites stay fast by refusing decorative clutter.',
  },
  {
    number: '02',
    title: 'Content leads, code serves',
    rule: 'Design frames real data and real sentences.',
    detail:
      'No filler copy, no fake 100% satisfaction counters, and no stock mockups. The interface exists to make information immediate and legible.',
  },
  {
    number: '03',
    title: 'Zero-bloat performance',
    rule: 'Sub-second paint on constrained devices and mobile networks.',
    detail:
      'We test on throttled CPUs and 3G networks. The ladder of efficiency: native platform features first, standard library second, dependencies only when strictly necessary.',
  },
  {
    number: '04',
    title: 'Accessible by default',
    rule: 'WCAG 2.1 AA keyboard navigation and screen reader support.',
    detail:
      'Semantic HTML, visible focus states, sensible color contrast ratios, and complete support for reduced-motion preferences.',
  },
];

export const Principles: React.FC = () => {
  return (
    <section id="principles" className="py-24 md:py-32 bg-paper border-t border-b border-line">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-sky-700 font-medium">
            03 / How I Build
          </span>
          <h2 className="text-fluid-h2 font-display font-semibold text-ink tracking-tight">
            Engineering principles.
          </h2>
          <p className="text-base text-ink-soft">
            The rules that protect software from becoming slow, brittle, or confusing over time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((item) => (
            <div
              key={item.number}
              className="bg-white rounded-md border border-line p-8 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-sky-700 uppercase tracking-widest">
                  Rule {item.number}
                </span>
                <h3 className="font-display font-semibold text-xl text-ink mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-ink mb-2">
                  {item.rule}
                </p>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {item.detail}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-line flex items-center justify-between text-xs font-mono text-ink-soft">
                <span>// ponytail approved</span>
                <span className="text-sky-700">Strict standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

