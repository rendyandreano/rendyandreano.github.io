import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    issuer: "Dicoding",
    name: "Belajar Dasar Pemrograman Web",
    date: "2023",
    credential: "CERT-001",
    status: "valid",
  },
  {
    issuer: "Dicoding",
    name: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    date: "2023",
    credential: "CERT-002",
    status: "valid",
  },
  {
    issuer: "Coursera",
    name: "Google IT Support Professional",
    date: "2024",
    credential: "CERT-003",
    status: "valid",
  },
  // add more here...
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-2">Pencapaian</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.credential}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-xl p-6 hover:glow-blue-sm transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award size={20} className="text-primary" />
              </div>
              <p className="text-xs text-primary font-semibold tracking-wider uppercase mb-1">{cert.issuer}</p>
              <h3 className="text-sm font-bold text-foreground leading-snug">{cert.name}</h3>
              <p className="text-xs text-muted-foreground font-mono mt-2">ID: {cert.credential}</p>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-xs text-muted-foreground">{cert.date}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                  {cert.status === "valid" ? "Valid" : "Expired"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;