import React from 'react';

interface RollingTextProps {
  text: string;
  className?: string;
  stagger?: number;
  duration?: number;
}

export const RollingText: React.FC<RollingTextProps> = ({
  text,
  className = '',
  duration = 0.48,
}) => {
  return (
    <span
      className={`group/roll relative inline-flex flex-col overflow-hidden select-none leading-none ${className}`}
      style={{ verticalAlign: 'middle' }}
    >
      {/* Primary visible text */}
      <span
        className="block whitespace-nowrap transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full group-hover/roll:-translate-y-full"
        style={{ transitionDuration: `${duration}s` }}
      >
        {text}
      </span>
      {/* Duplicate rolling text strictly below the container, impossible to leak */}
      <span
        aria-hidden="true"
        className="absolute top-full left-0 block whitespace-nowrap transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full group-hover/roll:-translate-y-full pointer-events-none"
        style={{ transitionDuration: `${duration}s` }}
      >
        {text}
      </span>
    </span>
  );
};
