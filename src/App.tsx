import React, { useState, useEffect, useCallback } from 'react';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import { Navbar } from './components/Navbar.tsx';
import { HeroAndBio } from './components/HeroAndBio.tsx';
import { Quote } from './components/Quote.tsx';
import { Services } from './components/Services.tsx';
import { Projects } from './components/Projects.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { ProjectDetail } from './components/ProjectDetail.tsx';
import { projects } from './data/projects.ts';

// ponytail: native history API navigation without react-router bloat
const getSlugFromLocation = (): string | null => {
  if (typeof window === 'undefined') return null;

  // 1. Check pathname: /work/:slug
  const pathMatch = window.location.pathname.match(/\/work\/([^/]+)/);
  if (pathMatch && pathMatch[1]) return pathMatch[1];

  // 2. Check hash fallback: #/work/:slug or #work/:slug
  const hashMatch = window.location.hash.match(/#\/?work\/([^/]+)/);
  if (hashMatch && hashMatch[1]) return hashMatch[1];

  return null;
};

export const App: React.FC = () => {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(() => getSlugFromLocation());

  // Listen to browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setSelectedSlug(getSlugFromLocation());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigate to project detail page
  const handleSelectProject = useCallback((slug: string) => {
    window.history.pushState({ slug }, '', `/work/${slug}`);
    setSelectedSlug(slug);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Return to projects section on landing page
  const handleBackToProjects = useCallback(() => {
    window.history.pushState({}, '', '/#projects');
    setSelectedSlug(null);
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  }, []);

  // Return to specific landing anchor from Navbar
  const handleNavigateHome = useCallback((anchor?: string) => {
    window.history.pushState({}, '', `/${anchor || ''}`);
    setSelectedSlug(null);
    if (anchor) {
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    }
  }, []);

  const currentProject = projects.find((p) => p.slug === selectedSlug) || null;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }}
    >
      <div className="min-h-screen bg-[#F3EFE9] text-[#111111] font-sans selection:bg-[#0099FF] selection:text-white antialiased">
        {/* Background Tactile Noise Texture from Reference */}
        <div
          className="fixed inset-0 pointer-events-none z-30 opacity-[0.045] bg-repeat select-none"
          style={{
            backgroundImage: `url('/images/bg-noise.png')`,
            backgroundSize: '161px',
          }}
          aria-hidden="true"
        />

        {/* Floating Dynamic Island Navigation Bar */}
        <Navbar
          isProjectDetail={Boolean(currentProject)}
          onNavigateHome={handleNavigateHome}
        />

        {/* Centered Master Canvas with refined margins on desktop screens */}
        <div className="w-full max-w-[1440px] mx-auto min-h-screen bg-[#f9f6f2] relative shadow-2xl border-x border-[#111111]/[0.06] overflow-x-clip flex flex-col">
          <main className="flex-1">
            {currentProject ? (
              /* Dedicated Case Study Detail Page */
              <ProjectDetail
                project={currentProject}
                onBack={handleBackToProjects}
                onSelectProject={handleSelectProject}
              />
            ) : (
              /* Full Landing Page */
              <>
                {/* 1. Centered Hero & Bio Section with 3D Avatar Flip & Floating Objects */}
                <HeroAndBio />

                {/* 2. Scroll-Linked Word Illumination Philosophy Section */}
                <Quote />

                {/* 3. Horizontal Stack Services Rows */}
                <Services />

                {/* 4. Featured Projects 2-Column Grid */}
                <Projects onSelectProject={handleSelectProject} />

                {/* 5. Client Testimonials Section */}
                <Testimonials />

                {/* 6. Let's Talk Contact Form */}
                <Contact />
              </>
            )}
          </main>

          {/* Colossal Wordmark Footer */}
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
};

export default App;
