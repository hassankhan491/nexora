"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Nexora Studio transformed our entire digital presence. The attention to detail and speed of delivery was unlike anything we've experienced with an agency before.",
    name: "Sarah Mitchell",
    role: "CEO, Luminary SaaS",
    avatar: "SM",
    accent: "#3b82f6",
  },
  {
    quote:
      "From the first call to launch day, the process was completely transparent and collaborative. Our conversion rate jumped 40% in the first month post-launch.",
    name: "James Thornton",
    role: "Founder, Shopfront",
    avatar: "JT",
    accent: "#06b6d4",
  },
  {
    quote:
      "The team built our HIPAA-compliant portal faster than we thought possible, and the code quality is exceptional. Highly recommend for any complex project.",
    name: "Dr. Priya Nair",
    role: "CTO, MedTrack",
    avatar: "PN",
    accent: "#8b5cf6",
  },
];

const StarRow = () => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="relative isolate py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/[0.06] to-transparent" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">
            Client Stories
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            We measure our success by the results we create for the businesses
            we work with.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 sm:p-7 hover:border-white/[0.14] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${t.accent}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Background quote icon */}
              <div className="absolute top-5 right-5 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity">
                <Quote size={64} />
              </div>

              <div className="relative z-10 flex flex-col flex-1">
                <StarRow />

                <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: `${t.accent}30`, border: `1.5px solid ${t.accent}50` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
