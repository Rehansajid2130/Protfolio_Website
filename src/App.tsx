import React from 'react';
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
    <div className="min-h-screen bg-[#FAF7F3] text-[#111111] flex flex-col font-sans selection:bg-[#0099FF] selection:text-white antialiased">
      {/* Floating Dynamic Island Navigation Bar */}
      <Navbar />

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
  );
};

export default App;
