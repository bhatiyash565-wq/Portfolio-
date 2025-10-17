
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white/10 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <div className="w-24 h-1 bg-coral mx-auto mt-4 mb-8 rounded"></div>
          
          <img 
            src="https://picsum.photos/seed/yashbhati/200/200" 
            alt="Yash Bhati"
            className="w-40 h-40 rounded-full mx-auto mb-8 object-cover shadow-lg border-4 border-white/50"
          />

          <div className="text-lg text-white/90 space-y-6 text-left">
            <p>
              From the moment I saw my first animated short, I was captivated by the power of motion to tell stories and evoke feelings. That spark led me on a journey into the world of motion design. With 1.5 years of professional experience, I've honed my skills in bringing static ideas to vibrant life.
            </p>
            <p>
              My toolkit primarily consists of Adobe After Effects for intricate 2D animations and Blender for creating immersive 3D worlds. I believe that the best motion design isn't just visually stunning; it's emotionally resonant. My philosophy is to blend technical precision with creative intuition, ensuring every frame serves a purpose and connects with the audience on a deeper level.
            </p>
            <p>
              I'm passionate about exploring new techniques and pushing the boundaries of what's possible in motion. Whether it's a slick logo animation, a complex explainer video, or an abstract piece of art, I pour my heart into creating work that is both beautiful and meaningful.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
