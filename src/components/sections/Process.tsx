"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Map, Pencil, Code, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Research",
    desc: "We deep-dive into your business goals, audience, and competitive landscape to form a solid strategic foundation.",
  },
  {
    number: "02",
    icon: Map,
    title: "Planning & Architecture",
    desc: "We define the tech stack, sitemap, and project roadmap — ensuring alignment before a single line of code is written.",
  },
  {
    number: "03",
    icon: Pencil,
    title: "Design & Prototype",
    desc: "High-fidelity Figma designs and interactive prototypes, refined through feedback cycles until perfect.",
  },
  {
    number: "04",
    icon: Code,
    title: "Development",
    desc: "Agile sprints deliver clean, tested, production-grade code with continuous client transparency.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch",
    desc: "Rigorous QA, staging previews, and zero-downtime deployment to get your product live with confidence.",
  },
  {
    number: "06",
    icon: Headphones,
    title: "Support & Grow",
    desc: "Post-launch monitoring, performance optimisation, and iterative improvements as your business scales.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative isolate py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">
            How We Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A transparent, battle-tested workflow that delivers great outcomes —
            every time.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 sm:p-7 hover:border-blue-500/30 hover:bg-blue-500/[0.05] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-5 right-5 text-6xl font-black text-white/[0.03] select-none group-hover:text-blue-500/[0.06] transition-colors">
                {step.number}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <step.icon size={18} className="text-blue-400" />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">
                    Step {step.number}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
