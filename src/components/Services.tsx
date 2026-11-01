import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from './Icons.tsx';
import { RollingText } from './ui/RollingText.tsx';

const services = [
  {
    num: '01',
    title: 'Website Migration',
    categories: ['Web Migration', 'Optimization', 'Performance Rebuild'],
    description: 'Transforming legacy codebases and designs into blazing-fast modern builds with zero SEO degradation.',
  },
  {
    num: '02',
    title: 'Web Applications',
    categories: ['SaaS', 'Startup MVP', 'Full-Stack'],
    description: 'Engineering scalable, conversion-driven web products with high-end motion and responsive layouts.',
  },
  {
    num: '03',
    title: 'Frontend Development',
    categories: ['UI Dev', 'Responsive Layouts', 'Web Performance'],
    description: 'Building accessible, fluid interfaces with React, TypeScript, and clean modular component architectures.',
  },
  {
    num: '04',
    title: 'Product Consulting',
    categories: ['Product Direction', 'Web Strategy', 'Technical Guidance'],
    description: 'Advising teams on interaction design, frontend architecture, and roadmap execution.',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-36 bg-[#FAF7F3] border-t border-[#111111]/10 text-[#111111]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="pb-10 border-b border-[#111111]/10 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/50 block mb-2">
            / Capabilities
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#111111]">
            Services
          </h2>
        </div>

        {/* Horizontal Stack List Rows */}
        <div className="divide-y divide-[#111111]/10 border-b border-[#111111]/10">
          {services.map((item, idx) => (
            <motion.div
              key={item.num}
              className="py-10 md:py-14 px-4 -mx-4 rounded-2xl transition-colors duration-300 hover:bg-white flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              {/* Left: Number and Large Bold Title */}
              <div className="flex items-baseline gap-4 md:gap-8">
                <span className="font-mono text-xs font-semibold text-[#111111]/40 uppercase tracking-widest">
                  /{item.num}
                </span>
                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#111111] group-hover:text-[#0099FF] transition-colors">
                    <RollingText text={item.title} />
                  </h3>
                  <p className="text-sm text-[#111111]/60 font-sans mt-1 max-w-md hidden sm:block">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Right: Dot-connected Categories + Arrow */}
              <div className="flex items-center gap-6 md:gap-10 self-start md:self-center">
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#111111]/60">
                  {item.categories.map((cat, catIdx) => (
                    <React.Fragment key={cat}>
                      <span className="hover:text-[#111111] transition-colors">{cat}</span>
                      {catIdx < item.categories.length - 1 && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#111111] inline-block" />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="w-10 h-10 rounded-full border border-[#111111]/20 flex items-center justify-center shrink-0 group-hover:border-[#0099FF] group-hover:bg-[#0099FF] group-hover:text-white transition-all duration-200">
                  <ArrowUpRightIcon size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

