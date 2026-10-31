import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '../Icons.tsx';
import { RollingText } from '../ui/RollingText.tsx';

const projects = [
  {
    id: 'damas',
    title: 'Damas',
    category: 'Agency Framer Template',
    image: 'https://framerusercontent.com/images/VNXQLcPHw9VbVzy6BDpZ8pUsaU.png?width=1160&height=800',
    link: '#',
  },
  {
    id: 'najm',
    title: 'Najm',
    category: 'SaaS Framer Template',
    image: 'https://framerusercontent.com/images/WgEHVRrQs62rgxlzrnXJJ8rr4.png?width=1160&height=800',
    link: '#',
  },
  {
    id: 'kavi',
    title: 'Kavi',
    category: 'AI Framer Template',
    image: 'https://framerusercontent.com/images/I3azeVtkvdKBGl9TX38tUdXEb0.png?width=1160&height=800',
    link: '#',
  },
  {
    id: 'sham',
    title: 'Sham',
    category: 'Studio Framer Template',
    image: 'https://framerusercontent.com/images/e3DxUGJWqt7CIVVQIA0VZoy09FQ.png?width=1160&height=800',
    link: '#',
  },
];

export const FramerProjects: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-36 bg-[#FAF7F3] border-t border-[#111111]/10 text-[#111111]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Header row: Featured Projects on left, View All Work button on right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-10 border-b border-[#111111]/10 gap-6 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/50 block mb-2">
              / Selected Works
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#111111]">
              Featured Projects
            </h2>
          </div>

          <a
            href="https://github.com/rehan-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#111111]/20 hover:border-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-200 text-xs font-mono uppercase tracking-wider font-semibold self-start sm:self-auto"
          >
            <RollingText text="View All Work" />
            <div className="w-5 h-5 rounded-full bg-[#111111]/10 group-hover:bg-white/20 flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowUpRightIcon size={11} />
            </div>
          </a>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer flex flex-col justify-between"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div>
                {/* 20px Rounded Image Wrap with Zoom on Hover */}
                <div className="relative aspect-[16/10] bg-[#111111]/5 rounded-[20px] overflow-hidden border border-[#111111]/10 mb-5">
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
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-[#111111] group-hover:text-[#0099FF] transition-colors">
                      <RollingText text={project.title} />
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-wider text-[#111111]/50 mt-1">
                      {project.category}
                    </p>
                  </div>

                  <div className="w-9 h-9 rounded-full border border-[#111111]/20 flex items-center justify-center group-hover:border-[#0099FF] group-hover:bg-[#0099FF] group-hover:text-white transition-all">
                    <ArrowUpRightIcon size={14} />
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
