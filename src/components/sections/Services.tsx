"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  Palette,
  ShoppingCart,
  BarChart3,
  Smartphone,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Custom, performant web applications built with Next.js, React, and modern backend technologies.",
    glow: "rgba(59,130,246,0.15)",
    border: "rgba(59,130,246,0.3)",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Pixel-perfect interfaces designed in Figma — from wireframes to fully interactive prototypes.",
    glow: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.3)",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "High-converting online stores with headless CMS, Stripe integration, and seamless checkout.",
    glow: "rgba(139,92,246,0.12)",
    border: "rgba(139,92,246,0.3)",
  },
  {
    icon: BarChart3,
    title: "SaaS Products",
    desc: "Multi-tenant SaaS platforms with auth, billing, dashboards, and scalable cloud infrastructure.",
    glow: "rgba(59,130,246,0.12)",
    border: "rgba(59,130,246,0.3)",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Mobile-first, fully responsive layouts that look and perform beautifully on every device.",
    glow: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.3)",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    desc: "Ongoing support, performance monitoring, security audits, and rapid deployment pipelines.",
    glow: "rgba(34,197,94,0.1)",
    border: "rgba(34,197,94,0.25)",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative isolate py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
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
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            End-to-end digital solutions tailored for startups, scale-ups, and
            enterprises.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border bg-white/[0.03] p-5 sm:p-7 overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1.5"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  service.border;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${service.glow}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${service.glow} 0%, transparent 60%)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{
                    background: service.glow,
                    border: `1px solid ${service.border}`,
                  }}
                >
                  <service.icon size={22} className="text-white/80" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
