import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    year: "February 2026 - Now",
    title: "Coding AI Teacher",
    company: "Al-Maahira IIBS Malang",
    description: "Empowering middle school students by delivering high-impact instruction in foundational coding, Artificial Intelligence, and basic of IT concepts to bridge the digital literacy.",
  },
  {
    year: "August 2025 - February 2026",
    title: "IT Support",
    company: "PT Metrik Sarana Teknika",
    description: "Maintained and developed company profile websites while implementing new features to support business growth. Built multiple websites across the company's multi-brand portfolio using WordPress and Laravel framework with MySQL. Developed web-based and desktop CRM applications to automate sales and marketing processes, utilizing technologies such as Laravel, Electron.js, React.js, Tailwind CSS, and third-party API integrations. Regularly conducted website audits to monitor and improve overall quality and performance.",
  },
  {
    year: "September 2024 - February 2025",
    title: "Software Development",
    company: "PT. Petrokimia Gresik",
    description: "Developing a web-based ERP system using the Laravel framework and PostgreSQL, automating application request processes that were previously handled manually. Developed and optimized several applications to improve overall company performance, while also redesigning dashboard UI/UX to align with modern design best practices. Additionally, created Business Requirement Documents (BRD) for each application to streamline communication between stakeholders and development teams.",
  },
  {
    year: "February 2024 - June 2024",
    title: "Fullstack Developer",
    company: "Fakultas Vokasi - Universitas Brawijaya",
    description: "Pengembangan web application dan maintenance sistem existing.",
  },
    {
    year: "August 2023 - December 2023",
    title: "Project Manager",
    company: "Fakultas Vokasi - Universitas Brawijaya",
    description: "Pengembangan web application dan maintenance sistem existing.",
  },
];

const Timeline = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-2">Pengalaman</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.year}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-blue-sm z-10 mt-2" />

              {/* Content */}
              <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                <div className="glass rounded-xl p-6 hover:glow-blue-sm transition-all duration-300">
                  <span className="text-xs text-primary font-semibold tracking-wider">{exp.year}</span>
                  <h3 className="text-lg font-bold text-foreground mt-1">{exp.title}</h3>
                  <p className="text-sm text-primary/80 font-medium flex items-center gap-1.5 mt-0.5">
                    <Briefcase size={14} />
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
