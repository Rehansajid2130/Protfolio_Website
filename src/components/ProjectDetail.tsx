import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project, projects } from '../data/projects.ts';
import { ArrowUpRightIcon, CheckCircleIcon } from './Icons.tsx';
import { RollingText } from './ui/RollingText.tsx';

// ponytail: clean, minimal case study view with subtle black borders and transparent container backgrounds
interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onSelectProject: (slug: string) => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  onBack,
  onSelectProject,
}) => {
  // Find next project to navigate forward easily
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  // Scroll to top on project change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.slug]);

  return (
    <article className="min-h-screen bg-[#f9f6f2] text-[#111111] pb-24 md:pb-36 selection:bg-[#0099FF] selection:text-white">
      {/* Main Content Area: pulled in margins for clean editorial framing */}
      <main className="max-w-[1240px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 pt-28 sm:pt-36">
        {/* 1. Project Hero Header */}
        <section className="mb-12 sm:mb-16">
          {/* Main Title */}
          <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-[76px] leading-[1.05] tracking-[-1.5px] text-[#111111] mb-8 sm:mb-10">
            <RollingText text={project.title} />
          </h1>

          {/* Simple metadata & description layout from reference image */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16 pt-2 pb-2">
            {/* Left: Category / Year / Live Link */}
            <div className="flex flex-col gap-2 shrink-0">
              <div className="flex items-center text-xs sm:text-sm text-[#111111]/45 font-sans">
                <span className="min-w-[140px] sm:min-w-[180px]">Category</span>
                <span>Year</span>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 text-base sm:text-lg text-[#111111] font-normal">
                <span>{project.category}</span>
                <span className="text-[#111111]/30">/</span>
                <span>{project.year}</span>
                {project.links.live ? (
                  <>
                    <span className="text-[#111111]/30">/</span>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#111111] hover:text-[#0099FF] transition-colors group cursor-pointer"
                    >
                      <span>Live Link</span>
                      <span className="w-6 h-6 rounded-md border border-[#111111]/30 flex items-center justify-center transition-all group-hover:border-[#0099FF] group-hover:bg-[#0099FF] group-hover:text-white">
                        <ArrowUpRightIcon size={11} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </a>
                  </>
                ) : project.links.github ? (
                  <>
                    <span className="text-[#111111]/30">/</span>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#111111] hover:text-[#0099FF] transition-colors group cursor-pointer"
                    >
                      <span>GitHub</span>
                      <span className="w-6 h-6 rounded-md border border-[#111111]/30 flex items-center justify-center transition-all group-hover:border-[#0099FF] group-hover:bg-[#0099FF] group-hover:text-white">
                        <ArrowUpRightIcon size={11} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </a>
                  </>
                ) : null}
              </div>
            </div>

            {/* Right: Showcase the little description as reference image showed */}
            <div className="max-w-xl">
              <p className="text-base sm:text-lg md:text-[19px] text-[#111111]/85 leading-relaxed font-sans">
                {project.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* 2. Hero Visual Showcase Container - Full Uncropped Image */}
        <section className="mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#111111]/20 shadow-md bg-[#111111]/[0.02]"
          >
            <img
              src={project.image}
              alt={`${project.title} Preview Showcase`}
              className="w-full h-auto block transition-transform duration-700 ease-out hover:scale-[1.01]"
            />
          </motion.div>
        </section>

        {/* 3. Fast Stats & Metrics Banner */}
        <section className="mb-16 sm:mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {project.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-[#111111]/20 flex flex-col justify-between"
              >
                <p className="text-xs font-mono uppercase tracking-wider text-[#111111]/50 mb-2">
                  {stat.label}
                </p>
                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#111111] tracking-tight">
                    {stat.value}
                  </h3>
                  {stat.note && (
                    <p className="text-xs text-[#111111]/60 mt-1 font-sans">{stat.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Project Overview, Problem & Solution */}
        <section className="mb-16 sm:mb-24">
          <div className="max-w-4xl mb-12">
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight mb-6">
              About the Project
            </h2>
            <p className="text-base sm:text-lg text-[#111111]/80 leading-relaxed font-sans">
              {project.caseStudy.overview}
            </p>
          </div>

          {/* Two-Column Problem vs Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* The Problem */}
            <div className="p-8 rounded-[24px] border border-[#111111]/20">
              <h3 className="font-display font-semibold text-2xl text-[#111111] mb-3">
                What wasn't working before
              </h3>
              <p className="text-base text-[#111111]/75 leading-relaxed font-sans">
                {project.caseStudy.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-8 rounded-[24px] border border-[#111111]/20">
              <h3 className="font-display font-semibold text-2xl text-[#111111] mb-3">
                How we solved it
              </h3>
              <p className="text-base text-[#111111]/75 leading-relaxed font-sans">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>
        </section>

        {/* 5. Key Features & What We Built */}
        <section className="mb-16 sm:mb-24">
          <div className="max-w-4xl mb-10">
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight">
              What We Built
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.caseStudy.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[24px] border border-[#111111]/20 hover:border-[#111111]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display font-semibold text-xl text-[#111111]">
                      {feature.title}
                    </h3>
                    <CheckCircleIcon size={20} className="text-[#0099FF] shrink-0 mt-0.5" />
                  </div>
                  <p className="text-sm sm:text-base text-[#111111]/70 leading-relaxed font-sans">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Interface Showcase (if project has gallery images) */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mb-16 sm:mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
              {project.gallery.map((imgSrc, idx) => {
                const isWide =
                  imgSrc.includes('admin') ||
                  imgSrc.includes('cart') ||
                  imgSrc.includes('results') ||
                  imgSrc.includes('capabilities') ||
                  imgSrc.includes('sprint') ||
                  imgSrc.includes('process') ||
                  (project.gallery!.length % 2 !== 0 && idx === 0);
                return (
                  <div
                    key={idx}
                    className={`rounded-[24px] sm:rounded-[28px] overflow-hidden border border-[#111111]/20 shadow-md bg-[#111111]/[0.02] ${
                      isWide ? 'md:col-span-2' : ''
                    }`}
                  >
                    <img
                      src={imgSrc}
                      alt={`${project.title} Interface Preview ${idx + 1}`}
                      className="w-full h-auto block transition-transform duration-700 ease-out hover:scale-[1.01]"
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 6. System Architecture */}
        <section className="mb-16 sm:mb-24">
          <div className="p-8 sm:p-12 rounded-[28px] border border-[#111111]/20">
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#111111] tracking-tight mb-8">
              System Architecture
            </h2>

            {/* Architecture Explanations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.caseStudy.techExplanation.map((explanation, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0099FF] mt-2.5 shrink-0" />
                  <p className="text-sm sm:text-base text-[#111111]/75 leading-relaxed font-sans">
                    {explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Real Challenges & Smart Solutions */}
        <section className="mb-16 sm:mb-24">
          <div className="max-w-4xl mb-10">
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight">
              Real Challenges & How We Solved Them
            </h2>
          </div>

          <div className="space-y-6">
            {project.caseStudy.challenges.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[24px] border border-[#111111]/20 grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
              >
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#111111]/50 mb-2 font-semibold">
                    Challenge {idx + 1}
                  </h4>
                  <p className="text-base text-[#111111] font-medium leading-relaxed font-sans">
                    {item.challenge}
                  </p>
                </div>

                <div className="md:border-l md:border-[#111111]/10 md:pl-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#0099FF] mb-2 font-semibold">
                    The Solution
                  </h4>
                  <p className="text-sm sm:text-base text-[#111111]/70 leading-relaxed font-sans">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Result & Takeaway */}
        <section className="mb-16 sm:mb-24">
          <div className="p-8 sm:p-12 rounded-[28px] bg-[#111111] text-white shadow-xl relative overflow-hidden">
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
              The Final Outcome
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed font-sans mb-8">
              {project.caseStudy.result}
            </p>

            {/* Quick Action Button */}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#111111] font-medium hover:bg-[#0099FF] hover:text-white transition-all shadow-md group"
              >
                <span>Launch Live Project</span>
                <ArrowUpRightIcon size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>
        </section>

        {/* 9. Next Project Navigation Card */}
        <section className="border-t border-[#111111]/10 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111]">
                Explore Next Case Study
              </h2>
            </div>

            <button
              type="button"
              onClick={onBack}
              className="text-sm font-medium text-[#111111]/70 hover:text-[#0099FF] transition-colors self-start sm:self-auto cursor-pointer"
            >
              ← Back to all projects
            </button>
          </div>

          {/* Clickable Next Project Banner */}
          <div
            onClick={() => onSelectProject(nextProject.slug)}
            className="group cursor-pointer rounded-[28px] overflow-hidden border border-[#111111]/20 hover:border-[#111111]/50 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 items-center"
          >
            {/* Image Preview (5 cols) */}
            <div className="md:col-span-5 aspect-[16/10] bg-[#111111]/5 overflow-hidden">
              <img
                src={nextProject.image}
                alt={nextProject.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content (7 cols) */}
            <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#111111]/50 block mb-2">
                  {nextProject.category}
                </span>
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#111111] group-hover:text-[#0099FF] transition-colors mb-3">
                  {nextProject.title}
                </h3>
                <p className="text-sm sm:text-base text-[#111111]/70 leading-relaxed font-sans mb-6 line-clamp-2">
                  {nextProject.tagline}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] group-hover:text-[#0099FF] transition-colors">
                <span>Read Full Case Study</span>
                <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center transition-colors group-hover:bg-[#0099FF]">
                  <ArrowUpRightIcon size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </article>
  );
};
