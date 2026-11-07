import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useAnimationFrame, useMotionValue } from 'framer-motion';
import { ArrowUpRightIcon } from './Icons.tsx';
import { RollingText } from './ui/RollingText.tsx';

interface BioContentProps {
  isWhite?: boolean;
  spacerRef?: React.RefObject<HTMLDivElement | null>;
}

const BioContent: React.FC<BioContentProps> = ({ isWhite, spacerRef }) => (
  <div className={`grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 xl:gap-14 items-center justify-items-center ${isWhite ? 'text-white' : 'text-[#111111]'}`}>
    {/* Left Column Box: 'Hey!' at top, intro paragraph at bottom */}
    <div className="w-full max-w-[360px] h-auto lg:h-[470px] flex flex-col justify-between py-1 space-y-8 lg:space-y-0">
      <div>
        <h2 className={`font-display font-black text-6xl sm:text-7xl lg:text-[84px] leading-none tracking-[-2px] ${isWhite ? 'text-white' : 'text-[#111111]'}`}>
          Hey!
        </h2>
      </div>
      <div>
        <p className={`text-base sm:text-lg lg:text-[18px] leading-[1.42] tracking-[-0.4px] font-medium ${isWhite ? 'text-white' : 'text-[#111111]'}`}>
          I’m <strong className={`font-bold ${isWhite ? 'text-white' : 'text-[#111111]'}`}>Rehan</strong>, a software engineer and builder based in Lahore, currently building high quality web platforms and interactive systems.
        </p>
      </div>
    </div>

    {/* Center Spacer Column (reserves exact space for the portrait card) */}
    <div
      ref={!isWhite ? spacerRef : undefined}
      className="w-[250px] sm:w-[290px] md:w-[330px] lg:w-[360px] h-[330px] sm:h-[380px] md:h-[430px] lg:h-[470px] flex-shrink-0 pointer-events-none"
    />

    {/* Right Column Box: Details at top, action buttons at bottom */}
    <div className="w-full max-w-[380px] h-auto lg:h-[470px] flex flex-col justify-between py-1 space-y-6 lg:space-y-0">
      <div className="space-y-4 lg:space-y-5">
        <p className={`text-sm sm:text-base lg:text-[16px] leading-[1.5] tracking-[-0.3px] font-normal ${isWhite ? 'text-white/90' : 'text-[#111111]/85'}`}>
          I’m a software engineer with a strong focus on building modern, scalable, and conversion driven web experiences.
        </p>
        <p className={`text-sm sm:text-base lg:text-[16px] leading-[1.5] tracking-[-0.3px] font-normal ${isWhite ? 'text-white/90' : 'text-[#111111]/85'}`}>
          Over the years, I’ve created and shipped multiple SaaS products and custom web platforms used by global customers, helping them launch faster.
        </p>
      </div>

      <div className="pt-2 flex items-center gap-3">
        <a
          href="#contact"
          tabIndex={isWhite ? -1 : 0}
          className={`group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border transition-all duration-200 shadow-sm ${
            isWhite
              ? 'border-white/30 bg-white/20 text-white'
              : 'border-black/15 bg-white/60 hover:bg-white text-[#111111]'
          }`}
        >
          <RollingText text="Get Started" className={isWhite ? 'text-white' : 'text-[#111111]'} />
          <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
            isWhite ? 'bg-white/20' : 'bg-black/5 group-hover:bg-black/10'
          }`}>
            <ArrowUpRightIcon size={11} className={isWhite ? 'text-white' : 'text-[#111111]'} />
          </div>
        </a>
      </div>
    </div>
  </div>
);

export const HeroAndBio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const bioOverlayRef = useRef<HTMLDivElement>(null);
  const heroHeadingRef = useRef<HTMLDivElement>(null);
  const heroOverlayRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Desktop transforms (untouched)
  const desktopHeroOpacity = useTransform(scrollYProgress, [0.04, 0.20], [1, 0]);
  const desktopHeroY = useTransform(scrollYProgress, [0.04, 0.20], [0, -50]);
  const desktopAvatarZIndex = useTransform(scrollYProgress, [0, 0.03, 0.05], [10, 10, 25]);
  const desktopAvatarScale = useTransform(
    scrollYProgress,
    [0, 0.12, 0.30],
    [0.72, 1.04, 1.0]
  );
  const desktopAvatarY = useTransform(
    scrollYProgress,
    [0, 0.10, 0.30],
    [215, 235, 0]
  );

  // Mobile transforms:
  // 1. In Hero (0 -> 0.14): card starts at Y=95px, slides smoothly UP behind SOFTWARE ENGINEER (-110px).
  // 2. Transition into Bio (0.14 -> 0.35): card glides into the open spacer position (-20px).
  // 3. Scrolling through Bio (0.35 -> 1.0): card moves UP in smooth continuous lockstep with the open space
  //    as the user scrolls (-20px -> -340px), staying inside the open space without jumping or blocking text!
  const mobileHeroOpacity = useTransform(scrollYProgress, [0.16, 0.26], [1, 0]);
  const mobileHeroY = useTransform(scrollYProgress, [0.16, 0.26], [0, -30]);
  const mobileAvatarScale = useTransform(
    scrollYProgress,
    [0, 0.16, 0.30],
    [0.85, 1.0, 1.0]
  );
  const mobileY = useMotionValue(95);

  // Active transforms based on screen size
  const activeHeroOpacity = isMobile ? mobileHeroOpacity : desktopHeroOpacity;
  const activeHeroY = isMobile ? mobileHeroY : desktopHeroY;
  const activeAvatarScale = isMobile ? mobileAvatarScale : desktopAvatarScale;
  const activeAvatarY = isMobile ? mobileY : desktopAvatarY;

  // Theme Grayscale: Starts 100% black & white (1), smoothly returns full color (0) as you scroll
  const grayscaleValue = useTransform(scrollYProgress, [0.05, 0.22], [1, 0]);
  const themeFilter = useMotionTemplate`grayscale(${grayscaleValue})`;

  // Bio section fade and slide in on scroll
  const bioOpacity = useTransform(scrollYProgress, [0.14, 0.30], [0, 1]);
  const bioY = useTransform(scrollYProgress, [0.14, 0.30], [30, 0]);

  // Real-time 60fps/120fps synchronization on every single render frame:
  // 1. Smoothly animates the mobile card as scrolling happens, landing squarely in the open space.
  // 2. Updates the white-text overlay clipPath so letters seamlessly invert as you scroll.
  useAnimationFrame(() => {
    // 1. Mobile card smooth continuous scroll into the open space:
    if (isMobile) {
      const progress = scrollYProgress.get();
      if (progress <= 0.15) {
        // Hero slide up behind SOFTWARE ENGINEER as user scrolls
        const t = progress / 0.15;
        mobileY.set(95 - 205 * t); // smoothly glides from 95 to -110
      } else if (spacerRef.current) {
        const spacerRect = spacerRef.current.getBoundingClientRect();
        // Exact target Y to center the card in the open space
        const targetY = (spacerRect.top + spacerRect.height / 2) - (window.innerHeight / 2);

        if (progress < 0.65) {
          // Smooth, gradual transition across the entire Bio scroll (0.15 -> 0.65)
          // Moves continuously with the scroll rather than jumping directly to the end
          const t = (progress - 0.15) / 0.50;
          const heroEndY = -110;
          mobileY.set(heroEndY * (1 - t) + targetY * t);
        } else {
          // Perfectly locked inside the open space
          mobileY.set(targetY);
        }
      }
    }

    // 2. Real-time clip-path calculation for overlapping text:
    if (!cardRef.current) return;
    const cardRect = cardRef.current.getBoundingClientRect();

    // If card is far off-screen, bypass style updates to conserve battery
    if (cardRect.bottom < -100 || cardRect.top > window.innerHeight + 100) return;

    const radius = window.innerWidth >= 640 ? 28 : 22;

    // Update Bio overlay clip in real-time
    if (bioRef.current && bioOverlayRef.current) {
      const bioRect = bioRef.current.getBoundingClientRect();
      const top = cardRect.top - bioRect.top;
      const left = cardRect.left - bioRect.left;
      const bottom = bioRect.bottom - cardRect.bottom;
      const right = bioRect.right - cardRect.right;

      bioOverlayRef.current.style.clipPath = `inset(${top}px ${right}px ${bottom}px ${left}px round ${radius}px)`;
    }

    // Update Hero overlay clip in real-time
    if (heroHeadingRef.current && heroOverlayRef.current) {
      const heroRect = heroHeadingRef.current.getBoundingClientRect();
      const top = cardRect.top - heroRect.top;
      const left = cardRect.left - heroRect.left;
      const bottom = heroRect.bottom - cardRect.bottom;
      const right = heroRect.right - cardRect.right;

      heroOverlayRef.current.style.clipPath = `inset(${top}px ${right}px ${bottom}px ${left}px round ${radius}px)`;
    }
  });

  return (
    <div
      ref={containerRef}
      id="hero-section"
      className="relative min-h-[160vh] bg-[#f9f6f2] text-[#111111] overflow-clip"
    >
      {/* 
        Sticky Avatar Layer:
        On desktop: starts small, tucked behind heading, pops to front on scroll.
        On mobile: starts lower down, stays behind heading (z-10 vs z-30), slides UP under the text.
      */}
      <motion.div
        style={{ zIndex: isMobile ? 10 : desktopAvatarZIndex }}
        className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none"
      >
        <div
          className="pointer-events-auto relative select-none w-[250px] sm:w-[290px] md:w-[330px] lg:w-[360px] h-[330px] sm:h-[380px] md:h-[430px] lg:h-[470px]"
        >
          <motion.div
            ref={cardRef}
            className="w-full h-full relative rounded-[22px] sm:rounded-[28px] overflow-hidden shadow-2xl border border-black/10 bg-[#111111]"
            style={{
              scale: activeAvatarScale,
              y: activeAvatarY,
              filter: themeFilter,
            }}
          >
            <img
              src="/images/portrait-animated.gif"
              alt="Portrait of Rehan"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* 
        Stage 1: Hero Viewport (100vh)
        On mobile: lifted slightly above vertical center, z-30 above avatar card.
        On desktop: unchanged z-20 and middle-aligned.
      */}
      <motion.div
        style={{ opacity: activeHeroOpacity, y: activeHeroY }}
        className="absolute top-0 left-0 right-0 h-screen w-full flex flex-col justify-between pt-20 sm:pt-24 pb-6 sm:pb-8 md:p-0 z-30 md:z-20 pointer-events-none"
      >
        {/* Spacer top: provides comfortable breathing room below dynamic island on mobile only */}
        <div className="h-12 sm:h-16 md:hidden" />

        {/* Headline with Floating 3D Elements - Absolute dead-center on desktop, unchanged on mobile */}
        <div className="relative mb-auto md:mb-0 md:absolute md:inset-0 md:flex md:items-center md:justify-center md:m-0 flex flex-col items-center justify-center text-center w-full max-w-[1320px] mx-auto px-4 sm:px-8">
          <div className="relative inline-block">
            {/* Floating 3D Glossy Element (Top-Left of SOFTWARE) */}
            <motion.div
              style={{ filter: themeFilter }}
              className="absolute -top-3 sm:-top-6 md:-top-10 lg:-top-14 -left-7 sm:-left-10 md:-left-16 lg:-left-20 w-8 sm:w-12 md:w-20 lg:w-28 xl:w-32 aspect-square pointer-events-none select-none z-30"
              animate={{
                y: [0, -8, 0],
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
                alt="3D Floating Element"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </motion.div>

            {/* Floating 3D Glossy Element (Bottom-Right of ENGINEER) */}
            <motion.div
              style={{ filter: themeFilter }}
              className="absolute -bottom-2 sm:-bottom-5 md:-bottom-8 lg:-bottom-12 -right-7 sm:-right-10 md:-right-16 lg:-right-20 w-8 sm:w-12 md:w-20 lg:w-28 xl:w-32 aspect-square pointer-events-none select-none z-30"
              animate={{
                y: [0, 8, 0],
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
                alt="3D Floating Element"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </motion.div>

            {/* Headline Container with Base Black and Clipped White Layers */}
            <div ref={heroHeadingRef} className="relative">
              {/* Base Layer: Natural Black Text */}
              <h1 className="font-display font-black text-[8.8vw] sm:text-[9.5vw] md:text-[10vw] lg:text-[8rem] xl:text-[9.5rem] 2xl:text-[10.5rem] tracking-tight leading-[0.88] uppercase select-none text-center text-[#111111]">
                <span className="block">SOFTWARE</span>
                <span className="block">ENGINEER</span>
              </h1>

              {/* Clipped Overlay Layer: Pure White Text ONLY where card is overlapping (mobile only) */}
              <div
                ref={heroOverlayRef}
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none select-none z-30 block md:hidden"
                style={{ clipPath: 'inset(100%)' }}
              >
                <h1 className="font-display font-black text-[8.8vw] sm:text-[9.5vw] md:text-[10vw] lg:text-[8rem] xl:text-[9.5rem] 2xl:text-[10.5rem] tracking-tight leading-[0.88] uppercase select-none text-center text-white">
                  <span className="block">SOFTWARE</span>
                  <span className="block">ENGINEER</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar - Anchored to bottom on desktop so it does not displace the centered headline */}
        <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-10 flex items-end justify-between pointer-events-auto md:absolute md:bottom-8 md:left-0 md:right-0">
          <div className="font-display font-bold text-3xl sm:text-4xl md:text-[58px] leading-none tracking-[-1.44px] text-[#111111]">
            &copy;2026
          </div>
          <div className="type-caption uppercase tracking-widest text-[#111111]/80">
            /CREATING SINCE 2020
          </div>
        </div>
      </motion.div>

      {/* 
        Stage 2: Bio Viewport
        Aligned inside the container.
      */}
      <div
        id="bio-section"
        className="relative min-h-screen w-full flex items-center justify-center py-20 z-20"
      >
        <motion.div
          ref={bioRef}
          style={{ opacity: bioOpacity, y: bioY }}
          className="relative w-full max-w-[1320px] mx-auto px-6 sm:px-10"
        >
          {/* Base Layer: Natural Black Text */}
          <BioContent isWhite={false} spacerRef={spacerRef} />

          {/* Clipped Overlay Layer: Pure White Text ONLY where the card overlaps (mobile only) */}
          <div
            ref={bioOverlayRef}
            aria-hidden="true"
            className="absolute inset-0 px-6 sm:px-10 pointer-events-none select-none z-30 block md:hidden"
            style={{ clipPath: 'inset(100%)' }}
          >
            <BioContent isWhite={true} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
