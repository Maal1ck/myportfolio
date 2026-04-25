import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

export type ProjectItem = {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  links: { demo?: string; github?: string };
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 }
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 }
    }
  })
};

export const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setDirection(1);
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setDirection(-1);
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-base-card rounded-xl border border-border-main overflow-hidden group card-gradient flex flex-col relative"
    >
      <div className="relative overflow-hidden aspect-[4/3] border-b border-border-main group/slider bg-base-bg">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentImage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={project.images[currentImage]}
              alt={`${project.title} screenshot ${currentImage + 1}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/slider:scale-110"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Subtle Overlay to make it feel premium */}
        <div className="absolute inset-0 bg-base-bg/10 group-hover/slider:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
        
        {project.images.length > 1 && (
          <>
            <button 
              onClick={prevImage} 
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded bg-base-bg/80 text-text-main border border-border-main opacity-0 group-hover/slider:opacity-100 transition-all hover:text-accent hover:border-accent z-20 backdrop-blur-md"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={nextImage} 
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded bg-base-bg/80 text-text-main border border-border-main opacity-0 group-hover/slider:opacity-100 transition-all hover:text-accent hover:border-accent z-20 backdrop-blur-md"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
              {project.images.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${i === currentImage ? 'w-4 bg-accent' : 'w-1.5 bg-base-bg/90 border border-border-main'}`} 
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="p-6 relative flex flex-col flex-1 z-10 bg-base-card">
        {project.tags.length > 0 && (
          <div className="text-[10px] uppercase tracking-[0.1em] text-accent font-bold mb-2">
            {project.tags[0]}
          </div>
        )}
        <h3 className="text-lg font-bold text-text-main mb-2 tracking-tight">{project.title}</h3>
        <p className="text-[0.85rem] text-text-muted leading-relaxed mb-6 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 bg-base-bg border border-border-main text-text-muted text-[10px] font-medium rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {project.links && (Object.keys(project.links).length > 0) && (
          <div className="flex items-center gap-3">
            {project.links.demo && project.links.demo !== "#" && (
              <a href={project.links.demo} className="w-8 h-8 rounded bg-base-bg border border-border-main flex items-center justify-center text-text-main hover:border-accent hover:text-accent transition-colors">
                <ExternalLink size={14} />
              </a>
            )}
            {project.links.github && project.links.github !== "#" && (
              <a href={project.links.github} className="w-8 h-8 rounded bg-base-bg border border-border-main flex items-center justify-center text-text-main hover:border-accent hover:text-accent transition-colors">
                <Github size={14} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
