import { motion } from "motion/react";
import { Briefcase, GraduationCap, Download } from "lucide-react";

export function Resume() {
  const experiences = [
    {
      title: "National Coordinator",
      company: "UN Space Generation Advisory Council",
      period: "2025 - Present",
      description: "Coordinating space technology initiatives in Senegal, conducting awareness workshops and capacity building in GIS and remote sensing.",
      icon: <Briefcase className="text-text-main w-4 h-4" />
    },
    {
      title: "GIS Developer Intern",
      company: "Drone Globe",
      period: "2025 - Present",
      description: "Developing AI-based precision agriculture tools (YOLO, UNet) using multispectral drone imagery.",
      icon: <Briefcase className="text-text-main w-4 h-4" />
    },
    {
      title: "Master in Space Science & GIS",
      company: "CRASTE-LF / Univ Mohammed V",
      period: "2024 - Present",
      description: "Master's program focusing on Space Science, Remote Sensing and Geographic Information Systems in Rabat, Morocco.",
      icon: <GraduationCap className="text-text-main w-4 h-4" />
    },
    {
      title: "GIS & Topography Lead",
      company: "EGX Construction",
      period: "2024",
      description: "Supervised topographic surveys and produced GIS-integrated technical plans for infrastructure projects.",
      icon: <Briefcase className="text-text-main w-4 h-4" />
    },
  ];

  return (
    <section id="resume" className="py-24 bg-base-card border-b border-border-main scroll-mt-[70px]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold text-text-main mb-2 tracking-tight">Experience & Education</h2>
            <div className="w-12 h-1 bg-accent rounded"></div>
          </motion.div>
          
          <motion.a
            href="/Malick_DIEYE_resume.pdf"
            download="Malick_DIEYE_resume.pdf"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-text-main text-base-bg hover:bg-text-muted font-bold rounded text-sm transition-colors self-start md:self-auto"
          >
            <Download size={16} />
            Download CV
          </motion.a>
        </div>

        <div className="relative border-l border-border-main ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 pl-8 relative"
            >
              {/* Timeline marker node */}
              <div className="absolute w-8 h-8 bg-base-bg border border-border-main rounded-full flex items-center justify-center -left-[16px] top-0">
                {exp.icon}
              </div>
              
              <div className="bg-base-bg rounded-lg p-6 border border-border-main">
                <span className="inline-block px-3 py-1 bg-base-card border border-border-main text-text-muted text-[10px] font-bold rounded mb-4 uppercase tracking-wider">
                  {exp.period}
                </span>
                <h3 className="text-lg font-bold text-text-main mb-1 tracking-tight">{exp.title}</h3>
                <h4 className="text-accent font-semibold text-sm mb-4">{exp.company}</h4>
                <p className="text-[0.9rem] text-text-muted leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
