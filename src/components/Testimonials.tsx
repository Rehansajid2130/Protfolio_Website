import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials.ts';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-36 bg-[#FAF7F3] border-t border-[#111111]/10 text-[#111111]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="pb-10 border-b border-[#111111]/10 mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/50 block mb-2">
            / Feedback
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#111111]">
            Testimonials
          </h2>
        </div>

        {/* 2x2 Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              className="bg-[#111111] text-[#FAF7F3] p-8 md:p-12 rounded-[20px] flex flex-col justify-between shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <p className="text-base sm:text-lg text-[#FAF7F3]/90 leading-relaxed font-sans mb-10">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border border-white/20 shrink-0"
                />
                <div>
                  <div className="font-display font-bold text-base text-white">
                    {item.name}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-wider text-white/50">
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

