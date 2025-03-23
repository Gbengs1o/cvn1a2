// HomePage.tsx
'use client';
import { useState, useEffect } from 'react';

import HeroSection from './components/Home/HeroSection';
import SkillsSection from './components/Home/SkillsSection';
import ProjectsSection from './components/Home/ProjectsSection';
import ContactSection from './components/Home/ContactSection';


const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  return (
    <main>
    
      <div className="min-h-screen transition-colors duration-500 bg-gray-50 dark:bg-gray-900">
        
        <HeroSection />
        <SkillsSection isLoaded={isLoaded} />
        <ProjectsSection isLoaded={isLoaded} />
        <ContactSection isLoaded={isLoaded} />
       
      </div>
    
    </main>
  );
};

export default HomePage;
