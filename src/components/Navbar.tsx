import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About Me', href: '#bio-section' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* 
        Native Dynamic Island Container:
        Fixed-radius container with GPU isolation.
        Expands strictly downward without corner distortion.
      */}
      <div
        ref={navRef}
        className="pointer-events-auto bg-[#111111] text-[#FAF7F3] rounded-[26px] px-4 py-2.5 shadow-2xl border border-white/10 select-none overflow-hidden w-[330px] sm:w-[360px]"
        style={{
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5)',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      >
        {/* Top Header Row (Static 36px) */}
        <div className="flex items-center justify-between h-[36px] px-1">
          {/* Logo */}
          <a
            href="#hero-section"
            onClick={() => setIsOpen(false)}
            className="font-display font-bold text-xl sm:text-2xl text-[#FAF7F3] tracking-tight hover:opacity-90 transition-opacity"
          >
            Rehan
          </a>

          {/* Toggle Button: 3 Dots morphing into Cross */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 rounded-xl bg-[#FAF7F3] text-[#111111] flex items-center justify-center cursor-pointer transition-transform duration-150 active:scale-95 focus:outline-none"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait">
              {!isOpen ? (
                // 3 Horizontal Dots
                <motion.div
                  key="dots"
                  initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                  transition={{ duration: 0.16, ease: 'easeOut' }}
                  className="flex items-center justify-center gap-[3px]"
                >
                  <span className="w-1 h-1 rounded-full bg-[#111111]" />
                  <span className="w-1 h-1 rounded-full bg-[#111111]" />
                  <span className="w-1 h-1 rounded-full bg-[#111111]" />
                </motion.div>
              ) : (
                // Cross (✕)
                <motion.div
                  key="cross"
                  initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
                  transition={{ duration: 0.16, ease: 'easeOut' }}
                  className="relative w-3.5 h-3.5 flex items-center justify-center"
                >
                  <span className="absolute w-3.5 h-[1.8px] bg-[#111111] rounded-full rotate-45" />
                  <span className="absolute w-3.5 h-[1.8px] bg-[#111111] rounded-full -rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Expandable Menu Area */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="menu-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: 'auto',
                opacity: 1,
                transition: {
                  height: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.18, delay: 0.05 },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.12 },
                },
              }}
              className="overflow-hidden"
            >
              <div className="pt-3.5 pb-1 flex flex-col items-start gap-2.5 px-0.5">
                {navItems.map((item, idx) => (
                  <motion.button
                    key={item.label}
                    type="button"
                    onClick={() => handleLinkClick(item.href)}
                    initial={{ x: -28, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.25,
                        delay: 0.05 + idx * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                    exit={{
                      x: -20,
                      opacity: 0,
                      transition: { duration: 0.12 },
                    }}
                    whileHover={{
                      scale: 1.03,
                      x: 3,
                      transition: { duration: 0.12 },
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="w-fit px-4 py-2 rounded-xl bg-[#FAF7F3] text-[#111111] font-display font-medium text-sm tracking-tight text-left shadow-sm hover:bg-white transition-colors"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

