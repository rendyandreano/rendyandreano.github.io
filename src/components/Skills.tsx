import { useState, useEffect } from "react";
import ShowMoreButton from "@/components/ui/ShowMoreButton";
import { motion, AnimatePresence } from "framer-motion";
import { useShowMore } from "@/hooks/useShowMore";
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

const Skills = () => {
  const [initialVisible, setInitialVisible] = useState(8);

    useEffect(() => {
      const handleResize = () => {
        setInitialVisible(window.innerWidth < 768 ? 3 : 8);
      };

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

  const {
    expanded,
    visibleItems: visibleSkills,
    toggle,
    sectionRef,
  } = useShowMore(skills, initialVisible);

  return (
    <section 
    ref={sectionRef}
    id="skills" 
    className="py-24 px-6 bg-secondary/50"
    >
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
          
        <AnimatePresence mode="popLayout">
          {visibleSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              className="glass rounded-xl p-6 group hover:glow-blue transition-all duration-500 cursor-default"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{
                duration: 0.35,
                delay: i * 0.05,
              }}
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
        </AnimatePresence>         
      </div>
        {skills.length > initialVisible && (
          <ShowMoreButton
            expanded={expanded}
            onClick={toggle}
          />
        )}
      </div>
    </section>
  );
};

export default Skills;
