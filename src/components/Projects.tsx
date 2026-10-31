import React, { useState } from 'react';
import {
  ArrowUpRightIcon,
  ExternalLinkIcon,
  CloseIcon,
  CheckCircleIcon,
  GithubIcon,
} from './Icons.tsx';

interface Project {
  id: string;
  title: string;
  tagline: string;
  year: string;
  tags: string[];
  metrics: string;
  problem: string;
  solution: string;
  result: string;
  demoUrl?: string;
  githubUrl?: string;
  visualPreview: {
    badge: string;
    stats: { label: string; value: string }[];
  };
}

const projects: Project[] = [
  {
    id: 'talentflow',
    title: 'TalentFlow',
    tagline: 'High-concurrency recruitment platform with virtualized Kanban pipelines and live presence.',
    year: '2025',
    tags: ['React 19', 'TypeScript', 'TanStack Virtual', 'Tailwind CSS'],
    metrics: '82% lower memory footprint, 60fps at 5,000+ cards',
    problem:
      'The legacy recruitment dashboard choked on pipelines with over 1,500 active candidates, causing 2-3 second UI freezes during drag-and-drop status changes.',
    solution:
      'Engineered a windowed Kanban column architecture using TanStack Virtual and optimistic state updates. Decoupled drag physics from DOM manipulation using pointer events.',
    result:
      'Render time dropped from 3,200ms to 14ms. Supports 5,000+ candidates simultaneously without frame drops.',
    demoUrl: 'https://example.com/talentflow',
    githubUrl: 'https://github.com/rehan-dev/talentflow',
    visualPreview: {
      badge: 'Virtualized Pipeline',
      stats: [
        { label: 'Render Latency', value: '14ms' },
        { label: 'DOM Nodes', value: '180 max' },
      ],
    },
  },
  {
    id: 'kite-telemetry',
    title: 'Kite Telemetry',
    tagline: 'High-frequency timeseries visualization engine for cloud infrastructure monitoring.',
    year: '2025',
    tags: ['React', 'TypeScript', 'HTML5 Canvas', 'Web Workers'],
    metrics: '60fps under 10k datapoints/sec live ingest',
    problem:
      'SVG charts on the monitoring dashboard caused severe main-thread lag when streaming live memory and network telemetry from 16 cluster nodes.',
    solution:
      'Built a custom double-buffered HTML5 Canvas renderer with data processing offloaded to Web Workers via SharedArrayBuffers, leaving the main thread completely free for UI interactions.',
    result:
      'Cut client CPU utilization by 40% while quadrupling the streaming data density.',
    demoUrl: 'https://example.com/kite',
    githubUrl: 'https://github.com/rehan-dev/kite-telemetry',
    visualPreview: {
      badge: 'Off-Thread Canvas',
      stats: [
        { label: 'Throughput', value: '10k pts/s' },
        { label: 'CPU Load', value: '-40%' },
      ],
    },
  },
  {
    id: 'doculayer',
    title: 'DocuLayer Design System',
    tagline: 'WCAG 2.1 AA certified UI library with multi-tenant token theming.',
    year: '2024',
    tags: ['React', 'TypeScript', 'A11y', 'Tailwind Tokens'],
    metrics: '100% WCAG AA compliance across 36 core components',
    problem:
      'Four separate engineering teams were building redundant UI elements with inconsistent keyboard navigation, failing enterprise accessibility audits.',
    solution:
      'Designed a composable, headless component foundation with strict focus trapping, ARIA roles, and automated CI accessibility testing using axe-core.',
    result:
      'Passed third-party audit with zero violations. Adopted by 24 internal micro-frontends, cutting feature UI delivery time by half.',
    demoUrl: 'https://example.com/doculayer',
    githubUrl: 'https://github.com/rehan-dev/doculayer',
    visualPreview: {
      badge: 'Zero A11y Violations',
      stats: [
        { label: 'Components', value: '36' },
        { label: 'Audit Score', value: '100%' },
      ],
    },
  },
];

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-paper border-t border-b border-line">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-sky-700 font-medium">
            01 / Production Systems
          </span>
          <h2 className="text-fluid-h2 font-display font-semibold text-ink tracking-tight">
            Selected engineering work.
          </h2>
          <p className="text-base text-ink-soft">
            Real production challenges, architecture decisions, and measured outcomes. No hypothetical prototypes.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-md border border-line p-6 flex flex-col justify-between transition-all duration-200 hover:border-sky-300 hover:shadow-card"
            >
              <div>
                {/* Visual Preview Panel */}
                <div className="w-full aspect-[16/10] bg-sky-50 rounded-sm border border-sky-100 p-4 mb-6 flex flex-col justify-between overflow-hidden relative">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-medium text-sky-700 bg-sky-100 px-2 py-0.5 rounded-sm">
                      {project.visualPreview.badge}
                    </span>
                    <span className="font-mono text-xs text-ink-soft">{project.year}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-sky-100">
                    {project.visualPreview.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-[10px] font-mono text-ink-soft uppercase">{stat.label}</div>
                        <div className="font-display text-lg font-semibold text-ink">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Corner indicator */}
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-sky-100 rounded-full opacity-40 group-hover:scale-125 transition-transform duration-300" />
                </div>

                {/* Tags in Mono per style guide */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-sky-100 text-sky-700 font-mono text-[11px] font-medium rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Title and Tagline */}
                <h3 className="font-display font-semibold text-xl text-ink group-hover:text-sky-700 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRightIcon
                    size={18}
                    strokeWidth={1.5}
                    className="text-ink-soft group-hover:text-sky-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </h3>
                <p className="text-sm text-ink-soft mt-2 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-6 mt-6 border-t border-line flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-mono font-medium text-sky-700 hover:text-ink transition-colors flex items-center gap-1 focus-visible:ring-2"
                >
                  Read case study &rarr;
                </button>
                <div className="flex items-center gap-3 text-ink-soft">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-ink transition-colors"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-ink transition-colors"
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
      </div>

      {/* Case Study Modal (Accessible, escape-key friendly) */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          <div className="bg-white rounded-md border border-line max-w-2xl w-full p-6 md:p-8 max-h-[90vh] overflow-y-auto shadow-card relative">
            <div className="flex items-start justify-between pb-4 border-b border-line">
              <div>
                <span className="font-mono text-xs text-sky-700 uppercase">
                  Case Study &bull; {activeModalProject.year}
                </span>
                <h3 id="case-study-title" className="font-display text-2xl font-semibold text-ink mt-1">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-sm text-ink-soft hover:text-ink hover:bg-sky-50 transition-colors"
                aria-label="Close case study"
              >
                <CloseIcon size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="py-6 space-y-6">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-ink-soft mb-1">
                  The Problem
                </h4>
                <p className="text-sm md:text-base text-ink leading-relaxed">
                  {activeModalProject.problem}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-ink-soft mb-1">
                  What I Built &amp; Architecture
                </h4>
                <p className="text-sm md:text-base text-ink leading-relaxed">
                  {activeModalProject.solution}
                </p>
              </div>

              <div className="p-4 rounded-sm bg-sky-50 border border-sky-100 flex items-start gap-3">
                <CheckCircleIcon size={18} className="text-sky-700 mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-sky-700 font-semibold mb-0.5">
                    Measurable Result
                  </h4>
                  <p className="text-sm text-ink font-medium">
                    {activeModalProject.result}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-ink-soft mb-2">
                  Stack &amp; Tooling
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-sky-100 text-sky-700 font-mono text-xs rounded-sm"
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
                Close
              </button>
              <div className="flex items-center gap-3">
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-sky-700 hover:text-ink flex items-center gap-1"
                  >
                    View Code <ArrowUpRightIcon size={12} />
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
