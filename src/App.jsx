import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PersonalMetrics from './components/PersonalMetrics';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import SoftSkillsMarquee from './components/SoftSkillsMarquee';
import Languages from './components/Languages';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  const [cursorText, setCursorText] = useState('');
  const [isProjectHovered, setIsProjectHovered] = useState(false);

  return (
    <div className="relative bg-[#050508] text-[#F9FAFB] min-h-screen selection:bg-[#F59E0B]/30 selection:text-[#FACC15] overflow-x-hidden">
      {/* Custom 3D Gold Follower Cursor */}
      <CustomCursor cursorText={cursorText} isProjectHovered={isProjectHovered} />

      {/* Dynamic Gold Ambient Background Canvas & 3D Geometry */}
      <BackgroundCanvas />

      {/* Floating Header Navbar */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero />
        <About />
        <PersonalMetrics />
        <Experience />
        <TechStack />
        <Projects
          setCursorText={setCursorText}
          setIsProjectHovered={setIsProjectHovered}
        />
        <Education />
        <Achievements />
        <Certifications />
        <SoftSkillsMarquee />
        <Languages />
        <ContactCTA />
      </main>

      {/* Minimal Gold & Obsidian Footer */}
      <Footer />
    </div>
  );
}
