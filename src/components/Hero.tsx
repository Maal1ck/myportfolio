import { motion } from "motion/react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-base-bg border-b border-border-main"
    >
      {/* Background Profile Image (Masked & Blended) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center lg:justify-end">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full max-w-[800px] aspect-square lg:translate-x-1/4 grayscale mix-blend-luminosity"
          style={{
            // FIXME: Replace this image URL with your portrait picture (e.g., "/my-picture.jpg" if placed in the public folder)
            backgroundImage: "url('/hero_picture.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitMaskImage: "radial-gradient(circle, black 25%, transparent 70%)",
            maskImage: "radial-gradient(circle, black 25%, transparent 70%)"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-accent font-bold text-[11px] mb-6 tracking-[0.1em] uppercase">
              Hi, I'm El Hadji Malick DIEYE
            </h2>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[2.5rem] md:text-6xl font-extrabold text-text-main mb-6 tracking-[-0.04em] leading-tight"
          >
            Geospatial Science & <span className="text-accent">Remote Sensing</span> Specialist.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[0.95rem] md:text-base text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Specialized in geospatial data analysis and deep learning for agriculture and climate applications. Winner of the 2024 NASA Pale Blue Dot Challenge.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/#projects"
              className="px-6 py-3 w-full sm:w-auto rounded bg-text-main text-base-bg font-bold text-sm tracking-wide hover:bg-text-muted transition-colors inline-block"
            >
              View Projects
            </a>
            <a
              href="/#contact"
              className="px-6 py-3 w-full sm:w-auto rounded border border-border-main bg-base-card text-text-main font-bold text-sm tracking-wide hover:border-text-muted transition-colors inline-block"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator - kept clean */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-3 text-text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[10px] uppercase font-bold tracking-widest block">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-6 bg-border-main"
        />
      </motion.div>
    </section>
  );
}
