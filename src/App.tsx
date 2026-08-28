import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Sidebar from './components/Sidebar';
import HeaderMobile from './components/HeaderMobile';
import ProjectModal from './components/ProjectModal';
import MarqueeTicker from './components/MarqueeTicker';
import Footer from './components/Footer';
import CinematicPreloader from './components/preloader/CinematicPreloader';

import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import EducationSection from './sections/EducationSection';
import PublicationsSection from './sections/PublicationsSection';
import ContactSection from './sections/ContactSection';

import { ProjectItem } from './types';

import { PROJECTS } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const handleNextProject = () => {
    if (!selectedProject) return;
    const idx = PROJECTS.findIndex(p => p.id === selectedProject.id);
    if (idx < PROJECTS.length - 1) setSelectedProject(PROJECTS[idx + 1]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const idx = PROJECTS.findIndex(p => p.id === selectedProject.id);
    if (idx > 0) setSelectedProject(PROJECTS[idx - 1]);
  };

  const [isIntroRevealed, setIsIntroRevealed] = useState<boolean>(false);
  const [introKey, setIntroKey] = useState<number>(0);

  const handleReplayIntro = () => {
    sessionStorage.removeItem('ks_intro_viewed');
    setIsIntroRevealed(false);
    setIntroKey((prev) => prev + 1);
  };

  // Set up scroll tracking to highlight active navigation link
  useEffect(() => {
    const sectionIds = ['home', 'projects', 'experience', 'about', 'skills', 'education', 'publications', 'contact'];
    
    let isTicking = false;

    const handleScroll = () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + (window.innerHeight * 0.4);
          const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

          if (isBottom) {
            setActiveSection(sectionIds[sectionIds.length - 1]);
          } else {
            let currentSection = sectionIds[0];
            for (let i = sectionIds.length - 1; i >= 0; i--) {
              const section = document.getElementById(sectionIds[i]);
              if (section && scrollPosition >= section.offsetTop) {
                currentSection = sectionIds[i];
                break;
              }
            }
            setActiveSection(currentSection);
          }
          isTicking = false;
        });
        isTicking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#F4F0E8] dark:bg-[#0A0A0A] text-[#141413] dark:text-[#FAFAFA] flex flex-col font-sans overflow-x-hidden">
      <CustomCursor />
      {/* Cinematic Developer Preloader */}
      <CinematicPreloader
        key={introKey}
        onComplete={() => setIsIntroRevealed(true)}
        enableSessionStorage={false}
      />

      {/* Left Sidebar Navigation (Desktop) */}
      <Sidebar activeSection={activeSection} onNavigate={scrollToSection} theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Area */}
      <div className="lg:ml-64 flex-1 flex flex-col min-w-0">
        {/* Mobile Header (Sticky) */}
        <HeaderMobile activeSection={activeSection} onNavigate={scrollToSection} theme={theme} toggleTheme={toggleTheme} />

        {/* Portfolio Sections */}
        <main className="flex-1">
          <HeroSection
            onNavigate={scrollToSection}
            isReady={isIntroRevealed}
          />

          {/* Tech Banner Marquee */}
          <MarqueeTicker dark={true} />

          <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
          <ExperienceSection />
          <AboutSection />
          <SkillsSection />
          <EducationSection />
          <PublicationsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer
          onScrollToTop={scrollToTop}
          onReplayIntro={handleReplayIntro}
        />
      </div>

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNext={handleNextProject}
        onPrev={handlePrevProject}
        hasNext={selectedProject ? PROJECTS.findIndex(p => p.id === selectedProject.id) < PROJECTS.length - 1 : false}
        hasPrev={selectedProject ? PROJECTS.findIndex(p => p.id === selectedProject.id) > 0 : false}
      />
    </div>
  );
}
