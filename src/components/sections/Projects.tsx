"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Luminary — SaaS Dashboard",
    category: "SaaS / Web App",
    description:
      "A multi-tenant analytics dashboard with real-time data visualisation, role-based access, and a clean design system built for scale.",
    tags: ["Next.js", "TypeScript", "Prisma", "TailwindCSS"],
    color: "from-blue-900/60 to-indigo-900/60",
    accent: "#3b82f6",
    bars: [65, 80, 50, 90, 70],
  },
  {
    title: "Shopfront — E-commerce Platform",
    category: "E-commerce",
    description:
      "A fully custom e-commerce experience with headless CMS integration, smooth checkout flow, and a 40% improvement in conversion rate.",
    tags: ["React", "Shopify", "Node.js", "Stripe"],
    color: "from-cyan-900/60 to-teal-900/60",
    accent: "#06b6d4",
    bars: [45, 70, 85, 55, 95],
  },
  {
    title: "MedTrack — Healthcare Portal",
    category: "Healthcare",
    description:
      "A HIPAA-compliant patient management portal with appointment scheduling, real-time notifications, and telehealth integration.",
    tags: ["Next.js", "PostgreSQL", "WebSockets", "AWS"],
    color: "from-violet-900/60 to-purple-900/60",
    accent: "#8b5cf6",
    bars: [75, 60, 90, 40, 80],
  },
  {
    title: "Launchpad — Startup Platform",
    category: "Platform",
    description:
      "An investor-matching platform for early-stage startups, featuring pitch decks, metrics dashboards, and secure deal-rooms.",
    tags: ["Vue.js", "Firebase", "Algolia", "Figma"],
    color: "from-rose-900/60 to-pink-900/60",
    accent: "#f43f5e",
    bars: [55, 85, 65, 75, 60],
  },
];

function MockPreview({
  accent,
  color,
  index,
  bars,
}: {
  accent: string;
  color: string;
  index: number;
  bars: number[];
}) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-white/[0.07] h-52 sm:h-64 bg-gradient-to-br ${color}`}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Glow blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl opacity-25"
        style={{ background: accent }}
      />

      {/* Mock UI chrome */}
      <div className="absolute inset-3 rounded-xl border border-white/[0.08] bg-black/30 backdrop-blur-sm overflow-hidden flex flex-col">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/[0.06]">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/15" />
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <div className="flex-1 mx-3 h-4 rounded bg-white/[0.06] flex items-center px-2">
            <span className="text-[8px] text-white/20 font-mono">nexorastudio.com</span>
          </div>
        </div>

        {/* Mock content area */}
        <div className="flex-1 p-3 flex flex-col gap-2">
          {/* Header bar */}
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded" style={{ background: `${accent}40` }} />
            <div className="h-2 w-20 rounded-full bg-white/10" />
            <div className="ml-auto h-5 w-12 rounded" style={{ background: `${accent}25` }} />
          </div>

          {/* Content rows */}
          <div className="flex gap-2 flex-1">
            {/* Sidebar */}
            <div className="w-12 flex flex-col gap-1.5 pt-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-2 rounded-full"
                  style={{
                    background: i === 0 ? `${accent}50` : "rgba(255,255,255,0.06)",
                    width: i === 0 ? "80%" : `${60 + i * 5}%`,
                  }}
                />
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col gap-2">
              {/* Bar chart */}
              <div className="flex items-end gap-1 h-14 px-1">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm opacity-70"
                    style={{
                      height: `${h}%`,
                      background: `linear-gradient(to top, ${accent}80, ${accent}30)`,
                    }}
                  />
                ))}
              </div>
              {/* Table rows */}
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex gap-1">
                  <div className="h-2 flex-1 rounded-full bg-white/[0.06]" />
                  <div className="h-2 w-8 rounded-full bg-white/[0.04]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project number */}
      <div className="absolute bottom-5 right-5 text-5xl font-black opacity-[0.07] select-none">
        {String(index + 1).padStart(2, "0")}
      </div>
    </div>
  );
}

function ProjectItem({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative grid md:grid-cols-2 gap-6 md:gap-10 items-center group"
    >
      {/* Timeline dot — desktop only, centered between columns */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 bottom-0 flex-col items-center pointer-events-none z-10">
        <div
          className="w-3 h-3 rounded-full border-2 mt-6 transition-all duration-300 group-hover:scale-150"
          style={{
            borderColor: project.accent,
            boxShadow: `0 0 10px ${project.accent}60`,
          }}
        />
      </div>

      {/* Mobile accent bar */}
      <div
        className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 rounded-full opacity-40"
        style={{ background: project.accent }}
      />

      {/* Text content */}
      <div className={`pl-4 md:pl-0 ${isEven ? "md:order-1" : "md:order-2"}`}>
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3">
          {project.category}
        </span>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:text-blue-200 transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="text-slate-400 leading-relaxed mb-5 text-sm sm:text-base">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg text-xs font-medium border bg-white/[0.04] border-white/10 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group/btn"
          style={{ color: project.accent }}
        >
          View Case Study
          <ArrowUpRight
            size={16}
            className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
          />
        </button>
      </div>

      {/* Preview image */}
      <div className={`pl-4 md:pl-0 ${isEven ? "md:order-2" : "md:order-1"}`}>
        <MockPreview
          accent={project.accent}
          color={project.color}
          index={index}
          bars={project.bars}
        />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="projects" ref={sectionRef} className="relative isolate py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Featured Projects
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Desktop center timeline line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/[0.06]">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-500 to-cyan-500 origin-top rounded-full"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-20">
            {projects.map((project, i) => (
              <ProjectItem key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

