import { motion } from "motion/react";
import { Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-base-bg border-b border-border-main scroll-mt-[70px]">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-text-main mb-2 tracking-tight">Get In Touch</h2>
          <div className="w-12 h-1 bg-accent mx-auto rounded mb-8"></div>
          <p className="text-[0.95rem] text-text-muted max-w-2xl mx-auto leading-relaxed">
            Whether you have a specific project in mind, need geospatial consulting, or just want to connect, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-text-main mb-6 tracking-tight">Contact Information</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-base-card border border-border-main flex items-center justify-center text-text-main shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-[0.1em] mb-1">Email</h4>
                  <a href="mailto:hadjmalickpro@gmail.com" className="text-base font-bold text-text-main hover:text-accent transition-colors">
                    hadjmalickpro@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-base-card border border-border-main flex items-center justify-center text-text-main shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-[0.1em] mb-1">Location</h4>
                  <p className="text-base font-bold text-text-main">
                    Rabat, Morocco<br/>
                    <span className="text-[12px] text-text-muted font-normal">Also working with initiatives in Senegal.</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-base-card border border-border-main flex items-center justify-center text-text-main shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-[0.1em] mb-1">Phone</h4>
                  <p className="text-base font-bold text-text-main">
                    +212-660-707-632
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-base-card border border-border-main p-6 rounded-lg">
                <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-[0.1em] mb-4">Current Status</h4>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                    <span className="text-sm font-medium text-text-main">Available for new projects</span>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[11px] uppercase tracking-wider font-bold text-text-muted mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded bg-base-bg border border-border-main text-sm text-text-main focus:outline-none focus:border-accent transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[11px] uppercase tracking-wider font-bold text-text-muted mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded bg-base-bg border border-border-main text-sm text-text-main focus:outline-none focus:border-accent transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-[11px] uppercase tracking-wider font-bold text-text-muted mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded bg-base-bg border border-border-main text-sm text-text-main focus:outline-none focus:border-accent transition-all"
                  placeholder="Mapping Project Inquiry"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[11px] uppercase tracking-wider font-bold text-text-muted mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 rounded bg-base-bg border border-border-main text-sm text-text-main focus:outline-none focus:border-accent transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-4 px-6 rounded bg-text-main hover:bg-text-muted text-base-bg font-bold flex items-center justify-center gap-2 transition-colors focus:outline-none"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
