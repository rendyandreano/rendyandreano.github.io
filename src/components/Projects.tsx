import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    slug: "simppa",
    title: "Sistem Informasi Manajemen Aplikasi",
    shortDescription:
      "A centralized platform to collect, monitor progress, and showcase Project-Based Learning outcomes from all departments within the Faculty of Vocational Studies.",
    description:
      "This platform serves as a centralized hub for collecting, tracking, and showcasing Project-Based Learning (PBL) outcomes across all departments within the Faculty of Vocational Studies. It integrates contributions from various disciplines, including Information Technology, Graphic Design, Business Administration, Hotel Management, and Banking & Finance. The system enables students and faculty members to document project progress, collaborate effectively, and present their work in a structured and accessible manner. By providing a unified space, this platform enhances transparency, encourages interdisciplinary collaboration, and highlights the practical achievements of vocational education. In addition, the platform supports monitoring and evaluation processes, allowing stakeholders to assess project development, performance, and outcomes more efficiently. It is designed to bridge academic learning with real-world application, ensuring that each project reflects both innovation and industry relevance.",
    tags: ["Laravel", "PostgreSQL", "HTML", "PHP", "Bootstrap", "CSS", "JavaScript"],
    color: "from-blue-600 to-cyan-500",
  },
  {
    slug: "pbl-app",
    title: "Project Based Learning Application",
    shortDescription:
      "A centralized platform to collect, monitor progress, and showcase Project-Based Learning outcomes from all departments within the Faculty of Vocational Studies.",
    description:
      "This platform serves as a centralized hub for collecting, tracking, and showcasing Project-Based Learning (PBL) outcomes across all departments within the Faculty of Vocational Studies. It integrates contributions from various disciplines, including Information Technology, Graphic Design, Business Administration, Hotel Management, and Banking & Finance. The system enables students and faculty members to document project progress, collaborate effectively, and present their work in a structured and accessible manner. By providing a unified space, this platform enhances transparency, encourages interdisciplinary collaboration, and highlights the practical achievements of vocational education. In addition, the platform supports monitoring and evaluation processes, allowing stakeholders to assess project development, performance, and outcomes more efficiently. It is designed to bridge academic learning with real-world application, ensuring that each project reflects both innovation and industry relevance.",
    tags: ["Tailwind CSS", "MySQL", "HTML", "PHP"],
    color: "from-indigo-600 to-blue-500",
  },
  {
    slug: "greenhouse",
    title: "Greenhouse Automatic Watering System",
    shortDescription:
      "Greenhouse Automatic Watering System is a smart application that monitors temperature, humidity, and soil moisture in real time across two zones, helping maintain optimal greenhouse conditions through automated watering and simple visual insights.",
    description:
      "The Greenhouse Automatic Watering System is an intelligent monitoring and automation application designed to optimize greenhouse conditions efficiently. The system continuously tracks key environmental parameters, including air temperature, air humidity, and soil moisture across two different zones in real time. By integrating sensor data with a user-friendly interface, the application provides clear visualizations such as simple charts and real-time status updates, enabling users to easily understand environmental changes. Additionally, the system generates alerts when conditions fall outside optimal ranges, allowing timely intervention. One of the core features of this system is its automated watering mechanism. Based on soil moisture levels, the system can trigger irrigation processes to ensure plants receive the appropriate amount of water without manual input, improving efficiency and reducing resource waste. This project demonstrates the implementation of real-time data monitoring, automation logic, and user-centered design to support smart agriculture solutions, particularly in greenhouse management.",
    tags: ["React", "Node.js", "MQTT", "TensorFlow"],
    color: "from-blue-500 to-purple-500",
  },
  {
    slug: "pema-bimbel",
    title: "Company Profile Pema Bimbingan Belajar",
    shortDescription:
      "Pema Bimbel is a tutoring platform designed to help students from kindergarten to junior high school understand lessons more effectively through interactive learning methods, experienced tutors, and affordable pricing.",
    description:
      "Pema Bimbel is a web-based tutoring platform developed to support students from kindergarten (TK), elementary (SD), and junior high school (SMP), with future plans to expand to senior high school (SMA). This platform aims to make learning more accessible, engaging, and effective by combining interactive teaching methods with guidance from experienced and competent tutors. The system provides a wide range of subjects tailored to students’ academic needs. Each learning session is designed to be easy to understand, encouraging students to actively participate and improve their academic performance. From a system perspective, this project focuses on delivering a user-friendly interface where students and parents can easily explore available tutoring services. The platform emphasizes simplicity, accessibility, and affordability, ensuring that quality education can be reached by a broader audience. Key features of this platform include subject-based tutoring services, structured learning approaches, and interactive methods that enhance student engagement. The project reflects a commitment to improving educational experiences through technology-driven solutions.",
    tags: ["WordPress", "Elementor", "MySQL", "HTML", "CSS", "JavaScript"],
    color: "from-sky-500 to-blue-600",
  },
  {
    slug: "dgreen",
    title: "Company Profile Dgreen",
    shortDescription:
      "Platform CI/CD dengan monitoring infrastructure.",
    description:
      "Platform CI/CD otomatis dengan monitoring infrastructure dan deployment management.",
    tags: ["WordPress", "Elementor", "MySQL", "HTML", "CSS", "JavaScript"],
    color: "from-blue-600 to-teal-500",
  },
  {
    slug: "bomang",
    title: "Company Profile Bomang Fiberglass",
    shortDescription:
      "Website profile dengan dashboard visual.",
    description:
      "Tool analisis sentimen media sosial dengan NLP dan dashboard visual.",
    tags: ["WordPress", "Elementor", "MySQL", "HTML", "CSS", "JavaScript"],
    color: "from-violet-500 to-blue-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (

            /* ✅ LINK KE DETAIL */
            <Link key={project.slug} to={`/project/${project.slug}`}>
              <motion.div
                className="glass rounded-2xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >

                {/* IMAGE AREA */}
                <div className={`h-44 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 tech-grid opacity-30" />
                  <span className="text-primary-foreground/80 font-bold text-lg z-10">
                    {project.title}
                  </span>

                  {/* HOVER ICON */}
                  <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                    
                    {/* BIAR ICON GAK REDIRECT */}
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur flex items-center justify-center hover:bg-primary-foreground/30"
                    >
                      <ExternalLink className="text-primary-foreground" size={18} />
                    </button>

                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur flex items-center justify-center hover:bg-primary-foreground/30"
                    >
                      <Github className="text-primary-foreground" size={18} />
                    </button>

                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {project.title}
                  </h3>

                  {/* ✅ SHORT DESCRIPTION */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </Link>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;