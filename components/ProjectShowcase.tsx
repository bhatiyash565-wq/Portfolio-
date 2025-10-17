import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects as initialProjects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { Project } from '../types';
import { Hand } from 'lucide-react';

const ProjectShowcase: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwipeHint(false);
    }, 5000); // Hide hint after 5 seconds

    return () => clearTimeout(timer);
  }, []);


  const handleSwipe = (swipedProjectId: number) => {
    setShowSwipeHint(false); // Hide hint on first swipe
    setProjects(prevProjects => prevProjects.filter(p => p.id !== swipedProjectId));
  };
  
  const resetDeck = () => {
    setProjects(initialProjects);
  }

  return (
    <section id="projects" className="py-20 md:py-32 min-h-screen flex flex-col items-center justify-center">
       <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-bold text-white">Project Showcase</h2>
          <p className="text-lg text-white/80 mt-2">Swipe right if you like a project, or left to skip.</p>
          <p className="text-md text-white/70 mt-1">Either way reveals the next piece of work!</p>
        </div>
      <div className="relative w-full h-[600px] max-w-md mx-auto flex items-center justify-center">
        <AnimatePresence>
          {showSwipeHint && projects.length > 0 && (
            <motion.div
              key="swipe-hint"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute z-20 flex flex-col items-center justify-center text-white pointer-events-none"
            >
              <motion.div
                animate={{ x: [-30, 30] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              >
                <Hand size={40} className="text-white drop-shadow-lg" />
              </motion.div>
              <span className="mt-2 text-sm font-semibold tracking-wider text-white drop-shadow-lg">SWIPE</span>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSwipe={handleSwipe}
                isTop={index === projects.length - 1}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center bg-white/30 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white">That's all for now!</h3>
              <p className="text-white/80 mt-2">Thanks for exploring my work.</p>
              <button 
                onClick={resetDeck}
                className="mt-6 bg-coral text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-opacity-90 transition-all duration-300"
              >
                See them again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectShowcase;