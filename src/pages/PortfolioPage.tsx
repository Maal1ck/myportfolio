import { motion } from "motion/react";
import { ProjectCard } from "../components/ProjectCard";
import { projectsData, activitiesData } from "../data/portfolioData";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-24 bg-base-bg min-h-screen">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-text-muted hover:text-text-main mb-8 transition-colors text-sm font-bold uppercase tracking-widest">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-text-main mb-4 tracking-tight">Full Portfolio & Activities</h1>
              <div className="w-16 h-1.5 bg-accent rounded mb-8"></div>
              <p className="text-text-muted max-w-2xl leading-relaxed text-lg">
                A comprehensive archive of all my featured projects, hackathon victories, and geospatial activities.
              </p>
            </motion.div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold text-text-main mb-8 tracking-tight flex items-center gap-3">
              <span className="text-accent text-sm">01.</span> Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-main mb-8 tracking-tight flex items-center gap-3">
              <span className="text-accent text-sm">02.</span> Activities & Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activitiesData.map((activity, index) => (
                <ProjectCard key={index} project={activity} index={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
