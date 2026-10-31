import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials.ts';

export const FramerTestimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#FAF7F3] border-t border-[#111111]/10 text-[#111111] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-10 border-b border-[#111111]/10 gap-4 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/50 block mb-2">
              / Social Proof
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-[#111111]">
              Testimonials
            </h2>
          </div>
          <p className="text-sm font-mono uppercase text-[#111111]/60">
            [ Verified Client Reviews ]
          </p>
        </div>

        {/* 2-Column Clean Testimonial Grid from Majd layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              className="bg-white p-8 md:p-10 rounded-2xl border border-[#111111]/10 flex flex-col justify-between shadow-sm hover:border-[#111111]/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <p className="text-base md:text-lg text-[#111111]/90 leading-relaxed font-sans mb-8">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-[#111111]/10">
                <img
                  src={item.avatar}
                  alt={item.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border border-[#111111]/10 shrink-0"
                />
                <div>
                  <div className="font-display font-bold text-base text-[#111111]">
                    {item.name}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-wider text-[#111111]/50">
                    {item.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

