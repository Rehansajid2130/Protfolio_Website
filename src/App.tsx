import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Projects } from './components/Projects.tsx';
import { Experience } from './components/Experience.tsx';
import { Principles } from './components/Principles.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-ink flex flex-col font-sans selection:bg-accent-100 selection:text-ink">
      {/* Skip to main content link for screen reader & keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-accent-500 text-ink font-medium rounded-sm shadow-card"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <Hero />
        <Projects />
        <Experience />
        <Principles />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;

