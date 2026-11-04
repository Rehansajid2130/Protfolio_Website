import React from 'react';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import { Navbar } from './components/Navbar.tsx';
import { HeroAndBio } from './components/HeroAndBio.tsx';
import { Quote } from './components/Quote.tsx';
import { Services } from './components/Services.tsx';
import { Projects } from './components/Projects.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Thoughts } from './components/Thoughts.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';

export const App: React.FC = () => {
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
        <Navbar />

        {/* Centered Master Canvas with refined margins on desktop screens */}
        <div className="w-full max-w-[1440px] mx-auto min-h-screen bg-[#f9f6f2] relative shadow-2xl border-x border-[#111111]/[0.06] overflow-x-clip flex flex-col">
          <main className="flex-1">
            {/* 1. Centered Hero & Bio Section with 3D Avatar Flip & Floating Objects */}
            <HeroAndBio />

            {/* 2. Scroll-Linked Word Illumination Philosophy Section */}
            <Quote />

            {/* 3. Horizontal Stack Services Rows */}
            <Services />

            {/* 4. Featured Projects 2-Column Grid */}
            <Projects />

            {/* 5. Client Testimonials Section */}
            <Testimonials />

            {/* 6. Editorial Thoughts / Blog Cards */}
            <Thoughts />

            {/* 7. Let's Talk Contact Form */}
            <Contact />
          </main>

          {/* 8. Colossal Wordmark Footer */}
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
};

export default App;
