import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FileText } from "lucide-react";

const Hero = () => {
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
          Web Developer &nbsp;|&nbsp; Frontend Developer &nbsp;|&nbsp; Mobile Developer
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary-foreground text-navy font-semibold hover:bg-primary-foreground/90 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
          >
            Lihat Portfolio
            <ArrowDown size={18} />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Lihat CV
            <FileText size={18} />
          </a>
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
    </section>
  );
};

export default Hero;
