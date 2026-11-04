import React from 'react';
import { motion } from 'framer-motion';
import { RollingText } from './ui/RollingText.tsx';

const services = [
  {
    title: 'Website Migration',
    categories: ['Web Migration', 'Optimization', 'Framer Rebuild'],
  },
  {
    title: 'Framer Templates',
    categories: ['Startup', 'Agency', 'SaaS'],
  },
  {
    title: 'Web Applications',
    categories: ['Full-Stack', 'Interactive UI', 'API Architecture'],
  },
  {
    title: 'Frontend Development',
    categories: ['React', 'TypeScript', 'Tailwind CSS'],
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-36 bg-[#f9f6f2] text-[#111111]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="pb-10 border-b border-[#111111]/10 mb-8">
          <h2 className="font-display font-semibold text-4xl sm:text-5xl md:text-[68px] leading-tight md:leading-none tracking-[-1.36px] text-[#111111]">
            Services
          </h2>
        </div>

        {/* Horizontal Stack List Rows */}
        <div className="divide-y divide-[#111111]/10 border-b border-[#111111]/10">
          {services.map((item, idx) => (
            <motion.div
              key={item.title}
              className="py-8 sm:py-10 md:py-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-12 cursor-pointer group"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: idx * 0.18,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              {/* Left: Service Title */}
              <div className="shrink-0">
                <h3 className="font-display font-medium text-2xl sm:text-3xl md:text-[34px] leading-[1.2] tracking-[-0.64px] text-[#111111] group-hover:text-[#0099FF] transition-colors">
                  <RollingText text={item.title} />
                </h3>
              </div>

              {/* Right: Clean Sans-Serif Dot-separated Categories */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-sans text-sm sm:text-base md:text-[17px] text-[#111111]/50 tracking-[-0.2px]">
                {item.categories.map((cat, catIdx) => (
                  <React.Fragment key={cat}>
                    <span className="hover:text-[#111111] transition-colors">{cat}</span>
                    {catIdx < item.categories.length - 1 && (
                      <span className="mx-1 sm:mx-1.5 text-[#111111]/30 select-none">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


