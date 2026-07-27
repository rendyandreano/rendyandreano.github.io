import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Server,
  Smartphone,
  Globe,
  Cpu,
  Cloud,
  ChevronDown,
  ChevronUp,
  Frame,
  Zap,
  SquareCode,
  PanelLeft,
  Braces,
  PaintBucket,
  SquareKanban,
  Atom,
  Building2,
  Columns3Cog,
  PersonStanding,
  LayoutTemplate,
} from "lucide-react";

const skills = [
  { name: "React / Next.js", level: 75, icon: Layout },
  { name: "TypeScript", level: 75, icon: Code2 },
  { name: "Node.js", level: 60, icon: Server },
  { name: "Laravel", level: 85, icon: Cpu },
  { name: "PostgreSQL", level: 78, icon: Database },
  { name: "MySQL", level: 85, icon: Smartphone },
  { name: "Firebase", level: 60, icon: Cloud },
  { name: "REST API", level: 78, icon: Globe },
  { name: "Figma", level: 88, icon: Frame },
  { name: "Vite", level: 75, icon: Zap },
  { name: "HTML", level: 88, icon: SquareCode },
  { name: "React Native", level: 78, icon: PanelLeft },
  { name: "Javascript", level: 75, icon: Braces },
  { name: "CSS", level: 88, icon: PaintBucket },
  { name: "Trello", level: 88, icon: SquareKanban },
  { name: "Electron.js", level: 75, icon: Atom },
  { name: "Microsoft Office", level: 88, icon: Building2 },
  { name: "Wordpress", level: 88, icon: Columns3Cog },
  { name: "Postman", level: 60, icon: PersonStanding },
  { name: "Elementor", level: 88, icon: LayoutTemplate },
];
const INITIAL_VISIBLE = 8;

const Skills = () => {
  const [expanded, setExpanded] = useState(false);

  const visibleSkills =
    expanded ? skills : skills.slice(0, INITIAL_VISIBLE);
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-2">Keahlian</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills & Expertise</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visibleSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="glass rounded-xl p-6 group hover:glow-blue transition-all duration-500 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-electric flex items-center justify-center">
                  <skill.icon className="text-primary-foreground" size={20} />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{skill.name}</h3>
              </div>
              
              {/* Progress bar */}
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full gradient-electric"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.3, duration: 1, ease: "easeOut" }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-right">{skill.level}%</p>
            </motion.div>
          ))}         
        </div>
                  {skills.length > INITIAL_VISIBLE && (
            <div className="w-full flex justify-center mt-10">
              <button
                onClick={() => setExpanded(!expanded)}
                className="
                  mt-8
                  flex
                  items-center
                  gap-2
                  mx-auto
                  text-primary
                  hover:opacity-80
                  hover:-translate-y-1
                  transition
                  font-medium
                "
              >
                {expanded ? (
                  <>
                    Show Less 
                    <ChevronUp size={18} />
                  </>
                ) : (
                  <>
                    Show More 
                    <ChevronDown size={18} />
                  </>
                )}
              </button>
            </div>
          )}      
      </div>
    </section>
  );
};

export default Skills;
