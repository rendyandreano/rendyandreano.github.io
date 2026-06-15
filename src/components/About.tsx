import { motion } from "framer-motion";
import { Code2, TabletSmartphone, PencilRuler } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Full Stack Dev" },
  { icon: TabletSmartphone, label: "SaaS" },
  { icon: TabletSmartphone , label: "Mobile Dev" },
  { icon: PencilRuler, label: "UI/UX Design" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-2">Tentang Saya</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="w-64 md:w-72 rounded-2xl overflow-hidden glow-blue animate-glow-pulse">
                <div className="w-full h-full gradient-electric flex items-center justify-center text-primary-foreground text-6xl font-bold">
                  <img src="/poseformal.jpeg" alt="profil-picture" />
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-64 h-64 md:w-72 md:h-72 rounded-2xl border-2 border-primary/30 -z-10" />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              I am an Information Technology graduate with hands-on experience in Software Development and IT Support, 
              specializing in SaaS (Software as a Service) development and business process automation. 
              I have built web-based ERP and CRM systems that streamline manual workflows, improve operational 
              efficiency, and deliver measurable business impact.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My focus is on developing scalable and user-centered digital products through full-stack development, 
              while integrating modern technologies and third-party services such as Google Cloud, 
              Meta, and TikTok APIs. Passionate about building reliable and impactful SaaS solutions that 
              help businesses grow and operate more efficiently.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="glass rounded-xl p-4 flex items-center gap-3 glow-blue-sm hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <item.icon className="text-primary" size={22} />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
