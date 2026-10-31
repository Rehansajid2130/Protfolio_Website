import React from 'react';
import { stackCategories } from '../data/stack.ts';

export const Stack: React.FC = () => {
  return (
    <section id="stack" className="py-24 md:py-32 bg-paper border-t border-b border-line">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-sky-700 font-medium">
            05 / Stack
          </span>
          <h2 className="text-fluid-h2 font-display font-semibold text-ink tracking-tight">
            Tools I use.
          </h2>
          <p className="text-base text-ink-soft">
            Technologies I work with daily and can comfortably discuss in technical depth. No arbitrary percentage bars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stackCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white rounded-md border border-line p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display font-semibold text-xl text-ink mb-1">
                  {cat.category}
                </h3>
                <p className="text-sm text-ink-soft mb-6">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-sm bg-sky-50 border border-sky-100 text-sky-700 font-mono text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-line flex items-center justify-between text-xs font-mono text-ink-soft">
                <span>Verified in production</span>
                <span className="w-2 h-2 rounded-full bg-sky-500" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

