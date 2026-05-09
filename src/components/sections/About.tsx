"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion"; //ye new line add ki thi
import { Code2, Layers, Zap, Users } from "lucide-react";

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "2+", label: "Years of Excellence" },
  { value: "15+", label: "Technologies Used" },
];

const pillars = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Full-stack engineering with React, Next.js, Node.js and modern toolchains.",
  },
  {
    icon: Layers,
    title: "UI / UX Design",
    desc: "Research-driven design that converts — beautiful, intuitive interfaces.",
  },
  {
    icon: Zap,
    title: "Performance First",
    desc: "Every product we ship is optimised for Core Web Vitals and SEO.",
  },
  {
    icon: Users,
    title: "Scalable Solutions",
    desc: "Architecture that grows with your business from MVP to enterprise.",
  },
];

const techStack = [
  "Next.js", "React", "TypeScript", "Node.js", "TailwindCSS",
  "Prisma", "PostgreSQL", "Figma", "Framer Motion", "Stripe", "AWS", "Vercel",
];

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
//   }),
// };

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative isolate py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          // initial="hidden"
          // animate={inView ? "visible" : "hidden"}
          // custom={0}
          // variants={fadeUp}
          // className="mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">
            About Us
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-xl">
              We Turn Ideas Into{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Impactful Products
              </span>
            </h2>
            <p className="text-slate-400 max-w-sm leading-relaxed md:text-right">
              Our mission is simple — build digital products that look stunning,
              perform flawlessly, and help businesses grow.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i + 1}
              variants={fadeUp}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 text-center backdrop-blur-sm hover:border-blue-500/30 hover:bg-blue-500/[0.05] transition-all duration-300"
            >
              <p className="text-4xl font-extrabold bg-gradient-to-b from-blue-300 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i + 2}
              variants={fadeUp}
              className="group rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 hover:border-blue-500/40 hover:bg-blue-500/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)]"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <p.icon size={20} className="text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{p.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech stack marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-600 text-center mb-6">
            Our Tech Stack
          </p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-3 animate-marquee w-max">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 px-4 py-2 rounded-lg border border-white/[0.07] bg-white/[0.03] text-slate-500 text-sm whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
