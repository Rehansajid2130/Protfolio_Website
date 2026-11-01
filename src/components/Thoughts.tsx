import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from './Icons.tsx';
import { RollingText } from './ui/RollingText.tsx';
import { articles } from '../data/thoughts.ts';

export const Thoughts: React.FC = () => {
  return (
    <section id="thoughts" className="py-24 md:py-36 bg-[#FAF7F3] border-t border-[#111111]/10 text-[#111111]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="pb-10 border-b border-[#111111]/10 mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/50 block mb-2">
            / Insights
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#111111]">
            Thoughts
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
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
                {/* Image card with rounded corners */}
                <div className="relative aspect-[16/10] bg-[#111111]/5 rounded-[20px] overflow-hidden border border-[#111111]/10 mb-5">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#111111] font-mono text-[10px] uppercase tracking-wider font-medium">
                      {article.date}
                    </span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl md:text-2xl text-[#111111] group-hover:text-[#0099FF] transition-colors leading-snug mb-2">
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

        {/* Callout */}
        <div className="p-8 md:p-12 rounded-[20px] bg-white border border-[#111111]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-display font-medium text-xl md:text-2xl text-[#111111] max-w-xl">
            See how we shape digital products with clarity and craft&mdash;explore our blog.
          </p>
          <a
            href="#hero-section"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#111111] text-[#FAF7F3] hover:bg-[#0099FF] transition-colors text-xs font-mono uppercase tracking-wider font-semibold shrink-0"
          >
            <RollingText text="Explore Blog" className="text-white" />
            <ArrowUpRightIcon size={12} className="text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

