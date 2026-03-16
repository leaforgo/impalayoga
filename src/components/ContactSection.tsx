import { motion } from "framer-motion";
import { Instagram, Facebook, Mail } from "lucide-react";

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@impalayoga",
    href: "https://www.instagram.com/impalayoga",
  },
  {
    icon: Facebook,
    label: "Facebook",
    handle: "Lea Forgó",
    href: "https://www.facebook.com/lea.forgo/",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "impala.yoga@gmail.com",
    href: "mailto:impala.yoga@gmail.com",
  },
];

const ContactSection = () => {
  return (
    <section id="kapcsolat" className="py-24 lg:py-32 bg-secondary">
      <div className="container max-w-2xl text-center">
        <motion.h2
          className="text-3xl lg:text-4xl font-display font-600 text-foreground mb-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        >
          Kapcsolat
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-lg mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
        >
          Kérdésed van, vagy szeretnél jelentkezni egy órára? Keress bátran!
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-lg bg-background shadow-card hover:bg-muted transition-colors"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.2, 0, 0, 1],
              }}
            >
              <s.icon className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className="text-sm font-medium text-foreground">{s.handle}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
