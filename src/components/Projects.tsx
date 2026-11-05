import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRightIcon } from './Icons.tsx';
import { projects } from '../data/projects.ts';

// ponytail: lean editorial project list with top-to-bottom sliding hover preview, 1 circular button, no date
interface ProjectsProps {
  onSelectProject?: (slug: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 md:py-36 bg-[#f9f6f2] text-[#111111]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
        {/* Header row: Title on left, subtitle on right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>

            <h2 className="font-display font-semibold text-4xl sm:text-5xl md:text-[68px] leading-tight md:leading-none tracking-[-1.36px] text-[#111111]">
              Featured Projects
            </h2>
          </div>


        </div>

        {/* Editorial Project List: Hover reveals preview image sliding from top to bottom */}
        <div className="border-t border-[#111111]/15">
          {projects.map((project, idx) => {
            const isHovered = hoveredSlug === project.slug;

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onMouseEnter={() => setHoveredSlug(project.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                onClick={() => onSelectProject?.(project.slug)}
                className="relative group cursor-pointer border-b border-[#111111]/15 overflow-hidden transition-colors select-none"
              >
                {/* Background image preview sliding in from top to bottom - slow and silky smooth */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      key={`bg-${project.slug}`}
                      initial={{ y: '-100%' }}
                      animate={{ y: '0%' }}
                      exit={{ y: '100%' }}
                      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
                    >
                      <motion.img
                        initial={{ scale: 1.14, y: '-8%' }}
                        animate={{ scale: 1.03, y: '0%' }}
                        exit={{ scale: 1.14, y: '8%' }}
                        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center"
                      />
                      {/* Dark gradient overlay ensures typography is always pure, high-contrast white */}
                      <div className="absolute inset-0 bg-[#080808]/65 backdrop-blur-[0.5px]" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Foreground row content: Project Name + Subheading side-by-side + 1 Arrow Button */}
                <div className="relative z-10 py-7 sm:py-9 md:py-11 px-4 sm:px-6 md:px-10 grid grid-cols-1 sm:grid-cols-[1.3fr_1.1fr_auto] items-center gap-4 sm:gap-6 md:gap-10">
                  {/* Left: Project Name */}
                  <div className="min-w-0">
                    <h3
                      className={`font-display font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.08] tracking-tight transition-colors duration-500 ease-out ${
                        isHovered ? 'text-white' : 'text-[#111111]'
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Middle: Subheading / Description (side-by-side with project name) */}
                  <div className="min-w-0">
                    <p
                      className={`text-xs sm:text-sm md:text-[15px] font-sans leading-relaxed line-clamp-2 md:line-clamp-3 transition-colors duration-500 ease-out ${
                        isHovered ? 'text-white/85' : 'text-[#111111]/70'
                      }`}
                    >
                      {project.tagline}
                    </p>
                  </div>

                  {/* Far-Right: Only 1 Circular Arrow Button */}
                  <div className="shrink-0 flex items-center justify-end">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 ease-out ${
                        isHovered
                          ? 'border-white bg-white text-black scale-105 shadow-md'
                          : 'border-[#111111]/25 text-[#111111] group-hover:border-[#111111]'
                      }`}
                    >
                      <ArrowUpRightIcon
                        size={15}
                        className="transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Hidden image preloader to ensure instant hover rendering without latency */}
      <div className="hidden" aria-hidden="true">
        {projects.map((p) => (
          <img key={`preload-${p.slug}`} src={p.image} alt="" loading="eager" />
        ))}
      </div>
    </section>
  );
};
