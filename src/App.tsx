import React from 'react';
import { FramerNavbar } from './components/framer/FramerNavbar.tsx';
import { FramerHeroAndBio } from './components/framer/FramerHeroAndBio.tsx';
import { FramerQuote } from './components/framer/FramerQuote.tsx';
import { FramerServices } from './components/framer/FramerServices.tsx';
import { FramerProjects } from './components/framer/FramerProjects.tsx';
import { FramerTestimonials } from './components/framer/FramerTestimonials.tsx';
import { FramerThoughts } from './components/framer/FramerThoughts.tsx';
import { FramerContact } from './components/framer/FramerContact.tsx';
import { FramerFooter } from './components/framer/FramerFooter.tsx';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F3] text-[#111111] flex flex-col font-sans selection:bg-[#0099FF] selection:text-white antialiased">
      {/* Floating Dark Dock Navigation Bar */}
      <FramerNavbar />

      <main className="flex-1">
        {/* 1. Split-Sticky Hero & Bio Section with 3D Avatar Flip & Floating 3D Holographic Elements */}
        <FramerHeroAndBio />

        {/* 2. Scroll-Linked Word Illumination Quote Section */}
        <FramerQuote />

        {/* 3. Horizontal Stack Services Rows with Dot Separators */}
        <FramerServices />

        {/* 4. Featured Projects 2-Column Grid with Image Zoom */}
        <FramerProjects />

        {/* 5. Dark Black Cards Testimonials Section */}
        <FramerTestimonials />

        {/* 6. Editorial Thoughts / Blog Cards */}
        <FramerThoughts />

        {/* 7. Let's Talk Minimalist Form Section */}
        <FramerContact />
      </main>

      {/* 8. Colossal Footer with Edge-to-Edge Typography Wordmark */}
      <FramerFooter />
    </div>
  );
};

export default App;
