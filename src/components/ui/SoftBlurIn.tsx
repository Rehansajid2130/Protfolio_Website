import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

export interface SoftBlurInProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  delay?: number;
  stagger?: number;
  duration?: number;
  blur?: string | number;
  yOffset?: number;
  triggerOnView?: boolean;
  once?: boolean;
}

/**
 * SoftBlurIn: Apple keynote-style per-character fade-in with soft blur & upward drift.
 * - Easing: cubic-bezier(0.22, 1, 0.36, 1)
 * - Configurable delay, stagger, blur, and triggerOnView
 * - Accessible: respects prefers-reduced-motion, aria-label on root, aria-hidden on chars
 */
export const SoftBlurIn: React.FC<SoftBlurInProps> = ({
  children,
  text,
  className = '',
  as = 'div',
  delay = 0,
  stagger = 0.025,
  duration = 0.65,
  blur = '10px',
  yOffset = 14,
  triggerOnView = false,
  once = true,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const rawText = text ?? (typeof children === 'string' ? children : '');

  // If text is not a simple string, render children directly
  if (!rawText) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  // Accessibility: when prefers-reduced-motion is active, render immediately with full opacity and no motion
  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{rawText}</Tag>;
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const blurValue = typeof blur === 'number' ? `${blur}px` : blur;

  const characterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: yOffset,
      filter: `blur(${blurValue})`,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionComponent = motion[as] as typeof motion.div;

  // Split into words so that word-wrapping remains intact across lines
  const words = rawText.split(' ');

  const motionProps = triggerOnView
    ? {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once, margin: '-20px' },
      }
    : {
        initial: 'hidden',
        animate: 'visible',
      };

  return (
    <MotionComponent
      className={className}
      variants={containerVariants}
      {...motionProps}
      aria-label={rawText}
    >
      {words.map((word, wordIdx) => (
        <span key={`word-${wordIdx}`} className="inline-block whitespace-nowrap">
          {Array.from(word).map((char, charIdx) => (
            <motion.span
              key={`char-${wordIdx}-${charIdx}`}
              variants={characterVariants}
              className="inline-block"
              aria-hidden="true"
            >
              {char}
            </motion.span>
          ))}
          {wordIdx < words.length - 1 && (
            <span className="inline-block" aria-hidden="true">
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </MotionComponent>
  );
};

export default SoftBlurIn;

