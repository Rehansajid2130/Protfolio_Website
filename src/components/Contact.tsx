import React, { useState } from 'react';
import {
  MailIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  CopyIcon,
  CheckIcon,
} from './Icons.tsx';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const emailAddress = 'rehan.frontend@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields before sending.');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & direct channels */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs uppercase tracking-wider text-sky-700 font-medium">
              04 / Initiation
            </span>
            <h2 className="text-fluid-h2 font-display font-semibold text-ink tracking-tight">
              Let&apos;s build something fast and clean.
            </h2>
            <p className="text-base text-ink-soft leading-relaxed">
              Available for freelance engagements, frontend contract architecture, and advisory on web performance optimization.
            </p>

            <div className="pt-4 space-y-4">
              <div className="p-4 rounded-md bg-paper border border-line">
                <div className="text-xs font-mono uppercase text-ink-soft mb-1">
                  Direct Email
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="font-mono text-sm md:text-base font-medium text-sky-700 hover:text-ink transition-colors"
                  >
                    {emailAddress}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-sm hover:bg-sky-50 text-ink-soft hover:text-ink transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? <CheckIcon size={16} className="text-sky-700" /> : <CopyIcon size={16} />}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3.5 rounded-sm bg-sky-50 border border-sky-100">
                  <span className="text-ink-soft block mb-0.5">Response Time</span>
                  <span className="font-medium text-ink">&lt; 24 hours</span>
                </div>
                <div className="p-3.5 rounded-sm bg-sky-50 border border-sky-100">
                  <span className="text-ink-soft block mb-0.5">Working Model</span>
                  <span className="font-medium text-ink">Async / Global</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form per Style Guide Section 6 & 12 */}
          <div className="lg:col-span-7 bg-paper rounded-md border border-line p-6 md:p-8">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircleIcon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-2xl text-ink">Message received.</h3>
                <p className="text-sm text-ink-soft max-w-sm mx-auto">
                  Thank you for reaching out. I will review your requirements and respond within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="mt-4 px-4 py-2 rounded-sm border border-line text-xs font-mono text-ink hover:bg-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Error Banner per Style Guide Section 6: dark red (#B42318) with an icon, not orange */}
                {error && (
                  <div
                    className="p-3.5 rounded-sm bg-red-50 border border-red-200 text-[#B42318] text-sm flex items-center gap-2"
                    role="alert"
                  >
                    <AlertCircleIcon size={16} className="shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase text-ink mb-1.5 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="e.g. Alex Henderson"
                    className="w-full px-4 py-3.5 bg-white border border-line rounded-sm text-sm text-ink placeholder:text-ink-soft/40 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-ink mb-1.5 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3.5 bg-white border border-line rounded-sm text-sm text-ink placeholder:text-ink-soft/40 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-ink mb-1.5 font-medium">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Brief description of the application, timeline, and current bottlenecks..."
                    className="w-full px-4 py-3.5 bg-white border border-line rounded-sm text-sm text-ink placeholder:text-ink-soft/40 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 focus:outline-none transition-all resize-y"
                  />
                </div>

                {/* Primary CTA button with --orange-500 and --ink text per style guide */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-accent-500 text-ink font-medium text-sm md:text-base hover:bg-accent-600 hover:-translate-y-px transition-all duration-150 shadow-sm focus-visible:ring-3 focus-visible:ring-sky-500"
                >
                  <MailIcon size={16} strokeWidth={1.5} />
                  <span>Send message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
