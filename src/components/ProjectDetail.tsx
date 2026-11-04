import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project, projects } from '../data/projects.ts';
import { ArrowLeftIcon, ArrowUpRightIcon, GithubIcon, ExternalLinkIcon, CheckCircleIcon } from './Icons.tsx';
import { RollingText } from './ui/RollingText.tsx';

// ponytail: single-responsibility case study view styled cleanly with tailwind and framer-motion
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
      {/* Top Navigation & Breadcrumbs Bar */}
      <header className="sticky top-0 z-40 bg-[#f9f6f2]/90 backdrop-blur-md border-b border-[#111111]/[0.08] px-6 sm:px-10 py-4">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between gap-4">
          {/* Back button */}
          <button
            type="button"
            onClick={onBack}
            className="group inline-flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#111111] hover:text-[#0099FF] transition-colors focus:outline-none"
            aria-label="Back to all projects"
          >
            <div className="w-8 h-8 rounded-full border border-[#111111]/20 flex items-center justify-center transition-all group-hover:border-[#0099FF] group-hover:bg-[#0099FF] group-hover:text-white">
              <ArrowLeftIcon size={14} className="transition-transform group-hover:-translate-x-0.5" />
            </div>
            <span>Back to Projects</span>
          </button>

          {/* Breadcrumb Info Pill (hidden on very small screens) */}
          <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-wider text-[#111111]/50 font-mono">
            <span>Work</span>
            <span>/</span>
            <span className="text-[#111111] font-semibold">{project.title}</span>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#111111]/15 text-xs font-medium hover:border-[#111111] transition-colors"
                title="View Source on GitHub"
              >
                <GithubIcon size={14} />
                <span>Source</span>
              </a>
            )}

            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111111] text-white text-xs sm:text-sm font-medium hover:bg-[#0099FF] transition-all shadow-sm group"
              >
                <span>Visit Live Site</span>
                <ArrowUpRightIcon size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-[1320px] mx-auto px-6 sm:px-10 pt-10 sm:pt-16">
        {/* 1. Project Hero Header */}
        <section className="mb-12 sm:mb-16">
          {/* Badge & Year */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#111111]/[0.05] border border-[#111111]/10 text-xs font-mono uppercase tracking-wider text-[#111111]/70">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-[#111111]/40">•</span>
            <span className="text-xs font-mono text-[#111111]/60">{project.year}</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-[76px] leading-[1.05] tracking-[-1.5px] text-[#111111] mb-6">
            <RollingText text={project.title} />
          </h1>

          {/* Tagline in simple English */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#111111]/75 max-w-4xl font-normal leading-relaxed mb-10">
            {project.tagline}
          </p>

          {/* Meta Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl bg-white border border-[#111111]/[0.08] shadow-sm">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#111111]/50 mb-1">Client</p>
              <p className="font-medium text-sm sm:text-base text-[#111111]">{project.client}</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#111111]/50 mb-1">Timeline</p>
              <p className="font-medium text-sm sm:text-base text-[#111111]">{project.year}</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#111111]/50 mb-1">Role</p>
              <p className="font-medium text-sm sm:text-base text-[#111111]">{project.role}</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#111111]/50 mb-1">Services</p>
              <p className="font-medium text-sm sm:text-base text-[#111111]">
                {project.services.slice(0, 2).join(', ')}
              </p>
            </div>
          </div>
        </section>

        {/* 2. Hero Visual Showcase Container */}
        <section className="mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#111111]/5 border border-[#111111]/10 shadow-lg group"
          >
            {/* Live Indicator Tag */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#111111]/10 shadow-sm text-xs font-medium text-[#111111]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Production Ready</span>
            </div>

            {/* Featured Image */}
            <div className="aspect-[16/10] md:aspect-[21/9] w-full overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} Preview Showcase`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>

            {/* Quick Live Link Action Footer */}
            {project.links.live && (
              <div className="p-4 sm:p-5 bg-white border-t border-[#111111]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-xs sm:text-sm text-[#111111]/70 font-mono">
                  Live URL: <span className="text-[#0099FF]">{project.links.live}</span>
                </span>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#111111] hover:text-[#0099FF] transition-colors"
                >
                  <span>Open Live Application</span>
                  <ExternalLinkIcon size={14} />
                </a>
              </div>
            )}
          </motion.div>
        </section>

        {/* 3. Fast Stats & Metrics Banner */}
        <section className="mb-16 sm:mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {project.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#111111]/[0.08] shadow-sm flex flex-col justify-between"
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
            <span className="text-xs font-mono uppercase tracking-wider text-[#0099FF] font-semibold block mb-2">
              01 / Overview
            </span>
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
            <div className="p-8 rounded-[24px] bg-white border border-[#111111]/[0.08] shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-200 text-xs font-mono uppercase tracking-wider mb-4">
                The Challenge
              </div>
              <h3 className="font-display font-semibold text-2xl text-[#111111] mb-3">
                What wasn't working before
              </h3>
              <p className="text-base text-[#111111]/75 leading-relaxed font-sans">
                {project.caseStudy.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-8 rounded-[24px] bg-white border border-[#0099FF]/20 shadow-sm relative overflow-hidden">
              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#0099FF]" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono uppercase tracking-wider mb-4">
                The Solution
              </div>
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
            <span className="text-xs font-mono uppercase tracking-wider text-[#0099FF] font-semibold block mb-2">
              02 / Key Features
            </span>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight">
              What We Built
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.caseStudy.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[24px] bg-white border border-[#111111]/[0.08] shadow-sm hover:border-[#0099FF]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#0099FF] bg-[#0099FF]/10 px-2.5 py-1 rounded-md">
                      {feature.badge || `Feature 0${idx + 1}`}
                    </span>
                    <CheckCircleIcon size={18} className="text-[#0099FF]" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-[#111111] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#111111]/70 leading-relaxed font-sans">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Tech Stack & Architecture */}
        <section className="mb-16 sm:mb-24">
          <div className="p-8 sm:p-12 rounded-[28px] bg-white border border-[#111111]/[0.08] shadow-sm">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0099FF] font-semibold block mb-2">
              03 / Technology
            </span>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#111111] tracking-tight mb-6">
              Tech Stack & Architecture
            </h2>

            {/* Stack Tags */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl bg-[#111111]/[0.04] border border-[#111111]/10 text-xs sm:text-sm font-mono text-[#111111] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Architecture Explanations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#111111]/10">
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
            <span className="text-xs font-mono uppercase tracking-wider text-[#0099FF] font-semibold block mb-2">
              04 / Engineering
            </span>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight">
              Real Challenges & How We Solved Them
            </h2>
          </div>

          <div className="space-y-6">
            {project.caseStudy.challenges.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[24px] bg-white border border-[#111111]/[0.08] shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
              >
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md inline-block mb-3">
                    The Challenge #{idx + 1}
                  </span>
                  <p className="text-base text-[#111111] font-medium leading-relaxed font-sans">
                    {item.challenge}
                  </p>
                </div>

                <div className="md:border-l md:border-[#111111]/10 md:pl-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#0099FF] bg-[#0099FF]/10 px-2.5 py-1 rounded-md inline-block mb-3">
                    How We Fixed It
                  </span>
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
            <span className="text-xs font-mono uppercase tracking-wider text-[#0099FF] font-semibold block mb-2">
              05 / Results
            </span>
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
              <span className="text-xs font-mono uppercase tracking-wider text-[#111111]/50 block mb-1">
                Up Next
              </span>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111]">
                Explore Next Case Study
              </h2>
            </div>

            <button
              type="button"
              onClick={onBack}
              className="text-sm font-medium text-[#111111]/70 hover:text-[#0099FF] transition-colors self-start sm:self-auto"
            >
              ← Back to all projects
            </button>
          </div>

          {/* Clickable Next Project Banner */}
          <div
            onClick={() => onSelectProject(nextProject.slug)}
            className="group cursor-pointer rounded-[28px] overflow-hidden bg-white border border-[#111111]/[0.08] shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12 items-center"
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
