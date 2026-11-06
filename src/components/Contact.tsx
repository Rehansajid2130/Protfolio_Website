import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, GithubIcon, LinkedinIcon } from './Icons.tsx';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.project) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-32 bg-[#f9f6f2] text-[#111111]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-stretch">
          {/* Left Column: Heading + Subtitle at top, Social icons at bottom */}
          <div className="lg:col-span-6 flex flex-col justify-between py-1">
            <div className="space-y-4">
              <h2 className="font-display font-bold text-5xl sm:text-6xl md:text-[68px] lg:text-[72px] leading-[1.0] tracking-[-1.44px] text-[#111111]">
                Let’s talk.
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#111111]/75 leading-relaxed max-w-md">
                Have a project or need help? Fill out the form, and we&apos;ll get back to you soon.
              </p>
            </div>

            {/* Bottom Social Media Icon Buttons */}
            <div className="pt-10 lg:pt-0 flex items-center gap-3">
              <a
                href="https://github.com/Rehansajid2130"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-[10px] bg-[#E2DCD3] text-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-[#FAF7F3] active:scale-95 transition-all duration-200"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/rehan-sajid-499b94317"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-[10px] bg-[#E2DCD3] text-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-[#FAF7F3] active:scale-95 transition-all duration-200"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Dark Black Contact Card with Subtle Noise matching screenshot */}
          <div className="lg:col-span-5 bg-[#141414] text-[#FAF7F3] p-6 sm:p-4 rounded-[20px] border border-white/[0.08] shadow-2xl relative overflow-hidden flex flex-col justify-center">
            {/* Subtle Film Grain Noise Texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-screen bg-repeat z-0"
              style={{ backgroundImage: `url('/images/noise.png')` }}
            />

            <div className="relative z-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                    <CheckCircleIcon size={32} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Message received.
                  </h3>
                  <p className="text-sm text-white/70 max-w-sm mx-auto">
                    Thank you for reaching out. I will review your requirements and follow up within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', project: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl border border-white/20 text-xs font-mono uppercase tracking-wider text-white hover:bg-white hover:text-[#111111] transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-sans font-medium text-[#FAF7F3] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="contact-input w-full px-4 py-3 bg-transparent border rounded-xl text-sm placeholder:text-[#FAF7F3]/50 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-sans font-medium text-[#FAF7F3] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="contact-input w-full px-4 py-3 bg-transparent border rounded-xl text-sm placeholder:text-[#FAF7F3]/50 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="project" className="block text-sm font-sans font-medium text-[#FAF7F3] mb-2">
                      Your Project
                    </label>
                    <textarea
                      id="project"
                      rows={4}
                      required
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      placeholder="Tell us about your project"
                      className="contact-input w-full px-4 py-3 bg-transparent border rounded-xl text-sm placeholder:text-[#FAF7F3]/50 outline-none transition-colors resize-none min-h-[130px]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="rounded-xl bg-[#FAF7F3] text-[#111111] font-display font-semibold text-sm hover:bg-white active:scale-[0.99] transition-all cursor-pointer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        padding: '8px 16px',
                        boxSizing: 'border-box',
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
