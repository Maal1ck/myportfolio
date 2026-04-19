import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../data/portfolioData";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Projects() {
  // Only show the top 3 featured projects on the homepage
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-base-bg pattern-dots border-b border-border-main scroll-mt-[70px]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl font-extrabold text-text-main mb-2">Featured Projects</h2>
            <div className="w-12 h-1 bg-accent rounded"></div>
          </div>
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-accent hover:text-text-main transition-colors group"
          >
            View All Portfolio & Activities
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
