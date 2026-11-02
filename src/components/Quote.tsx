import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const quoteText =
  'From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use, driven by clarity, structured systems, and intentional design.';

interface WordProps {
  word: string;
  index: number;
  total: number;
  progress: any;
}

const Word: React.FC<WordProps> = ({ word, index, total, progress }) => {
  // Map index to illuminate across scroll progress [0.08, 0.84]
  const start = 0.08 + (index / total) * 0.76;
  const end = start + 0.76 / total;

  const color = useTransform(
    progress,
    [start, end],
    ['rgba(17, 17, 17, 0.15)', 'rgba(17, 17, 17, 1)']
  );

  return (
    <motion.span
      style={{ color }}
      className="inline-block mr-[0.25em] transition-colors duration-200 select-none"
    >
      {word}
    </motion.span>
  );
};

export const Quote: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = quoteText.split(' ');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={containerRef}
      id="philosophy"
      className="relative h-[220vh] bg-[#f9f6f2] border-t border-[#111111]/10"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 sm:px-10 overflow-hidden">
        <div className="max-w-[840px] mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/40 block mb-6">
            / Core Philosophy
          </span>

          <p className="font-display font-medium text-3xl sm:text-4xl md:text-5xl leading-[1.25] tracking-tight text-[#111111]">
            {words.map((word, i) => (
              <Word
                key={i}
                word={word}
                index={i}
                total={words.length}
                progress={scrollYProgress}
              />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};
