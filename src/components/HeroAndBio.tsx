import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRightIcon } from './Icons.tsx';
import { RollingText } from './ui/RollingText.tsx';

export const HeroAndBio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Hero section fade and slide out on scroll
  const heroOpacity = useTransform(scrollYProgress, [0.05, 0.35], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0.05, 0.35], [0, -40]);

  // Avatar 3D card scroll-linked animation
  // In Hero (0 -> 0.12): centered at bottom, front face visible, scale: 1
  // Flipping & scaling (0.12 -> 0.6): flips 180deg to back face, scales down, slides into center gap of Bio
  const avatarRotateY = useTransform(scrollYProgress, [0.12, 0.6], [0, 180]);
  const avatarScale = useTransform(scrollYProgress, [0.12, 0.6], [1, 0.76]);
  const avatarY = useTransform(scrollYProgress, [0.12, 0.6], [0, 40]);

  // Bio section fade and slide in on scroll
  const bioOpacity = useTransform(scrollYProgress, [0.35, 0.65], [0, 1]);
  const bioY = useTransform(scrollYProgress, [0.35, 0.65], [40, 0]);

  return (
    <div
      ref={containerRef}
      id="hero-section"
      className="relative min-h-[200vh] bg-[#FAF7F3] text-[#111111] overflow-clip"
    >
      {/* 
        Sticky Avatar Layer:
        Anchored horizontally in the center.
        In the Hero section (scroll = 0), it sits at the bottom center of the viewport,
        reaching upward so the word 'ENGINEER' is stamped directly over the upper half of the portrait card.
      */}
      <div className="sticky top-0 h-screen w-full flex items-end justify-center pb-6 sm:pb-8 md:pb-10 pointer-events-none z-10">
        <div
          className="pointer-events-auto relative select-none w-[260px] sm:w-[320px] md:w-[360px] lg:w-[390px] aspect-[3/4]"
          style={{ perspective: 1200 }}
        >
          <motion.div
            className="w-full h-full relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-black/10 bg-[#111111]"
            style={{
              rotateY: avatarRotateY,
              scale: avatarScale,
              y: avatarY,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Front Face: Red Backlit Portrait */}
            <div
              className="absolute inset-0 w-full h-full bg-[#111111] overflow-hidden"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <img
                src="/images/portrait.png"
                alt="Portrait of Rehan"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/85 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border border-black/5 flex items-center justify-between shadow-sm">
                <div>
                  <div className="font-display font-bold text-xs uppercase text-[#111111]">
                    Rehan
                  </div>
                  <div className="font-mono text-[10px] text-[#111111]/70 uppercase tracking-wide">
                    Lahore, PK &bull; UTC+5
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
            </div>

            {/* Back Face: Clean Credentials Card */}
            <div
              className="absolute inset-0 w-full h-full bg-[#111111] text-[#FAF7F3] p-6 sm:p-8 flex flex-col justify-between"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#0099FF] mb-2">
                  / Credentials
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  Software Engineer
                </h3>
                <p className="text-xs font-mono text-white/60 mt-1">
                  Lahore, PK &bull; Available Worldwide
                </p>
              </div>

              <div className="space-y-2.5 text-xs font-mono text-white/70">
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>Experience</span>
                  <span className="text-white font-medium">5+ Years</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>Stack</span>
                  <span className="text-white font-medium">React, TS, Node</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>Focus</span>
                  <span className="text-white font-medium">Full-Stack &amp; Web</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>Availability</span>
                  <span className="text-emerald-400 font-medium">Immediate</span>
                </div>
              </div>

              <div className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                Crafting digital experiences &rarr;
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 
        Stage 1: Hero Viewport (100vh)
        Features the giant centered "SOFTWARE ENGINEER" headline with the image layered behind it.
      */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="absolute top-0 left-0 right-0 h-screen w-full flex flex-col justify-between px-6 sm:px-12 md:px-16 pt-24 pb-6 sm:pb-8 md:pb-10 z-20 pointer-events-none"
      >
        {/* Spacer top */}
        <div className="h-4" />

        {/* Centered Massive Headline with Floating 3D Elements */}
        <div className="relative my-auto flex flex-col items-center justify-center text-center w-full max-w-[1440px] mx-auto">
          {/* Floating 3D Glossy Star (Top-Left of SOFTWARE) */}
          <motion.div
            className="absolute -top-6 sm:-top-10 md:-top-14 left-2 sm:left-6 md:left-12 lg:left-20 xl:left-28 w-14 sm:w-20 md:w-28 lg:w-36 aspect-square pointer-events-none select-none z-30"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 6, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <img
              src="/images/star-3d.png"
              alt="3D Star"
              className="w-full h-full object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Floating 3D Glossy Lightning Bolt (Bottom-Right of ENGINEER) */}
          <motion.div
            className="absolute -bottom-4 sm:-bottom-8 md:-bottom-10 right-2 sm:right-6 md:right-12 lg:right-20 xl:right-28 w-12 sm:w-16 md:w-24 lg:w-32 aspect-square pointer-events-none select-none z-30"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <img
              src="/images/lightning-3d.png"
              alt="3D Lightning"
              className="w-full h-full object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Massive Two-Line Centered Heading */}
          <h1 className="font-display font-black text-[13.5vw] sm:text-[13vw] md:text-[12vw] lg:text-[10rem] xl:text-[11.8rem] 2xl:text-[13.5rem] tracking-tight leading-[0.84] text-[#111111] uppercase select-none text-center">
            <span className="block">SOFTWARE</span>
            <span className="block">ENGINEER</span>
          </h1>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="w-full max-w-[1440px] mx-auto flex items-end justify-between pointer-events-auto">
          <div className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#111111] tracking-tight">
            &copy;2026
          </div>
          <div className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#111111]/80 font-medium">
            /CREATING SINCE 2020
          </div>
        </div>
      </motion.div>

      {/* 
        Stage 2: Bio Viewport (Second 100vh)
        Reveals the Hey! introduction and Get Started CTA alongside the flipped card.
      */}
      <div
        id="bio-section"
        className="relative min-h-screen w-full flex items-center justify-center px-6 sm:px-12 md:px-16 py-24 z-20"
      >
        <motion.div
          style={{ opacity: bioOpacity, y: bioY }}
          className="w-full max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column: Title & Hook */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight">
              Hey!
            </h2>
            <p className="font-display font-medium text-lg sm:text-xl text-[#111111] leading-relaxed">
              I’m <strong className="font-bold">Rehan</strong>, a software engineer and builder based in Lahore, building high-quality, production-ready web platforms and interactive design systems.
            </p>
          </div>

          {/* Spacer Column for the Sticky Card in the Center on Desktop */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Right Column: Paragraphs & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-[#111111]/80 leading-relaxed font-sans">
              <p>
                I have a strong focus on building modern, scalable, and conversion-driven web experiences that feel effortless, load instantly, and behave reliably.
              </p>
              <p>
                Over the years, I’ve created and shipped full-stack SaaS applications, custom client products, and performant web interfaces used by global clients to launch and scale faster.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#111111] text-[#FAF7F3] hover:bg-[#0099FF] transition-colors duration-200 text-xs font-mono uppercase tracking-wider font-semibold"
              >
                <RollingText text="Get Started" className="text-white" />
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowUpRightIcon size={12} className="text-white" />
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

