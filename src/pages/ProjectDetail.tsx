import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Github } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { useEffect } from "react";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  // scroll ke atas saat masuk halaman
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // kalau slug tidak ditemukan
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-foreground">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAVBAR */}
      <Navbar />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* BACK */}
          <button
            onClick={() =>
              navigate("/", { state: { scrollTo: "projects" } })
            }
            className="mb-10 px-4 py-2 rounded-lg glass hover:opacity-80 transition"
          >
            ← Back
          </button>

          {/* GRID */}
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* TITLE */}
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {project.title}
                <br />
                <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  {project.subtitle}
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p className="text-muted-foreground leading-relaxed max-w-xl">
                {project.description}
              </p>

              {/* BUTTON */}
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-primary transition"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>

              {/* TECHNOLOGIES */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Technologies Used
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >

              {/* IMAGE */}
              <div className="glass rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover"
                />
              </div>

              {/* FEATURES */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">
                  ⭐ Key Features
                </h3>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
              </div>

            </motion.div>

          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default ProjectDetail;