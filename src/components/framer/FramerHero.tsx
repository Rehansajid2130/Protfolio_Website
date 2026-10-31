import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, ArrowDownIcon } from '../Icons.tsx';
import { RollingText } from '../ui/RollingText.tsx';

export const FramerHero: React.FC = () => {
  const headline =
    'From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use, driven by clarity, structured systems, and intentional design.';

  const words = headline.split(' ');

  return (
    <section id="hero" className="pt-36 pb-24 md:pt-44 md:pb-32 bg-[#FAF7F3] text-[#111111]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Top meta tags */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#111111]/10 text-xs font-mono uppercase tracking-widest text-[#111111]/60">
          <div>/ CREATING SINCE 2020</div>
          <div>SOFTWARE ENGINEER &bull; LAHORE, PK</div>
          <div className="hidden sm:block">©2026 ARCHIVE</div>
        </div>

        {/* Massive Editorial Headline with Framer Staggered Word Reveal */}
        <div className="py-12 md:py-16">
          <h1 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.15] tracking-tight text-[#111111]">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.28em] align-top">
                <motion.span
                  className="inline-block"
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.05 + i * 0.025,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        {/* Lower row: bio and actions */}
        <div className="pt-10 border-t border-[#111111]/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#111111]/50 block mb-2">
              / About Me
            </span>
            <div className="text-xl font-display font-semibold text-[#111111]">Hey!</div>
          </div>

          <div className="md:col-span-5 space-y-4 text-base text-[#111111]/80 leading-relaxed font-sans">
            <p>
              I’m Rehan, a software engineer with a strong focus on building modern, scalable, and
              conversion-driven web experiences.
            </p>
            <p className="text-sm text-[#111111]/60">
              Over the years, I’ve created and shipped multiple full-stack SaaS apps, custom web applications,
              and UI systems used by global customers to launch faster.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#111111] text-[#FAF7F3] hover:bg-[#0099FF] transition-colors duration-200 text-xs font-mono uppercase tracking-wider font-medium w-full sm:w-auto"
            >
              <RollingText text="Get Started" className="text-white" />
              <ArrowUpRightIcon
                size={14}
                className="text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#111111]/20 hover:border-[#111111] transition-colors text-xs font-mono uppercase tracking-wider text-[#111111] w-full sm:w-auto"
            >
              <span>View Projects</span>
              <ArrowDownIcon size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

