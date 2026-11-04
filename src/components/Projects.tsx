import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from './Icons.tsx';
import { RollingText } from './ui/RollingText.tsx';
import { GITHUB_REPO_URL } from '../data/githubActivity.ts';

const projects = [
  {
    id: 'bit3labs',
    title: 'Bit3Labs',
    category: 'Web3 & Tech Studio Platform',
    image: '/images/projects/bit3labs.png',
    link: 'https://bit3labs.vercel.app',
  },
  {
    id: 'raya',
    title: 'Raya Clothing Brand',
    category: 'E-Commerce & Fashion Storefront',
    image: '/images/projects/raya.png',
    link: 'https://raya-navy-alpha.vercel.app',
  },
  {
    id: 'job-fiesta',
    title: 'Job-Fiesta',
    category: 'Full-Stack Recruitment Portal',
    image: '/images/projects/job-fiesta.png',
    link: 'https://github.com/Rehansajid2130/Job-fiesta_fyp',
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-36 bg-[#f9f6f2] text-[#111111]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
        {/* Header row: Featured Projects on left, View All Work button on right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <h2 className="font-display font-semibold text-4xl sm:text-5xl md:text-[68px] leading-tight md:leading-none tracking-[-1.36px] text-[#111111]">
              Featured Projects
            </h2>
          </div>

          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 select-none self-start sm:self-auto cursor-pointer"
          >
            <span className="font-sans font-medium text-base sm:text-lg text-[#111111] group-hover:text-[#0099FF] transition-colors">
              <RollingText text="View All Work" />
            </span>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#111111] flex items-center justify-center text-white shadow-sm transition-all duration-200 group-hover:bg-[#0099FF]">
              <ArrowUpRightIcon size={15} className="text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        </div>

        {/* Projects Grid: Featured Card on top + 2 Supporting Cards side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {projects.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
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
                  } bg-[#111111]/5 rounded-[24px] overflow-hidden border border-[#111111]/10 mb-5`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
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

                  <div className="w-10 h-10 rounded-full border border-[#111111]/20 flex items-center justify-center shrink-0 group-hover:border-[#0099FF] group-hover:bg-[#0099FF] group-hover:text-white transition-all duration-200">
                    <ArrowUpRightIcon size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

