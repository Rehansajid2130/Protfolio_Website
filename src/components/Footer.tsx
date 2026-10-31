import React from 'react';
import { ArrowUpIcon, GithubIcon, LinkedinIcon, FiverrIcon, FreelancerIcon } from './Icons.tsx';
import { contactDetails } from '../data/socials.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-paper border-t border-line py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Big closing line from spec Section 2 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-line">
          <div className="space-y-4 max-w-xl">
            <span className="font-mono text-xs uppercase text-sky-700 tracking-wider font-medium">
              Start a Conversation
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
              Have something to build? Send me a message.
            </h2>
            <p className="text-sm md:text-base text-ink-soft">
              Direct inquiries via{' '}
              <a
                href={`mailto:${contactDetails.email}`}
                className="text-sky-700 hover:text-ink font-mono font-medium underline underline-offset-4"
              >
                {contactDetails.email}
              </a>
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="self-start md:self-end inline-flex items-center gap-2 text-xs font-mono text-sky-700 hover:text-ink transition-colors p-2.5 rounded-sm hover:bg-white border border-transparent hover:border-line focus-visible:ring-2"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUpIcon size={14} />
          </button>
        </div>

        {/* Bottom row: platform links & copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-ink-soft">
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="https://github.com/rehan-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors flex items-center gap-1.5"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/rehan-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://fiverr.com/rehan_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors flex items-center gap-1.5"
            >
              <FiverrIcon size={14} />
              <span>Fiverr</span>
            </a>
            <a
              href="https://freelancer.com/u/rehandev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors flex items-center gap-1.5"
            >
              <FreelancerIcon size={14} />
              <span>Freelancer</span>
            </a>
          </div>

          <div className="text-center sm:text-right">
            &copy; {new Date().getFullYear()} Rehan &bull; Built with React &amp; Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
