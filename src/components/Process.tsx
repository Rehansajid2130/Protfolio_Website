import React from 'react';

const steps = [
  {
    step: '01',
    title: 'Brief',
    description:
      'We talk through what you need, who it is for, and what done looks like. No assumptions or ambiguous scopes.',
  },
  {
    step: '02',
    title: 'Plan',
    description:
      'I send a clear scope covering pages, features, timeline, and exact deliverables before starting any code.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'I share staging demos as I build so there are no surprises. You see real progress and can test interactions early.',
  },
  {
    step: '04',
    title: 'Handover',
    description:
      'You receive the repository, a clean live deployment, and a walkthrough. I stay on call for post-launch polish.',
  },
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-sky-700 font-medium">
            04 / Process
          </span>
          <h2 className="text-fluid-h2 font-display font-semibold text-ink tracking-tight">
            How a project goes.
          </h2>
          <p className="text-base text-ink-soft">
            Direct communication, staged milestones, and zero end-of-project surprises.
          </p>
        </div>

        {/* 4-Step Process Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative p-6 rounded-md bg-paper border border-line flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-line mb-4">
                  <span className="font-mono text-xs font-semibold text-sky-700 uppercase tracking-widest">
                    Step {item.step}
                  </span>
                  {index < steps.length - 1 && (
                    <span className="hidden lg:inline text-ink-soft/40 font-mono text-xs select-none">
                      &rarr;
                    </span>
                  )}
                </div>

                <h3 className="font-display font-semibold text-xl text-ink mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-ink-soft leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line text-[11px] font-mono text-ink-soft">
                Phase {index + 1} of 4
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

