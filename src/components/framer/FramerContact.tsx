import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, CheckCircleIcon } from '../Icons.tsx';
import { RollingText } from '../ui/RollingText.tsx';

export const FramerContact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.project) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#FAF7F3] border-t border-[#111111]/10 text-[#111111]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols): Statement */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/50 block">
              / Get In Touch
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#111111] leading-none">
              Let’s talk.
            </h2>
            <p className="text-base md:text-lg text-[#111111]/70 leading-relaxed font-sans max-w-md">
              Have a project or need help? Fill out the form, and I’ll get back to you soon with
              timelines and architecture suggestions.
            </p>

            <div className="pt-6 border-t border-[#111111]/10 space-y-2 font-mono text-xs uppercase text-[#111111]/60">
              <div>RESPONSE WINDOW: &lt; 24 HOURS</div>
              <div>DIRECT EMAIL: REHAN.FRONTEND@GMAIL.COM</div>
              <div>LOCATION: LAHORE, PAKISTAN (UTC+5)</div>
            </div>
          </div>

          {/* Right Column (7 cols): Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl border border-[#111111]/10 shadow-sm">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircleIcon size={32} />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#111111]">
                  Message received.
                </h3>
                <p className="text-sm text-[#111111]/60 max-w-sm mx-auto">
                  Thank you for reaching out. I will review your requirements and follow up within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', project: '' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full border border-[#111111]/20 text-xs font-mono uppercase tracking-wider text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#111111]/60 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-5 py-4 bg-[#FAF7F3] border border-[#111111]/10 rounded-xl text-sm text-[#111111] placeholder:text-[#111111]/30 focus:border-[#111111] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#111111]/60 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-5 py-4 bg-[#FAF7F3] border border-[#111111]/10 rounded-xl text-sm text-[#111111] placeholder:text-[#111111]/30 focus:border-[#111111] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-xs font-mono uppercase tracking-wider text-[#111111]/60 mb-2">
                    Your Project
                  </label>
                  <textarea
                    id="project"
                    rows={4}
                    required
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    placeholder="Tell me about your product, desired timeline, or goals..."
                    className="w-full px-5 py-4 bg-[#FAF7F3] border border-[#111111]/10 rounded-xl text-sm text-[#111111] placeholder:text-[#111111]/30 focus:border-[#111111] focus:outline-none transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#111111] text-[#FAF7F3] hover:bg-[#0099FF] transition-colors duration-200 text-xs font-mono uppercase tracking-wider font-medium"
                >
                  <RollingText text="Submit" className="text-white" />
                  <ArrowUpRightIcon
                    size={14}
                    className="text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

