import React from 'react';
import { ArrowUpRightIcon, FiverrIcon, FreelancerIcon } from './Icons.tsx';
import { services } from '../data/services.ts';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 md:py-32 bg-paper border-t border-b border-line">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-sky-700 font-medium">
            03 / Services
          </span>
          <h2 className="text-fluid-h2 font-display font-semibold text-ink tracking-tight">
            What I can help with.
          </h2>
          <p className="text-base text-ink-soft">
            Focused frontend capabilities for clients who value speed, clean structure, and reliable delivery.
          </p>
        </div>

        {/* 2-Column Grid of Services per Section 7 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-md border border-line p-8 flex flex-col justify-between transition-all duration-200 hover:border-sky-300 hover:shadow-card group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-line mb-5">
                  <span className="font-mono text-xs font-semibold text-sky-700 uppercase tracking-widest">
                    Service 0{index + 1}
                  </span>
                  <a
                    href="#contact"
                    onClick={() => onSelectService?.(service.title)}
                    className="text-xs font-mono text-ink-soft group-hover:text-sky-700 transition-colors flex items-center gap-1"
                  >
                    <span>Request this</span>
                    <ArrowUpRightIcon size={13} />
                  </a>
                </div>

                <h3 className="font-display font-semibold text-2xl text-ink mb-3 group-hover:text-sky-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Good fit if... callout per spec */}
              <div className="pt-4 border-t border-line bg-sky-50 -mx-8 -mb-8 p-6 rounded-b-md">
                <span className="font-mono text-[11px] uppercase tracking-wider text-sky-700 font-semibold block mb-1">
                  Good fit if:
                </span>
                <p className="text-xs md:text-sm text-ink leading-relaxed font-medium">
                  {service.goodFit}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Platform hire banner per Section 7 */}
        <div className="mt-14 p-6 md:p-8 rounded-md bg-white border border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-display font-semibold text-lg text-ink">
              Prefer to hire through a freelance platform?
            </h4>
            <p className="text-sm text-ink-soft">
              Secure escrow payments, milestone tracking, and verified reviews.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://fiverr.com/rehan_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-line text-xs font-mono font-medium text-ink hover:bg-sky-50 transition-colors"
            >
              <FiverrIcon size={16} />
              <span>Hire on Fiverr</span>
              <ArrowUpRightIcon size={11} />
            </a>
            <a
              href="https://freelancer.com/u/rehandev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-line text-xs font-mono font-medium text-ink hover:bg-sky-50 transition-colors"
            >
              <FreelancerIcon size={16} />
              <span>Hire on Freelancer</span>
              <ArrowUpRightIcon size={11} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

