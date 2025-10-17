
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl text-gray-800 cursor-pointer" onClick={() => scrollToSection('hero')}>
          Yash Bhati
        </div>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-coral transition-colors duration-300">Projects</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-coral transition-colors duration-300">About</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-coral transition-colors duration-300">Contact</button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
