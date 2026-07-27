import { motion } from "framer-motion";
import { MessageCircle, ShoppingCart } from "lucide-react";

// TODO: replace with your real WhatsApp number in international format (no +, no spaces)
const WHATSAPP_NUMBER = "6281234567890";

type Products = {
  slug: string;
  title: string;
  shortDescription: string;
  image?: string;
  price: string;
  status: "Ready to Deploy" | "Customizable";
  technologies: string[];
  features: string[];
  whatsappName: string;
  color: string;
};

const products: Products[] = [
  {
    slug: "pos-system",
    title: "Point of Sales System",
    shortDescription:
      "Modern POS solution for retail stores, cafés, restaurants, and small businesses with inventory management, receipt printing, QRIS payment, and sales analytics.",
    price: "Rp 2.500.000",
    status: "Ready to Deploy",
    technologies: ["Laravel", "React", "Tailwind CSS", "PostgreSQL"],
    features: ["Inventory", "QRIS", "WhatsApp", "Reports", "Receipt", "Dashboard"],
    whatsappName: "Point of Sales System",
    color: "from-blue-600 to-cyan-500",
  },
  {
    slug: "company-profile",
    title: "Company Profile Website",
    shortDescription:
      "Elegant and responsive company profile website with CMS, SEO optimization, and integrated contact forms — perfect for establishing a professional online presence.",
    price: "Rp 1.500.000",
    status: "Customizable",
    technologies: ["React", "Next.js", "Tailwind CSS", "PostgreSQL"],
    features: ["CMS", "SEO", "Blog", "Contact", "Dashboard", "Multi-language"],
    whatsappName: "Company Profile Website",
    color: "from-indigo-600 to-blue-500",
  },
  {
    slug: "wedding-invitation",
    title: "Digital Wedding Invitation",
    shortDescription:
      "Beautiful digital wedding invitation with RSVP, guestbook, gift registry, live streaming, and Google Maps integration — fully customizable to match your theme.",
    price: "Rp 500.000",
    status: "Ready to Deploy",
    technologies: ["React", "Vite", "Tailwind CSS", "Firebase"],
    features: ["RSVP", "Guestbook", "Gallery", "Maps", "Gift", "Countdown"],
    whatsappName: "Digital Wedding Invitation",
    color: "from-violet-500 to-blue-500",
  },
  {
    slug: "wedding-invitation",
    title: "Digital Wedding Invitation",
    shortDescription:
      "Beautiful digital wedding invitation with RSVP, guestbook, gift registry, live streaming, and Google Maps integration — fully customizable to match your theme.",
    price: "Rp 500.000",
    status: "Ready to Deploy",
    technologies: ["React", "Vite", "Tailwind CSS", "Firebase"],
    features: ["RSVP", "Guestbook", "Gallery", "Maps", "Gift", "Countdown"],
    whatsappName: "Digital Wedding Invitation",
    color: "from-violet-500 to-blue-500",
  },
];

const buildWaLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const askMessage = (name: string) =>
  `Hello Andrew,

I found your portfolio and I'm interested in your ${name}.

Could you provide more information regarding:

• Features
• Pricing
• Customization
• Development timeline

Thank you.`;

const buyMessage = (name: string) =>
  `Hello Andrew,

I would like to purchase your ${name}.

Please let me know the ordering process and payment details.

Thank you.`;

const Products = () => {
  return (
    <section id="products" className="py-24 px-6">
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
            Products
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready-to-Use Web Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
            Explore production-ready web applications and templates designed to help
            businesses launch faster. Every product can be customized to match your
            brand and business requirements.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {products.map((products, i) => (
            <motion.div
              key={products.slug}
              className="glass rounded-2xl overflow-hidden group flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* IMAGE AREA */}
              <div
                className={`h-36 bg-gradient-to-br ${products.color} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 tech-grid opacity-30" />

                {products.image ? (
                  <img
                    src={products.image}
                    alt={products.title}
                    className="w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-primary-foreground/80 font-bold text-lg z-10 transition-transform duration-500 group-hover:scale-110">
                    {products.title}
                  </span>
                )}

                {/* STATUS BADGE */}
                <span className="absolute top-3 right-3 z-20 text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-100 border border-emerald-400/40 backdrop-blur font-medium">
                  {products.status}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {products.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  {products.shortDescription}
                </p>

                {/* FEATURES */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {products.features.slice(0,4).map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {products.technologies.slice(0,4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-foreground/5 text-muted-foreground border border-border font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* PRICE */}
                <div className="mb-5 mt-auto">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Starting from
                  </p>
                  <p className="text-xl font-bold text-foreground">
                    {products.price}
                  </p>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={buildWaLink(askMessage(products.whatsappName))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-primary/40 text-primary px-3 py-2 text-xs font-medium transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:-translate-y-0.5"
                  >
                    <MessageCircle size={16} />
                    Ask for Information
                  </a>
                  <a
                    href={buildWaLink(buyMessage(products.whatsappName))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
                  >
                    <ShoppingCart size={16} />
                    Buy Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;