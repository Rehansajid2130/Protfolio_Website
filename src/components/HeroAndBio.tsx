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
  const avatarScale = useTransform(scrollYProgress, [0.12, 0.6], [1, 0.78]);
  const avatarY = useTransform(scrollYProgress, [0.12, 0.6], [0, 40]);

  // Bio section fade and slide in on scroll
  const bioOpacity = useTransform(scrollYProgress, [0.35, 0.65], [0, 1]);
  const bioY = useTransform(scrollYProgress, [0.35, 0.65], [40, 0]);

  return (
    <div
      ref={containerRef}
      id="hero-section"
      className="relative min-h-[200vh] bg-[#f9f6f2] text-[#111111] overflow-clip"
    >
      {/* 
        Sticky Avatar Layer:
        Anchored horizontally in the center.
        Shorter, refined proportions to fit cleanly below the centered title.
      */}
      <div className="sticky top-0 h-screen w-full flex items-end justify-center pb-8 sm:pb-10 md:pb-12 pointer-events-none z-10">
        <div
          className="pointer-events-auto relative select-none w-[220px] sm:w-[270px] md:w-[310px] lg:w-[330px] h-[290px] sm:h-[350px] md:h-[390px] lg:h-[415px]"
          style={{ perspective: 1200 }}
        >
          <motion.div
            className="w-full h-full relative rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-xl border border-black/10 bg-[#111111]"
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
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 bg-white/85 backdrop-blur-md rounded-xl p-2 sm:p-2.5 border border-black/5 flex items-center justify-between shadow-sm">
                <div>
                  <div className="font-display font-bold text-[11px] sm:text-xs uppercase text-[#111111]">
                    Rehan
                  </div>
                  <div className="font-mono text-[9px] sm:text-[10px] text-[#111111]/70 uppercase tracking-wide">
                    Lahore, PK &bull; UTC+5
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
            </div>

            {/* Back Face: Clean Credentials Card */}
            <div
              className="absolute inset-0 w-full h-full bg-[#111111] text-[#FAF7F3] p-5 sm:p-7 flex flex-col justify-between"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              <div>
                <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#0099FF] mb-1.5">
                  / Credentials
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  Software Engineer
                </h3>
                <p className="text-[11px] sm:text-xs font-mono text-white/60 mt-0.5">
                  Lahore, PK &bull; Available Worldwide
                </p>
              </div>

              <div className="space-y-2 text-[11px] sm:text-xs font-mono text-white/70">
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>Experience</span>
                  <span className="text-white font-medium">5+ Years</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>Stack</span>
                  <span className="text-white font-medium">React, TS, Node</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>Focus</span>
                  <span className="text-white font-medium">Full-Stack &amp; Web</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>Availability</span>
                  <span className="text-emerald-400 font-medium">Immediate</span>
                </div>
              </div>

              <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-white/40">
                Crafting digital experiences &rarr;
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 
        Stage 1: Hero Viewport (100vh)
        Centered within the 1180px content area of the 1280px canvas.
      */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="absolute top-0 left-0 right-0 h-screen w-full flex flex-col justify-between pt-24 pb-6 sm:pb-8 md:pb-10 z-20 pointer-events-none"
      >
        {/* Spacer top */}
        <div className="h-4" />

        {/* Centered Headline with Floating 3D Elements */}
        <div className="relative my-auto flex flex-col items-center justify-center text-center w-full max-w-[1180px] mx-auto px-4 sm:px-8">
          {/* Floating 3D Glossy Star (Top-Left of SOFTWARE) */}
          <motion.div
            className="absolute -top-4 sm:-top-7 md:-top-9 left-2 sm:left-6 md:left-12 lg:left-16 w-12 sm:w-16 md:w-22 lg:w-26 aspect-square pointer-events-none select-none z-30"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 5, 0],
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
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Floating 3D Glossy Lightning Bolt (Bottom-Right of ENGINEER) */}
          <motion.div
            className="absolute -bottom-3 sm:-bottom-5 md:-bottom-7 right-2 sm:right-6 md:right-12 lg:right-16 w-10 sm:w-14 md:w-18 lg:w-22 aspect-square pointer-events-none select-none z-30"
            animate={{
              y: [0, 8, 0],
              rotate: [0, -5, 0],
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
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Refined, Slightly Smaller Two-Line Centered Heading */}
          <h1 className="font-display font-black text-[11vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[6.8rem] xl:text-[8rem] 2xl:text-[8.8rem] tracking-tight leading-[0.88] text-[#111111] uppercase select-none text-center">
            <span className="block">SOFTWARE</span>
            <span className="block">ENGINEER</span>
          </h1>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="w-full max-w-[1180px] mx-auto px-6 sm:px-10 flex items-end justify-between pointer-events-auto">
          <div className="font-display font-bold text-3xl sm:text-4xl md:text-[58px] leading-none tracking-[-1.44px] text-[#111111]">
            &copy;2026
          </div>
          <div className="type-caption uppercase tracking-widest text-[#111111]/80">
            /CREATING SINCE 2020
          </div>
        </div>
      </motion.div>

      {/* 
        Stage 2: Bio Viewport (Second 100vh)
        Aligned inside the 1180px container.
      */}
      <div
        id="bio-section"
        className="relative min-h-screen w-full flex items-center justify-center py-24 z-20"
      >
        <motion.div
          style={{ opacity: bioOpacity, y: bioY }}
          className="w-full max-w-[1180px] mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column: Title & Hook */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-display font-semibold text-4xl sm:text-5xl md:text-[68px] leading-tight md:leading-none tracking-[-1.36px] text-[#111111]">
              Hey!
            </h2>
            <p className="type-body-22 text-lg sm:text-xl leading-[1.40] tracking-[-0.88px] text-[#111111]">
              I’m <strong className="font-bold">Rehan</strong>, a software engineer and builder based in Lahore, building high-quality, production-ready web platforms and interactive design systems.
            </p>
          </div>

          {/* Spacer Column for the Sticky Card in the Center on Desktop */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Right Column: Paragraphs & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4 type-body-16-400 text-sm sm:text-base leading-[1.40] tracking-[-0.64px] text-[#111111]/80 font-sans">
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
