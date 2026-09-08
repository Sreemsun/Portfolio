import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Hackathons } from './components/Hackathons';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div style={{ background: '#000', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      {/* Mouse glow follower */}
      <CustomCursor />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Hackathons />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

