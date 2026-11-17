import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, PencilRuler, CalendarCheck, Sparkles } from "lucide-react";

const stops = [
  { num: "01", icon: Lightbulb, title: "Share your idea", text: "Fill out the form with your idea, references, and contact details." },
  { num: "02", icon: PencilRuler, title: "Get your proposal", text: "Jose reviews your idea and replies with a sketch and a basic estimate." },
  { num: "03", icon: CalendarCheck, title: "Book your appointment", text: "Once you approve the design, schedule your session [DEPOSIT, if applicable]." },
  { num: "04", icon: Sparkles, title: "Your new tattoo", text: "The session takes place at Inkspire Tattoo Studio and the piece joins the gallery." },
];

export default function Road() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const markerTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="proceso" ref={ref} className="py-20 md:py-28 px-5 max-w-5xl mx-auto scroll-mt-16">
      <p className="text-[#C9A227] font-heading uppercase tracking-[0.3em] text-sm mb-3 text-center">The process</p>
      <h2 className="font-display text-white text-4xl md:text-6xl tracking-wide mb-16 text-center">Road to your next tattoo</h2>
      <div className="relative">
        <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-0 -translate-x-1/2 border-l-2 border-dashed border-[#C9A227]/40" />
        <motion.div
          style={{ top: markerTop }}
          className="absolute left-6 md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#C9A227] shadow-[0_0_15px_3px_rgba(201,162,39,0.6)] z-10"
        />
        <div className="space-y-12 md:space-y-20">
          {stops.map((stop, i) => {
            const Icon = stop.icon;
            const left = i % 2 === 0;
            return (
              <motion.div
                key={stop.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative pl-16 ${left ? "md:pl-0 md:pr-[52%] md:text-right" : "md:pl-[52%]"}`}
              >
                <div className={`flex items-center gap-3 mb-3 ${left ? "md:justify-end" : ""}`}>
                  <span className="font-display text-3xl text-[#C9A227]/40 leading-none">{stop.num}</span>
                  <div className="w-11 h-11 rounded-full border border-[#C9A227] flex items-center justify-center text-[#C9A227] shrink-0">
                    <Icon size={20} />
                  </div>
                </div>
                <h3 className="font-heading uppercase tracking-wide text-white text-xl md:text-2xl mb-1.5">{stop.title}</h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">{stop.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="text-center mt-16">
        <a href="#estimado" className="inline-flex items-center gap-2 bg-[#C9A227] text-black px-8 py-3.5 rounded-full font-heading uppercase tracking-wide font-semibold hover:bg-[#d4af3a] transition-colors">
          Start my tattoo
        </a>
      </div>
    </section>
  );
}