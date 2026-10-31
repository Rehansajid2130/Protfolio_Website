import React, { useState, useEffect } from 'react';
import {
  MailIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  CopyIcon,
  CheckIcon,
  MessageSquareIcon,
  FiverrIcon,
  FreelancerIcon,
  GithubIcon,
  LinkedinIcon,
} from './Icons.tsx';
import { contactDetails } from '../data/socials.ts';

interface ContactProps {
  selectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'React web app',
    budget: '$500 - $1,500',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedService) {
      if (selectedService.includes('React web')) {
        setFormData((prev) => ({ ...prev, service: 'React web app' }));
      } else if (selectedService.includes('Landing')) {
        setFormData((prev) => ({ ...prev, service: 'Landing page' }));
      } else if (selectedService.includes('API')) {
        setFormData((prev) => ({ ...prev, service: 'API integration' }));
      } else if (selectedService.includes('Fixing') || selectedService.includes('clean')) {
        setFormData((prev) => ({ ...prev, service: 'Code fix' }));
      } else {
        setFormData((prev) => ({ ...prev, service: 'Other' }));
      }
    }
  }, [selectedService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in your name, email, and project details.');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols): Contact context & direct channels */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs uppercase tracking-wider text-sky-700 font-medium">
              06 / Contact
            </span>
            <h2 className="text-fluid-h2 font-display font-semibold text-ink tracking-tight">
              Let&apos;s talk about your project.
            </h2>
            <p className="text-base text-ink-soft leading-relaxed">
              Tell me what you want to build. I usually reply within 24 hours with ideas, scope, and availability.
            </p>

            <div className="pt-2 space-y-4">
              {/* Email Card */}
              <div className="p-4 rounded-md bg-paper border border-line">
                <div className="text-xs font-mono uppercase text-ink-soft mb-1">
                  Direct Email
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="font-mono text-sm md:text-base font-medium text-sky-700 hover:text-ink transition-colors"
                  >
                    {contactDetails.email}
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

              {/* Location & Timezone info */}
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3.5 rounded-sm bg-sky-50 border border-sky-100">
                  <span className="text-ink-soft block mb-0.5">Location</span>
                  <span className="font-medium text-ink">{contactDetails.location}</span>
                </div>
                <div className="p-3.5 rounded-sm bg-sky-50 border border-sky-100">
                  <span className="text-ink-soft block mb-0.5">Time Zone</span>
                  <span className="font-medium text-ink">{contactDetails.timezone}</span>
                </div>
              </div>

              {/* Direct Channels List per Section 12 */}
              <div className="pt-4 border-t border-line space-y-2.5">
                <span className="text-xs font-mono uppercase text-ink-soft block mb-2 font-medium">
                  Direct Channels &amp; Profiles
                </span>
                <div className="flex flex-wrap gap-2.5 text-xs font-mono">
                  <a
                    href={contactDetails.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-sm bg-paper border border-line text-ink hover:text-sky-700 hover:border-sky-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <MessageSquareIcon size={13} />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="https://fiverr.com/rehan_dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-sm bg-paper border border-line text-ink hover:text-sky-700 hover:border-sky-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <FiverrIcon size={13} />
                    <span>Fiverr</span>
                  </a>
                  <a
                    href="https://freelancer.com/u/rehandev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-sm bg-paper border border-line text-ink hover:text-sky-700 hover:border-sky-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <FreelancerIcon size={13} />
                    <span>Freelancer</span>
                  </a>
                  <a
                    href="https://github.com/rehan-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-sm bg-paper border border-line text-ink hover:text-sky-700 hover:border-sky-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <GithubIcon size={13} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/rehan-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-sm bg-paper border border-line text-ink hover:text-sky-700 hover:border-sky-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <LinkedinIcon size={13} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Full contact form per Section 12 */}
          <div className="lg:col-span-7 bg-paper rounded-md border border-line p-6 md:p-8 shadow-card">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircleIcon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-2xl text-ink">
                  Thanks. I got your message.
                </h3>
                <p className="text-sm text-ink-soft max-w-sm mx-auto">
                  I will review your inquiry and reply within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      service: 'React web app',
                      budget: '$500 - $1,500',
                      message: '',
                    });
                  }}
                  className="mt-4 px-4 py-2 rounded-sm border border-line text-xs font-mono text-ink hover:bg-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {error && (
                  <div
                    className="p-3.5 rounded-sm bg-red-50 border border-red-200 text-[#B42318] text-sm flex items-center gap-2"
                    role="alert"
                  >
                    <AlertCircleIcon size={16} className="shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase text-ink mb-1.5 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="e.g. Alex Henderson"
                      className="w-full px-4 py-3 bg-white border border-line rounded-sm text-sm text-ink placeholder:text-ink-soft/40 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-ink mb-1.5 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 bg-white border border-line rounded-sm text-sm text-ink placeholder:text-ink-soft/40 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-xs font-mono uppercase text-ink mb-1.5 font-medium">
                      What do you need? *
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-line rounded-sm text-sm text-ink focus:border-sky-500 focus:ring-4 focus:ring-sky-100 focus:outline-none transition-all"
                    >
                      <option value="React web app">React web app</option>
                      <option value="Landing page">Landing page</option>
                      <option value="API integration">API integration</option>
                      <option value="Code fix">Code fix</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs font-mono uppercase text-ink mb-1.5 font-medium">
                      Budget range (optional)
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-line rounded-sm text-sm text-ink focus:border-sky-500 focus:ring-4 focus:ring-sky-100 focus:outline-none transition-all"
                    >
                      <option value="Under $500">Under $500</option>
                      <option value="$500 - $1,500">$500 - $1,500</option>
                      <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                      <option value="$3,000+">$3,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-ink mb-1.5 font-medium">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Tell me about your project, timeline, and current requirements..."
                    className="w-full px-4 py-3 bg-white border border-line rounded-sm text-sm text-ink placeholder:text-ink-soft/40 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 focus:outline-none transition-all resize-y"
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
