import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface RollingTextProps {
  text: string;
  className?: string;
  stagger?: number;
  duration?: number;
}

// ponytail: faithful reproduction of Framer's signature RollingTextHover component using Framer Motion
export const RollingText: React.FC<RollingTextProps> = ({
  text,
  className = '',
  stagger = 0.018,
  duration = 0.32,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={`inline-flex items-center overflow-hidden cursor-pointer select-none leading-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ display: 'inline-flex', verticalAlign: 'middle' }}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className="relative inline-block overflow-hidden"
            style={{ height: '1.25em' }}
          >
            <motion.span
              className="inline-block"
              initial={{ y: '0%' }}
              animate={{ y: isHovered ? '-100%' : '0%' }}
              transition={{
                duration,
                delay: index * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
            <motion.span
              className="absolute left-0 top-0 inline-block"
              initial={{ y: '100%' }}
              animate={{ y: isHovered ? '0%' : '100%' }}
              transition={{
                duration,
                delay: index * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          </span>
        ))}
      </span>
    </span>
  );
};

