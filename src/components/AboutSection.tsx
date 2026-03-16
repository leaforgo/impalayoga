import { motion } from "framer-motion";
import leaPortrait from "@/assets/lea-croatia.jpg";

const AboutSection = () => {
  return (
    <section id="rolam" className="py-24 lg:py-32">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          className="lg:col-span-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        >
          <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-card bg-muted max-w-sm mx-auto lg:mx-0">
            <img
              src={leaPortrait}
              alt="Forgó Lea portré"
              className="w-full h-full object-cover object-top"
              style={{ outline: "1px solid rgba(0,0,0,0.05)", outlineOffset: "-1px" }}
            />
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-7 lg:col-start-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.2, 0, 0, 1] }}
        >
          <h2 className="text-3xl lg:text-4xl font-display font-600 text-foreground mb-6">
            Forgó Lea
          </h2>
          <div className="space-y-4 text-base lg:text-lg leading-relaxed text-muted-foreground">
            <p>
              A jóga számomra nem pusztán mozgás, hanem megérkezés: visszatérés a testembe,
              a belső csendbe, a jelenbe. Ezt az élményt szeretném megosztani biztonságos
              és elfogadó légkörben.
            </p>
            <p>
              A jógával mintegy másfél évtizede találkoztam Szingapúrban. Az első évekre
              Kenny Meitei lett a fő mentorom, majd a hatha jóga mellett megszerettem a
              yin jógát is. Két hónapot töltöttem egy indiai ashramban, és két éven
              keresztül Dharma Mittrától tanultam New Yorkban.
            </p>
            <p>
              Jelenleg Rose Erin Vaughan meridián alapú és Annie Au traumatudatos
              szomatikus szemléletű tanításait követem. Elvégeztem a Feövenyessi Medical
              Center funkcionális tréner képzését és a Mandala Jógastúdió gerincjóga
              oktatóképzését.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
