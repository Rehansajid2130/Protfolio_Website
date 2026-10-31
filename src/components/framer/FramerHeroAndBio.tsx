import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRightIcon } from '../Icons.tsx';
import { RollingText } from '../ui/RollingText.tsx';

export const FramerHeroAndBio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // 3D card rotation & flip as you scroll through the 200vh section
  const avatarRotateY = useTransform(scrollYProgress, [0.1, 0.65], [0, 180]);
  const avatarScale = useTransform(scrollYProgress, [0.1, 0.65], [1, 0.88]);
  const avatarY = useTransform(scrollYProgress, [0.1, 0.65], [0, 40]);

  return (
    <div
      ref={containerRef}
      id="hero-section"
      className="relative min-h-[200vh] bg-[#FAF7F3] text-[#111111]"
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        {/* Sticky Avatar Column (5 cols on Desktop) */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-0 lg:h-screen flex items-center lg:items-end justify-center lg:justify-start pb-12 lg:pb-24 pt-32 lg:pt-0">
            <div
              className="relative w-[280px] sm:w-[320px] md:w-[360px] aspect-[3/4] select-none"
              style={{ perspective: 1200 }}
            >
              {/* Animated 3D Card that flips from Front to Back face on scroll */}
              <motion.div
                className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl border border-[#111111]/10 bg-white"
                style={{
                  rotateY: avatarRotateY,
                  scale: avatarScale,
                  y: avatarY,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Front Face: Portrait */}
                <div
                  className="absolute inset-0 w-full h-full bg-[#EAE5DE] overflow-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img
                    src="https://framerusercontent.com/images/haSjyjpt7FyCjJUBvXtmzCMSEQg.png?width=800&height=1072"
                    alt="Portrait"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md rounded-xl p-3 border border-black/5 flex items-center justify-between">
                    <div>
                      <div className="font-display font-bold text-xs uppercase text-[#111111]">
                        Rehan
                      </div>
                      <div className="font-mono text-[10px] text-[#111111]/60 uppercase">
                        Lahore, PK &bull; UTC+5
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                </div>

                {/* Back Face: Clean Card Info */}
                <div
                  className="absolute inset-0 w-full h-full bg-[#111111] text-[#FAF7F3] p-8 flex flex-col justify-between"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-[#0099FF] mb-2">
                      / Credentials
                    </div>
                    <h3 className="font-display font-bold text-2xl">
                      Software Engineer
                    </h3>
                    <p className="text-xs font-mono text-white/60 mt-1">
                      University of Central Punjab (2025)
                    </p>
                  </div>

                  <div className="space-y-2 text-xs font-mono text-white/70">
                    <div className="flex justify-between border-b border-white/10 pb-1.5">
                      <span>Experience</span>
                      <span className="text-white font-medium">5+ Years</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-1.5">
                      <span>Stack</span>
                      <span className="text-white font-medium">React, TS, MERN</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-1.5">
                      <span>Availability</span>
                      <span className="text-emerald-400 font-medium">Immediate</span>
                    </div>
                  </div>

                  <div className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                    Scroll down for bio &amp; projects &rarr;
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scrolling Right Column (7 cols): Hero Viewport 1, then Bio Viewport 2 */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Part 1: Hero Viewport (100vh) */}
          <div className="min-h-[85vh] lg:min-h-screen flex flex-col justify-center relative py-20 lg:py-0">
            {/* Floating 3D Chrome Holographic Triangle 1 */}
            <motion.div
              className="absolute -top-6 right-0 w-28 sm:w-36 md:w-44 aspect-square pointer-events-none select-none z-10"
              animate={{
                y: [0, -14, 0],
                rotate: [0, 6, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img
                src="https://framerusercontent.com/images/lIIjRX5gxRdY7UWw5wqIXicPOA.png?scale-down-to=1024&width=2550&height=2550"
                alt="3D Holographic Object"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Floating 3D Chrome Holographic Triangle 2 */}
            <motion.div
              className="absolute bottom-10 right-16 w-20 sm:w-28 aspect-square pointer-events-none select-none z-10 hidden sm:block"
              animate={{
                y: [0, 12, 0],
                rotate: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img
                src="https://framerusercontent.com/images/OLDYsHB9RMavvQrkVRNy08ZXYE.png?scale-down-to=1024&width=2550&height=2550"
                alt="3D Holographic Shape"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </motion.div>

            {/* Big Headline from Reference */}
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/50 block">
                / CREATING SINCE 2020
              </span>

              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.95] text-[#111111] uppercase">
                <motion.span
                  className="block"
                  initial={{ opacity: 0.001, y: 15, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Software
                </motion.span>
                <motion.span
                  className="block"
                  initial={{ opacity: 0.001, y: 15, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                >
                  Engineer
                </motion.span>
              </h1>
            </div>

            <div className="mt-12 flex items-center gap-2 font-mono text-xs uppercase text-[#111111]/50">
              <span className="inline-block animate-bounce">&darr;</span>
              <span>Scroll down to explore</span>
            </div>
          </div>

          {/* Part 2: Bio Viewport (100vh) */}
          <div id="bio-section" className="min-h-[85vh] lg:min-h-screen flex flex-col justify-center py-20 lg:py-0 border-t lg:border-t-0 border-[#111111]/10">
            <div className="space-y-6 max-w-xl">
              <div className="font-display font-black text-4xl sm:text-5xl text-[#111111]">
                Hey!
              </div>

              <div className="space-y-4 text-base sm:text-lg text-[#111111]/80 leading-relaxed font-sans">
                <p>
                  I’m <strong className="text-[#111111] font-semibold">Rehan</strong>, a software engineer and builder based in Lahore, currently building high-quality, production-ready web platforms and design systems.
                </p>
                <p>
                  I have a strong focus on building modern, scalable, and conversion-driven web experiences that feel effortless, load instantly, and behave reliably.
                </p>
                <p>
                  Over the years, I’ve created and shipped full-stack SaaS applications, custom client products, and interactive interfaces used by global clients to launch and scale faster.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#111111] text-[#FAF7F3] hover:bg-[#0099FF] transition-colors duration-200 text-xs font-mono uppercase tracking-wider font-semibold"
                >
                  <RollingText text="Get Started" className="text-white" />
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:rotate-45">
                    <ArrowUpRightIcon size={12} className="text-white" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

