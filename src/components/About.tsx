import { motion } from "motion/react";
import { Satellite, MapPin, Database, Code2 } from "lucide-react";

export function About() {
  const skills = [
    {
      category: "GIS Systems",
      icon: <MapPin className="text-text-main" size={18} />,
      items: ["ArcGIS Pro", "QGIS", "ERDAS", "PIX4D", "AutoCAD", "PostGIS/PostgreSQL", "Supabase"],
    },
    {
      category: "Programming",
      icon: <Code2 className="text-text-main" size={18} />,
      items: ["Python", "PyTorch", "Geopandas", "Java (GEE)", "Git"],
    },
    {
      category: "Remote Sensing",
      icon: <Satellite className="text-text-main" size={18} />,
      items: ["Google Earth Engine", "Image Classification", "Crop Monitoring"],
    },
    {
      category: "AI & Deep Learning",
      icon: <Database className="text-text-main" size={18} />,
      items: ["YOLO", "CNN", "RNN", "UNet", "Semantic Segmentation"],
    },
  ];

  return (
    <section id="about" className="py-24 bg-base-card border-b border-border-main">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-text-main mb-6 tracking-tight">About & Skills</h2>
          <p className="text-[0.95rem] text-text-muted leading-relaxed">
            I am a Geospatial Science specialist, fluent in English, and passionate about global food security for sustainable agriculture. I develop tools to manage, retrieve, and extract insights from multiple sources and harness AI for environmental monitoring.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-base-bg rounded-lg p-6 border border-border-main"
            >
              <div className="w-10 h-10 rounded border border-border-main bg-base-card flex items-center justify-center mb-6">
                {skill.icon}
              </div>
              <h3 className="text-sm font-bold text-text-main mb-4 uppercase tracking-wider">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="bg-base-card border border-border-main px-2 py-1 rounded text-[11px] font-medium text-text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
