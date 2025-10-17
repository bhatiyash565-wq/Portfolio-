
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#FFDAB9] via-[#FF7F50] to-[#FFBF00] min-h-screen text-gray-800 font-sans antialiased">
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <ProjectShowcase />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
