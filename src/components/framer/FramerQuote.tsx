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
  // Map index to a fractional threshold across scroll progress [0.15, 0.85]
  const start = 0.15 + (index / total) * 0.7;
  const end = start + 0.7 / total;

  const color = useTransform(
    progress,
    [start, end],
    ['rgba(17, 17, 17, 0.12)', 'rgba(17, 17, 17, 1)']
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

export const FramerQuote: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const words = quoteText.split(' ');

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  return (
    <section
      ref={targetRef}
      className="py-32 md:py-48 bg-[#FAF7F3] border-t border-[#111111]/10 flex items-center justify-center text-center"
    >
      <div className="max-w-[960px] mx-auto px-6 md:px-10">
        <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/40 block mb-6">
          / Core Philosophy
        </span>

        <p className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.25] tracking-tight text-[#111111]">
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
    </section>
  );
};

