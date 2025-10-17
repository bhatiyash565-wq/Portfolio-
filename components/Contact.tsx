
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here.
    alert('Thank you for your message!');
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Like what you see?
            <br />
            <span className="text-coral">Let’s create something extraordinary.</span>
          </h2>
          <p className="text-lg text-white/80 mt-4">
            I'm currently available for freelance projects and full-time opportunities.
          </p>

          <form onSubmit={handleSubmit} className="mt-12 text-left space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" required className="w-full bg-white/20 placeholder-white/60 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral transition-all" />
              <input type="email" placeholder="Your Email" required className="w-full bg-white/20 placeholder-white/60 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral transition-all" />
            </div>
            <textarea placeholder="Your Message" rows={5} required className="w-full bg-white/20 placeholder-white/60 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral transition-all"></textarea>
            <div className="text-center">
              <button type="submit" className="bg-coral text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300">
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-16">
            <p className="text-white/80">Or reach out directly:</p>
            <a href="mailto:hello@yashbhati.com" className="text-xl text-white font-semibold mt-2 inline-block hover:text-coral transition-colors">hello@yashbhati.com</a>
            <div className="flex justify-center space-x-6 mt-6">
              <a href="#" className="text-white hover:text-coral transition-colors"><Twitter size={28} /></a>
              <a href="#" className="text-white hover:text-coral transition-colors"><Linkedin size={28} /></a>
              <a href="#" className="text-white hover:text-coral transition-colors"><Github size={28} /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
