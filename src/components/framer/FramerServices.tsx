import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '../Icons.tsx';
import { RollingText } from '../ui/RollingText.tsx';

const services = [
  {
    num: '01',
    title: 'Website Migration',
    tags: ['Web Migration', 'Optimization', 'Framer Rebuild'],
    description:
      'Seamlessly migrating legacy sites and mockups into modern, high-speed React or Framer builds with zero SEO loss.',
  },
  {
    num: '02',
    title: 'Framer & Web Templates',
    tags: ['Startup', 'Agency', 'SaaS'],
    description:
      'Designing and developing conversion-optimized, fully responsive templates tailored for emerging ventures and creators.',
  },
  {
    num: '03',
    title: 'Frontend Development',
    tags: ['UI Dev', 'Responsive Layouts', 'Web Performance'],
    description:
      'Building performant, pixel-perfect user interfaces with React, TypeScript, and clean modular component design systems.',
  },
  {
    num: '04',
    title: 'Product Consulting',
    tags: ['Product Direction', 'Web Strategy', 'Technical Guidance'],
    description:
      'Advising on frontend architecture, state management, API contracts, and user experience flows for early-stage digital products.',
  },
];

export const FramerServices: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAF7F3] border-t border-[#111111]/10 text-[#111111]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-10 border-b border-[#111111]/10 gap-4 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/50 block mb-2">
              / What I Do
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-[#111111]">
              Services
            </h2>
          </div>
          <p className="text-sm font-mono uppercase text-[#111111]/60">
            [ 04 Core Competencies ]
          </p>
        </div>

        {/* 2x2 Clean Minimalist Service Grid from Majd layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#111111]/10 border border-[#111111]/10 rounded-2xl overflow-hidden">
          {services.map((item, idx) => (
            <motion.div
              key={item.num}
              className="bg-[#FAF7F3] p-8 md:p-12 flex flex-col justify-between hover:bg-white transition-colors duration-200 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#111111]/10 mb-8">
                  <span className="font-mono text-xs font-semibold text-[#111111]/50 uppercase tracking-widest">
                    /{item.num}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-[#111111]/5 text-[#111111]/70 font-mono text-[11px] uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="font-display font-bold text-2xl md:text-3xl text-[#111111] mb-4">
                  <RollingText text={item.title} />
                </h3>

                <p className="text-sm md:text-base text-[#111111]/70 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-[#111111]/10 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#111111] group-hover:text-[#0099FF] transition-colors"
                >
                  <span>Inquire for this</span>
                  <ArrowUpRightIcon size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

