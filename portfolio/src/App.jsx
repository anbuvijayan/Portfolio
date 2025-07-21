import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout';

import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';

const App = () => {
  const [currentSection, setCurrentSection] = useState('hero'); // default section is "home"

  const renderSection = () => {
    switch (currentSection) {
      case 'hero':
        return <HomeSection />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'skills':
        return <SkillsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <Layout
      currentSection={currentSection}
      onSectionChange={setCurrentSection}
    >
      {renderSection()}
    </Layout>
  );
};

export default App;
