import { motion } from "framer-motion";
import leaMountain from "@/assets/lea-mountain.jpg";

const ease = [0.2, 0, 0, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: ease as unknown as [number, number, number, number] },
  }),
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-20 lg:py-0">
        <motion.div
          className="flex flex-col justify-center order-2 lg:order-1"
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6"
            variants={fadeUp}
            custom={0}
          >
            Impala Yoga
          </motion.p>
          <motion.h1
            className="text-hero font-display font-700 text-foreground mb-6"
            variants={fadeUp}
            custom={1}
          >
            Mozgás, ami közelebb visz önmagadhoz.
          </motion.h1>
          <motion.p
            className="text-lg leading-relaxed text-muted-foreground max-w-lg mb-10"
            variants={fadeUp}
            custom={2}
          >
            Tudatos mozgás. Jelenlét a matracon és azon túl. Kis létszámú boutique
            jógaórák Forgó Leával, magyarul és angolul.
          </motion.p>
          <motion.div className="flex gap-4" variants={fadeUp} custom={3}>
            <a
              href="#esemenyek"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Következő események
            </a>
            <a
              href="#rolam"
              className="inline-flex items-center px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-medium text-sm hover:bg-muted transition-colors"
            >
              Rólam
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
        >
          <div className="aspect-[3/4] lg:aspect-[3/4] rounded-lg overflow-hidden shadow-card">
            <img
              src={leaMountain}
              alt="Forgó Lea jógázik a hegyekben, imazászlókkal a háttérben"
              className="w-full h-full object-cover"
              style={{ outline: "1px solid rgba(0,0,0,0.05)", outlineOffset: "-1px" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
