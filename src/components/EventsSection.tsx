import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

type EventItem = {
  date: string;
  weekday: string;
  name: string;
  location: string;
  status: "szabad" | "betelt";
  link: string;
};

const events: EventItem[] = [
  {
    date: "2026. ápr. 5.",
    weekday: "Szombat",
    name: "Hatha Jóga Workshop",
    location: "Budapest, Mandala Stúdió",
    status: "szabad",
    link: "https://www.facebook.com/lea.forgo/",
  },
  {
    date: "2026. ápr. 12.",
    weekday: "Szombat",
    name: "Yin Jóga — Mély feltöltődés",
    location: "Budapest, Mandala Stúdió",
    status: "szabad",
    link: "https://www.facebook.com/lea.forgo/",
  },
  {
    date: "2026. ápr. 19.",
    weekday: "Szombat",
    name: "Gerincjóga — A belső egyensúly",
    location: "Budapest, Mandala Stúdió",
    status: "betelt",
    link: "https://www.facebook.com/lea.forgo/",
  },
];

const EventsSection = () => {
  return (
    <section id="esemenyek" className="py-24 lg:py-32">
      <div className="container">
        <motion.h2
          className="text-3xl lg:text-4xl font-display font-600 text-foreground mb-16 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        >
          Következő események
        </motion.h2>

        <div className="max-w-3xl mx-auto divide-y divide-border">
          {events.map((event, i) => (
            <motion.div
              key={i}
              className="py-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.2, 0, 0, 1],
              }}
            >
              <div className="sm:w-36 flex-shrink-0">
                <div className="flex items-center gap-2 text-sm text-muted-foreground tabular-nums">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5 ml-6">
                  {event.weekday}
                </p>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-display font-500 text-foreground text-base">
                  {event.name}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{event.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 flex-shrink-0">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    event.status === "szabad"
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {event.status === "szabad" ? "Szabad" : "Betelt"}
                </span>
                {event.status === "szabad" && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
                  >
                    Jelentkezem
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {events.length === 0 && (
          <p className="text-center text-muted-foreground text-lg">
            Hamarosan új időpontok!
          </p>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
