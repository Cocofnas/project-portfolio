import React, { useState } from 'react';
import './tailwind.css'
import Contact from './components/Contact'; // Import your Contact component
import MyProjects from './components/MyProjects'; // Import your MyProject component
import Presentation from './components/Presentation'; // Import your Presentation component
import Skills from './components/Skills'; // Import your Skills component
import TechSection from './components/TechSection'; // Import your TechSkills component
import TopSection from './components/TopSection'; // Import your TopSection component
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <div className="container">
      <TopSection />
      <TechSection />
      <MyProjects />
      <Presentation />
      <Skills />
      <Contact />
      <Footer />
    </div>
    </div>
  );
}

export default App;