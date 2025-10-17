
import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { Project } from '../types';
import { AfterEffectsIcon, BlenderIcon, FigmaIcon } from './icons/ToolIcons';
import { Heart, X } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSwipe: (id: number) => void;
  isTop: boolean;
}

const toolIcons: { [key: string]: React.ReactNode } = {
  'After Effects': <AfterEffectsIcon />,
  'Blender': <BlenderIcon />,
  'Figma': <FigmaIcon />,
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSwipe, isTop }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 300], [-20, 20]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);

  const [exitX, setExitX] = useState<number>(0);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 100) {
      setExitX(300);
      onSwipe(project.id);
    } else if (info.offset.x < -100) {
      setExitX(-300);
      onSwipe(project.id);
    }
  };

  return (
    <motion.div
      className="absolute w-full h-full max-w-md mx-auto"
      style={{
        x,
        rotate,
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
      initial={{ scale: 0.95, y: 20, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ x: exitX, opacity: 0, transition: { duration: 0.4 } }}
    >
      <div className="relative w-full h-full bg-black rounded-2xl shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing">
        <video
          key={project.videoUrl}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={project.videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        
        <motion.div style={{ opacity: likeOpacity }} className="absolute top-8 right-8 text-green-400">
          <Heart size={64} fill="currentColor" />
        </motion.div>
        <motion.div style={{ opacity: nopeOpacity }} className="absolute top-8 left-8 text-red-500">
          <X size={64} />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold">{project.name}</h3>
          <p className="mt-1 text-white/90">{project.description}</p>
          <div className="flex items-center space-x-4 mt-4">
            <span className="font-semibold">Tools:</span>
            <div className="flex space-x-2">
              {project.tools.map(tool => (
                <div key={tool} className="p-1.5 bg-white/20 rounded-full">
                  {toolIcons[tool] || null}
                </div>
              ))}
            </div>
          </div>
          {project.caseStudyUrl && (
            <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer"
               className="mt-4 inline-block text-coral font-semibold hover:underline">
              View Full Case Study &rarr;
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
