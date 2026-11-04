import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, ExternalLinkIcon } from './Icons.tsx';
import { RollingText } from './ui/RollingText.tsx';
import { projects } from '../data/projects.ts';

// ponytail: reuse centralized project data, lean card click triggers case study
interface ProjectsProps {
  onSelectProject?: (slug: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 md:py-36 bg-[#f9f6f2] text-[#111111]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
        {/* Header row: Featured Projects on left, View count or subtext on right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0099FF]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#111111]/60">
                Selected Work & Case Studies
              </span>
            </div>
            <h2 className="font-display font-semibold text-4xl sm:text-5xl md:text-[68px] leading-tight md:leading-none tracking-[-1.36px] text-[#111111]">
              Featured Projects
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#111111]/60 max-w-sm font-sans">
            Real products engineered for speed, clean UX, and accessible interactions. Click any card to read the full case study.
          </p>
        </div>

        {/* Projects Grid: Featured Card on top + 2 Supporting Cards side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              onClick={() => onSelectProject?.(project.slug)}
              className={`group cursor-pointer flex flex-col justify-between ${
                idx === 0 ? 'md:col-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div>
                {/* 24px Rounded Image Wrap with Zoom on Hover */}
                <div
                  className={`relative ${
                    idx === 0
                      ? 'aspect-[16/9] md:aspect-[21/9]'
                      : 'aspect-[16/10]'
                  } bg-[#111111]/5 rounded-[24px] overflow-hidden border border-[#111111]/10 mb-5 shadow-sm`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Badge in top corner */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#111111]/10 text-xs font-mono uppercase tracking-wider text-[#111111]">
                    {project.badge}
                  </div>

                  {/* Direct live link button on hover */}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-[#111111]/10 flex items-center justify-center text-[#111111] hover:bg-[#0099FF] hover:text-white transition-all shadow-sm"
                      title="Open live website in new tab"
                      aria-label={`Open live website for ${project.title}`}
                    >
                      <ExternalLinkIcon size={14} />
                    </a>
                  )}
                </div>

                {/* Title & Category Below */}
                <div className="flex items-baseline justify-between pt-1">
                  <div>
                    <h3 className="font-display font-medium text-2xl md:text-[32px] leading-[1.2] tracking-[-0.64px] text-[#111111] group-hover:text-[#0099FF] transition-colors">
                      <RollingText text={project.title} />
                    </h3>
                    <p className="type-caption uppercase tracking-wider text-[#111111]/50 mt-1">
                      {project.category}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2">
                    <span className="hidden sm:inline text-xs font-mono uppercase tracking-wider text-[#111111]/50 group-hover:text-[#0099FF] transition-colors">
                      Case Study
                    </span>
                    <div className="w-10 h-10 rounded-full border border-[#111111]/20 flex items-center justify-center shrink-0 group-hover:border-[#0099FF] group-hover:bg-[#0099FF] group-hover:text-white transition-all duration-200">
                      <ArrowUpRightIcon size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
