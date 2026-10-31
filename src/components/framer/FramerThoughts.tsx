import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '../Icons.tsx';
import { RollingText } from '../ui/RollingText.tsx';
import { articles } from '../../data/thoughts.ts';

export const FramerThoughts: React.FC = () => {
  return (
    <section id="thoughts" className="py-24 md:py-32 bg-[#FAF7F3] border-t border-[#111111]/10 text-[#111111]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-10 border-b border-[#111111]/10 gap-4 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/50 block mb-2">
              / Editorial
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-[#111111]">
              Thoughts
            </h2>
          </div>
          <p className="text-sm font-mono uppercase text-[#111111]/60">
            [ Design Systems &amp; Direction ]
          </p>
        </div>

        {/* 3-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.article
              key={article.title}
              className="group cursor-pointer flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div>
                <div className="relative aspect-[16/10] bg-[#111111]/5 rounded-xl overflow-hidden border border-[#111111]/10 mb-5">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-[#111111] font-mono text-[10px] uppercase tracking-wider">
                      {article.date}
                    </span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-[#111111] group-hover:text-[#0099FF] transition-colors leading-snug mb-2">
                  <RollingText text={article.title} />
                </h3>

                <p className="text-sm text-[#111111]/60 leading-relaxed font-sans">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#111111]/10 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#111111]/70 group-hover:text-[#0099FF] transition-colors">
                <span>Read Article</span>
                <ArrowUpRightIcon size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

