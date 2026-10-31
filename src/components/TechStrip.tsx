import React from 'react';

const technologies = [
  'React',
  'JavaScript (ES6+)',
  'HTML5 & CSS3',
  'Tailwind CSS',
  'REST APIs',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Socket.io',
  'Git & GitHub',
];

export const TechStrip: React.FC = () => {
  return (
    <div
      className="border-y border-line bg-paper py-3.5 overflow-hidden select-none"
      aria-label="Core technologies"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 overflow-hidden">
        <div className="animate-marquee gap-8 items-center">
          {/* Double array for seamless loop */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex items-center gap-3 shrink-0 text-xs font-mono tracking-wider text-ink-soft hover:text-ink transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" aria-hidden="true" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

