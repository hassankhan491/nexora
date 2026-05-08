"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShoppingCart,
  Heart,
  Rocket,
  BarChart3,
  GraduationCap,
  Landmark,
  Building2,
  Brush,
} from "lucide-react";

const industries = [
  {
    icon: ShoppingCart,
    label: "E-commerce",
    desc: "Retail & DTC brands",
    glow: "rgba(59,130,246,0.12)",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Heart,
    label: "Healthcare",
    desc: "MedTech & patient portals",
    glow: "rgba(236,72,153,0.1)",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/10 border-pink-500/20",
  },
  {
    icon: Rocket,
    label: "Startups",
    desc: "MVPs & growth products",
    glow: "rgba(251,146,60,0.1)",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    icon: BarChart3,
    label: "SaaS",
    desc: "B2B & B2C platforms",
    glow: "rgba(139,92,246,0.12)",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    icon: GraduationCap,
    label: "Education",
    desc: "EdTech & LMS platforms",
    glow: "rgba(34,197,94,0.1)",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Landmark,
    label: "Fintech",
    desc: "Finance & payment tools",
    glow: "rgba(6,182,212,0.12)",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    icon: Building2,
    label: "Real Estate",
    desc: "Property platforms",
    glow: "rgba(251,191,36,0.1)",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: Brush,
    label: "Creative",
    desc: "Agencies & studios",
    glow: "rgba(244,114,182,0.1)",
    iconColor: "text-fuchsia-400",
    iconBg: "bg-fuchsia-500/10 border-fuchsia-500/20",
  },
];

export default function Industries() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="relative isolate py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/[0.05] to-transparent" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">
            Industries
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            We&apos;ve built products across a wide range of industries — each
            with its own unique challenges and standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 sm:p-6 text-center hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1.5 cursor-default"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${ind.glow}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 mx-auto transition-transform duration-300 group-hover:scale-110 ${ind.iconBg}`}
              >
                <ind.icon size={22} className={ind.iconColor} />
              </div>
              <p className="text-white font-semibold text-sm mb-0.5">
                {ind.label}
              </p>
              <p className="text-slate-500 text-xs">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
