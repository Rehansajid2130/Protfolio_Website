import React, { useState } from 'react';
// Framer Edition Components (exact recreation of majd-portfolio.framer.website)
import { FramerHeader } from './components/framer/FramerHeader.tsx';
import { FramerHero } from './components/framer/FramerHero.tsx';
import { FramerServices } from './components/framer/FramerServices.tsx';
import { FramerProjects } from './components/framer/FramerProjects.tsx';
import { FramerTestimonials } from './components/framer/FramerTestimonials.tsx';
import { FramerThoughts } from './components/framer/FramerThoughts.tsx';
import { FramerContact } from './components/framer/FramerContact.tsx';
import { FramerFooter } from './components/framer/FramerFooter.tsx';

// Classic Style Guide Edition Components
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { TechStrip } from './components/TechStrip.tsx';
import { Projects } from './components/Projects.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { Process } from './components/Process.tsx';
import { Stack } from './components/Stack.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';

export const App: React.FC = () => {
  // Default to the new Framer website experience requested by user
  const [viewMode, setViewMode] = useState<'framer' | 'classic'>('framer');
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  return (
    <div className="min-h-screen bg-[#FAF7F3] text-[#111111] flex flex-col font-sans selection:bg-[#0099FF] selection:text-white">
      {/* Floating Theme / Mode Switcher Pill */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center bg-[#111111] text-[#FAF7F3] p-1.5 rounded-full shadow-2xl border border-white/20 text-xs font-mono">
        <button
          type="button"
          onClick={() => setViewMode('framer')}
          className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
            viewMode === 'framer'
              ? 'bg-[#0099FF] text-white font-semibold shadow-sm'
              : 'text-[#FAF7F3]/70 hover:text-white'
          }`}
        >
          Framer Edition
        </button>
        <button
          type="button"
          onClick={() => setViewMode('classic')}
          className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
            viewMode === 'classic'
              ? 'bg-[#0099FF] text-white font-semibold shadow-sm'
              : 'text-[#FAF7F3]/70 hover:text-white'
          }`}
        >
          Sky Blue Edition
        </button>
      </div>

      {viewMode === 'framer' ? (
        // The exact recreation of https://majd-portfolio.framer.website/
        <>
          <FramerHeader />
          <main className="flex-1">
            <FramerHero />
            <FramerServices />
            <FramerProjects />
            <FramerTestimonials />
            <FramerThoughts />
            <FramerContact />
          </main>
          <FramerFooter />
        </>
      ) : (
        // The original Editorial Sky Blue edition per the initial style guide
        <>
          <Navbar />
          <main id="main-content" className="flex-1">
            <Hero />
            <TechStrip />
            <Projects />
            <About />
            <Services onSelectService={(s) => setSelectedService(s)} />
            <Process />
            <Stack />
            <Contact selectedService={selectedService} />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
