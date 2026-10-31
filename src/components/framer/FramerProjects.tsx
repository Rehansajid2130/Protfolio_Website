import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '../Icons.tsx';
import { RollingText } from '../ui/RollingText.tsx';

const featuredProjects = [
  {
    id: 'damas',
    title: 'Damas',
    category: 'Agency Framer Template',
    year: '2025',
    image: 'https://framerusercontent.com/images/haSjyjpt7FyCjJUBvXtmzCMSEQg.png?width=1160&height=800',
    link: 'https://majd-portfolio.framer.website/',
  },
  {
    id: 'najm',
    title: 'Najm',
    category: 'SaaS Framer Template',
    year: '2025',
    image: 'https://framerusercontent.com/images/WgEHVRrQs62rgxlzrnXJJ8rr4.png?width=1160&height=800',
    link: 'https://majd-portfolio.framer.website/',
  },
  {
    id: 'job-fiesta',
    title: 'Job Fiesta',
    category: 'Full-Stack Recruitment Platform',
    year: '2025',
    image: 'https://framerusercontent.com/images/I3azeVtkvdKBGl9TX38tUdXEb0.png?width=1160&height=800',
    link: '#',
  },
  {
    id: 'mughal-wedding',
    title: 'Mughal Wedding',
    category: 'Interactive Celebration Experience',
    year: '2026',
    image: 'https://framerusercontent.com/images/e3DxUGJWqt7CIVVQIA0VZoy09FQ.png?width=1160&height=800',
    link: '#',
  },
];

export const FramerProjects: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#FAF7F3] border-t border-[#111111]/10 text-[#111111]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-10 border-b border-[#111111]/10 gap-4 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/50 block mb-2">
              / Portfolio
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-[#111111]">
              Featured Projects
            </h2>
          </div>
          <a
            href="https://github.com/rehan-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#111111] hover:text-[#0099FF] transition-colors"
          >
            <RollingText text="View All Work" />
            <ArrowUpRightIcon size={12} />
          </a>
        </div>

        {/* 2-Column Clean Large Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Image Frame with overflow hidden and zoom hover */}
              <div className="relative aspect-[16/10] bg-[#111111]/5 rounded-2xl overflow-hidden border border-[#111111]/10 mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Floating pill badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#111111] font-mono text-[11px] uppercase tracking-wider font-medium shadow-sm">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="flex items-baseline justify-between pt-1">
                <div>
                  <h3 className="font-display font-bold text-2xl text-[#111111] group-hover:text-[#0099FF] transition-colors">
                    <RollingText text={project.title} />
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#111111]/60 mt-1">
                    {project.category}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-[#111111]/20 flex items-center justify-center group-hover:border-[#0099FF] group-hover:bg-[#0099FF] group-hover:text-white transition-all">
                  <ArrowUpRightIcon size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

