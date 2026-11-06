import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

// ponytail: resilient native routing with URL decoding, slug normalization, and session persistence
const normalizeSlug = (slug: string | null | undefined): string => {
  if (!slug) return '';
  try {
    return decodeURIComponent(slug).trim().toLowerCase().replace(/\s+/g, '-');
  } catch {
    return slug.trim().toLowerCase().replace(/\s+/g, '-');
  }
};

const findProjectBySlug = (slug: string | null | undefined): (typeof projects)[0] | null => {
  if (!slug) return null;
  const target = normalizeSlug(slug);
  return (
    projects.find((p) => {
      const norm = normalizeSlug(p.slug);
      return norm === target || p.slug.toLowerCase() === target || p.slug.toLowerCase() === slug.toLowerCase();
    }) || null
  );
};

const getSlugFromLocation = (): string | null => {
  if (typeof window === 'undefined') return null;

  // 1. Check pathname: /work/:slug or /project/:slug or /projects/:slug
  const pathMatch = window.location.pathname.match(/\/(?:work|projects?)\/([^/?#]+)/i);
  if (pathMatch && pathMatch[1]) {
    try {
      return decodeURIComponent(pathMatch[1]);
    } catch {
      return pathMatch[1];
    }
  }

  // 2. Check hash fallback: #/work/:slug or #work/:slug or #projects/:slug
  const hashMatch = window.location.hash.match(/#\/?(?:work|projects?)\/([^/?#]+)/i);
  if (hashMatch && hashMatch[1]) {
    try {
      return decodeURIComponent(hashMatch[1]);
    } catch {
      return hashMatch[1];
    }
  }

  // 3. Check query param: ?work=:slug or ?project=:slug
  try {
    const searchParams = new URLSearchParams(window.location.search);
    const querySlug = searchParams.get('work') || searchParams.get('project');
    if (querySlug) {
      return decodeURIComponent(querySlug);
    }
  } catch {
    // Ignore URLSearchParams error
  }

  // 4. Session storage fallback: ensures refresh keeps project active if URL was masked
  try {
    const saved = sessionStorage.getItem('active_project_slug');
    if (saved) {
      const hasReloaded =
        window.performance &&
        window.performance.getEntriesByType &&
        window.performance.getEntriesByType('navigation')[0] &&
        (window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming).type === 'reload';

      if (hasReloaded || window.location.pathname.includes('/work')) {
        return saved;
      }
    }
  } catch {
    // SessionStorage may be restricted in private browsing
  }

  return null;
};

export const App: React.FC = () => {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(() => getSlugFromLocation());

  // Listen to browser Back/Forward navigation & hash changes
  useEffect(() => {
    const handleLocationChange = () => {
      setSelectedSlug(getSlugFromLocation());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const currentProject = findProjectBySlug(selectedSlug);

  // Sync address bar on mount or refresh if slug exists
  useEffect(() => {
    if (currentProject) {
      try {
        sessionStorage.setItem('active_project_slug', currentProject.slug);
      } catch {}

      const canonicalPath = `/work/${currentProject.slug}`;
      if (window.location.pathname !== canonicalPath) {
        window.history.replaceState({ slug: currentProject.slug }, '', canonicalPath);
      }
    }
  }, [currentProject]);

  // Navigate to project detail page
  const handleSelectProject = useCallback((slug: string) => {
    const targetProject = findProjectBySlug(slug);
    const targetSlug = targetProject ? targetProject.slug : slug;

    try {
      sessionStorage.setItem('active_project_slug', targetSlug);
    } catch {}

    window.history.pushState({ slug: targetSlug }, '', `/work/${targetSlug}`);
    setSelectedSlug(targetSlug);
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // Return to projects section on landing page
  const handleBackToProjects = useCallback(() => {
    try {
      sessionStorage.removeItem('active_project_slug');
    } catch {}

    window.history.pushState({}, '', '/#projects');
    setSelectedSlug(null);
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  }, []);

  // Return to specific landing anchor from Navbar
  const handleNavigateHome = useCallback((anchor?: string) => {
    try {
      sessionStorage.removeItem('active_project_slug');
    } catch {}

    window.history.pushState({}, '', `/${anchor || ''}`);
    setSelectedSlug(null);
    if (anchor) {
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    }
  }, []);

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
            <AnimatePresence mode="wait">
              {currentProject ? (
                /* Dedicated Case Study Detail Page with smooth dissolve */
                <motion.div
                  key={`project-${currentProject.slug}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  <ProjectDetail
                    project={currentProject}
                    onBack={handleBackToProjects}
                    onSelectProject={handleSelectProject}
                  />
                </motion.div>
              ) : (
                /* Full Landing Page with smooth dissolve */
                <motion.div
                  key="landing-page"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
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
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          {/* Colossal Wordmark Footer */}
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
};

export default App;
