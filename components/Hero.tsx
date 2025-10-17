
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-a-soft-blurry-background-of-a-pink-and-orange-color-scheme-5405/1080p.mp4"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 p-6 text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hi, I’m Yash Bhati
        </h1>
        <p className="text-2xl md:text-4xl font-light mt-2">
          Motion Designer with 1.5 years of experience.
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl">
          I create motion that connects emotion with imagination.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-coral text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            See my work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white/20 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-white/30 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            Contact me
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
