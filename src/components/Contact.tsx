import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Send, ArrowRight } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-2">Kontak</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 space-y-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label className="text-sm text-muted-foreground font-medium mb-1.5 block">Nama</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:glow-border focus:border-primary outline-none transition-all duration-300 text-foreground"
                placeholder="Nama lengkap"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground font-medium mb-1.5 block">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:glow-border focus:border-primary outline-none transition-all duration-300 text-foreground"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground font-medium mb-1.5 block">Pesan</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:glow-border focus:border-primary outline-none transition-all duration-300 text-foreground resize-none"
                placeholder="Tulis pesan Anda..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-lg gradient-electric text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300"
            >
              Kirim Pesan
              <Send size={18} />
            </button>
          </motion.form>

          {/* Info cards */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact info */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <h3 className="font-semibold text-foreground text-lg">Informasi Kontak</h3>
              <div className="space-y-3">
                <a href="mailto:rendyandreano2303@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary" size={18} />
                  </div>
                  <span className="text-sm">rendyandreano2303@gmail.com</span>
                </a>
                <a href="https://wa.me/6281232261965" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="text-primary" size={18} />
                  </div>
                  <span className="text-sm">+62 812-3226-1965</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <span className="text-sm">Jakarta, Indonesia</span>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-foreground text-lg mb-4">Ikuti Saya</h3>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: "www.linkedin.com/in/rendyandreanop", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/rendyandreano", label: "GitHub" },
                  { icon: Instagram, href: "https://www.instagram.com/rendyandreano", label: "Instagram" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:gradient-electric hover:text-primary-foreground text-primary transition-all duration-300 hover:glow-blue-sm"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="glass rounded-2xl p-6 glow-blue-sm">
              <h3 className="font-semibold text-foreground text-lg mb-2">Siap untuk project selanjutnya?</h3>
              <p className="text-muted-foreground text-sm mb-4">Mari diskusi lebih lanjut tentang project Anda.</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg gradient-electric text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Hubungi Saya
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
