import React from 'react';
import { ArrowUpIcon, GithubIcon, LinkedinIcon, TwitterIcon } from './Icons.tsx';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-paper border-t border-line py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-line">
          <div className="space-y-4 max-w-xl">
            <span className="font-mono text-xs uppercase text-ink-soft tracking-wider">
              Closing Thought
            </span>
            <p className="font-display font-medium text-2xl md:text-3xl text-ink leading-snug">
              Good frontend engineering is invisible. People only notice it when it breaks or lags.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="self-start md:self-end inline-flex items-center gap-2 text-xs font-mono text-sky-700 hover:text-ink transition-colors p-2 rounded-sm focus-visible:ring-2"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUpIcon size={14} />
          </button>
        </div>

        {/* Bottom row: socials and copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-soft">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors flex items-center gap-1.5"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors flex items-center gap-1.5"
            >
              <TwitterIcon size={14} />
              <span>X (Twitter)</span>
            </a>
          </div>

          <div>
            &copy; {new Date().getFullYear()} Rehan. Handcrafted with React &amp; Tailwind.
          </div>
        </div>
      </div>
    </footer>
  );
};
