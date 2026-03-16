import { motion } from "framer-motion";

const classes = [
  {
    name: "Hatha",
    intensity: 2,
    description:
      "Sri Dharma Mittra több mint 50 éves hatha jóga tapasztalatán alapuló, a mai kor igényeihez adaptált óra. Az erő és hajlékonyság egyensúlyára törekszünk, nyugtató levezetéssel, relaxációval és meditációval.",
  },
  {
    name: "Yin",
    intensity: 1,
    description:
      "Belső utazás, ahol megengedheted magadnak, hogy ne rohanj. A test kötőszöveti rétegeit megcélozva több percig tartjuk a pózokat. A csípő, a medence és az alsó gerinc tájéka kiemelt szerepet kap.",
  },
  {
    name: "Gerincjóga",
    intensity: 2,
    description:
      "Modern, a jógában gyökerező mozgásrendszer, amely a mai nyugati életmód igényeihez igazodik. Egyszerű, biztonságos és preventív gyakorlatokkal segíti a test természetes egyensúlyának visszaállítását.",
  },
];

const IntensityDots = ({ level }: { level: number }) => (
  <div className="flex gap-1.5">
    {[1, 2, 3].map((i) => (
      <span
        key={i}
        className={`w-2 h-2 rounded-full ${
          i <= level ? "bg-primary" : "bg-border"
        }`}
      />
    ))}
  </div>
);

const ClassTypesSection = () => {
  return (
    <section id="oratipusok" className="py-24 lg:py-32 bg-secondary">
      <div className="container">
        <motion.h2
          className="text-3xl lg:text-4xl font-display font-600 text-foreground mb-16 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        >
          Óratípusok
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.name}
              className="p-8 rounded-lg bg-background    hover:bg-muted transition-colors cursor-default"
              style={{ boxShadow: "var(--shadow-card)" }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.2, 0, 0, 1],
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-display font-600 text-foreground">
                  {cls.name}
                </h3>
                <IntensityDots level={cls.intensity} />
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                {cls.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassTypesSection;
