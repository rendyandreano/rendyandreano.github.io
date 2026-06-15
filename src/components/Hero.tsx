import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, FileText, X } from "lucide-react";

const Hero = () => {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-blue">
      {/* Tech grid overlay */}
      <div className="absolute inset-0 tech-grid" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/20 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-electric-light/15 blur-[120px] animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Welcome to my portfolio
          </p>
        </motion.div>

        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Rendy Andreano Prayoga
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-primary-foreground/70 mb-10 font-light tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full Stack Developer &nbsp;|&nbsp; SaaS & Business Automation
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >

          {/* Portfolio */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary-foreground text-navy font-semibold hover:bg-primary-foreground/90 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
          >
            Lihat Portfolio
            <ArrowDown size={18} />
          </a>

          {/* CV */}
          <button
            onClick={() => setCvOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
          >
            <FileText size={18} />
            Lihat CV
          </button>

          {/* Contact */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
          >
            <Mail size={18} />
            Hubungi Saya
          </a>

        </motion.div>
      </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-primary-foreground/40" size={24} />
        </motion.div>

      {/* ✅ Modal CV */}
      {cvOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={(e) => e.target === e.currentTarget && setCvOpen(false)}
        >
          <motion.div
            className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-700 w-[90vw] max-w-3xl h-[90vh] flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header Modal */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-200 dark:border-neutral-700">
              <h2 className="text-sm font-medium text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                <FileText size={16} />
                Curriculum Vitae — Rendy Andreano Prayoga
              </h2>
              <button
                onClick={() => setCvOpen(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-600 text-xs text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
              >
                <X size={13} />
                Tutup
              </button>
            </div>

            {/* Iframe Google Drive Preview */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/1WF1if1NGYO_rfuX9DRjvPWW242tg6hU4/preview"
                title="CV Preview"
                className="w-full h-full border-none"
                allow="autoplay"
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero;