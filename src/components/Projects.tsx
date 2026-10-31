import React, { useState } from 'react';
import {
  ArrowUpRightIcon,
  ExternalLinkIcon,
  CloseIcon,
  CheckCircleIcon,
  GithubIcon,
} from './Icons.tsx';
import { projects, Project } from '../data/projects.ts';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 md:py-32 bg-paper border-t border-b border-line">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header per Section 5 */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-sky-700 font-medium">
            01 / Work
          </span>
          <h2 className="text-fluid-h2 font-display font-semibold text-ink tracking-tight">
            Selected projects.
          </h2>
          <p className="text-base text-ink-soft">
            A few things I&apos;ve built, with what I did and how.
          </p>
        </div>

        {/* Project Grid (2 major projects per Section 5 guidelines: "Two good ones beat three weak ones") */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group bg-white rounded-md border border-line p-7 flex flex-col justify-between transition-all duration-200 hover:border-sky-300 hover:shadow-card cursor-pointer"
              onClick={() => setActiveModalProject(project)}
            >
              <div>
                {/* Visual Preview Frame */}
                <div className="w-full aspect-[16/10] bg-sky-50 rounded-sm border border-sky-100 p-5 mb-6 flex flex-col justify-between overflow-hidden relative group-hover:border-sky-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-medium text-sky-700 bg-sky-100 px-2.5 py-1 rounded-sm">
                      {project.badge}
                    </span>
                    <span className="font-mono text-xs text-ink-soft">{project.year}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-sky-100">
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-[10px] font-mono text-ink-soft uppercase">{stat.label}</div>
                        <div className="font-display text-lg font-semibold text-ink">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Corner aesthetic accent */}
                  <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-sky-200/50 rounded-full blur-sm group-hover:scale-125 transition-transform duration-300 pointer-events-none" />
                </div>

                {/* Stack Tags in Mono */}
                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-sky-100 text-sky-700 font-mono text-[11px] font-medium rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Arrow */}
                <h3 className="font-display font-semibold text-2xl text-ink group-hover:text-sky-700 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRightIcon
                    size={20}
                    strokeWidth={1.5}
                    className="text-ink-soft group-hover:text-sky-700 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </h3>

                <p className="text-xs font-mono text-ink-soft mt-1">
                  {project.context} &bull; {project.role}
                </p>

                <p className="text-sm text-ink-soft mt-3 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-6 mt-6 border-t border-line flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-sky-700 group-hover:text-ink transition-colors flex items-center gap-1">
                  View case study &rarr;
                </span>
                <div
                  className="flex items-center gap-3 text-ink-soft"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-ink transition-colors p-1"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-ink transition-colors p-1"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLinkIcon size={16} strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer of section per Section 5 */}
        <div className="mt-12 pt-8 border-t border-line flex items-center justify-between text-xs font-mono">
          <span className="text-ink-soft">Have custom architectural requirements?</span>
          <a
            href="https://github.com/rehan-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-700 hover:text-ink transition-colors inline-flex items-center gap-1.5 font-medium"
          >
            <span>See all repositories on GitHub</span>
            <ArrowUpRightIcon size={13} />
          </a>
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="bg-white rounded-md border border-line max-w-2xl w-full p-6 md:p-8 max-h-[90vh] overflow-y-auto shadow-card relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-5 border-b border-line">
              <div>
                <span className="font-mono text-xs text-sky-700 uppercase tracking-wider">
                  {activeModalProject.context} &bull; {activeModalProject.year}
                </span>
                <h3 id="case-study-title" className="font-display text-2xl md:text-3xl font-semibold text-ink mt-1">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-sm text-ink-soft hover:text-ink hover:bg-sky-50 transition-colors"
                aria-label="Close case study"
              >
                <CloseIcon size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="py-6 space-y-6 text-sm text-ink leading-relaxed">
              {/* Overview */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-ink-soft mb-1.5 font-medium">
                  Overview
                </h4>
                <p>{activeModalProject.caseStudy.overview}</p>
              </div>

              {/* Problem */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-ink-soft mb-1.5 font-medium">
                  The Problem
                </h4>
                <p>{activeModalProject.caseStudy.problem}</p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-ink-soft mb-2 font-medium">
                  Key Features Implemented
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.caseStudy.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-sky-700 font-bold">&bull;</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hard Parts / Technical Challenges */}
              <div className="p-4 rounded-sm bg-paper border border-line">
                <h4 className="font-mono text-xs uppercase tracking-wider text-sky-700 font-semibold mb-2">
                  Technical Challenges Solved
                </h4>
                <ul className="space-y-2 text-xs md:text-sm text-ink-soft">
                  {activeModalProject.caseStudy.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-sky-700 font-mono font-medium">[{idx + 1}]</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result */}
              <div className="p-4 rounded-sm bg-sky-50 border border-sky-100 flex items-start gap-3">
                <CheckCircleIcon size={18} className="text-sky-700 mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-sky-700 font-semibold mb-0.5">
                    Result &amp; Outcome
                  </h4>
                  <p className="font-medium text-ink">
                    {activeModalProject.caseStudy.result}
                  </p>
                </div>
              </div>

              {/* Stack */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-ink-soft mb-2 font-medium">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-sky-100 text-sky-700 font-mono text-xs rounded-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-line flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-sm border border-line text-xs font-mono text-ink hover:bg-sky-50 transition-colors"
              >
                Close case study
              </button>
              <div className="flex items-center gap-4">
                {activeModalProject.links.github && (
                  <a
                    href={activeModalProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-sky-700 hover:text-ink flex items-center gap-1 font-medium"
                  >
                    View Code <ArrowUpRightIcon size={12} />
                  </a>
                )}
                {activeModalProject.links.live && (
                  <a
                    href={activeModalProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-sky-700 hover:text-ink flex items-center gap-1 font-medium"
                  >
                    Live Demo <ExternalLinkIcon size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
