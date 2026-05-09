"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const tabs = ["All", "Development", "Designing"];

const projectsData = [
  {
    id: 1,
    title: "Gsc Gradient",
    category: "Development",
    description:
      "A comprehensive educational platform connecting scholars globally with real-time features, interactive modules, and deep analytics built for massive scale.",
    tags: ["Next.js", "TypeScript", "Prisma", "TailwindCSS"],
    image: "/GSC-gradient.png",
    color: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-500/20",
    link: "https://gradient-cont.com/",
  },
  {
    id: 2,
    title: "Idiom Similies App",
    category: "Development",
    description:
      "An intuitive and beautifully designed web application helping students learn English idioms and similes through gamified, interactive lessons.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    image: "/idiom_similies.png.png",
    color: "from-cyan-500/20 to-teal-500/20",
    border: "border-cyan-500/20",
    link: "https://idiomsimile.com/",
  },
  {
    id: 3,
    title: "Burqora E-Commerce",
    category: "Development",
    description:
      "An elegant and highly performant e-commerce storefront tailored for high-end fashion, featuring headless architecture and a seamless checkout flow.",
    tags: ["Next.js", "Shopify", "Framer Motion", "Stripe"],
    image: "/Burqora.png",
    color: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/20",
    link: "https://burqora.io/",
  },
  {
    id: 4,
    title: "Tes Pire Dashboard",
    category: "Development",
    description:
      "A modern SaaS analytics dashboard for monitoring enterprise testing environments efficiently, featuring real-time data visualization.",
    tags: ["Vue.js", "Firebase", "Chart.js", "TailwindCSS"],
    image: "/Tes Pire.png",
    color: "from-rose-500/20 to-pink-500/20",
    border: "border-rose-500/20",
    link: "https://tes-pire.com/",
  },
];

function Card({
  project,
  i,
  progress,
  range,
  targetScale,
}: {
  project: (typeof projectsData)[0];
  i: number;
  progress: any;
  range: number[];
  targetScale: number;
}) {
  const containerRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [1, 0.5]);

  return (
    <div className="w-full relative z-10 flex items-center justify-center">
      <motion.div
        style={{
          scale,
          opacity,
          top: `calc(5vh + ${i * 30}px)`,
        }}
        className={`relative w-full max-w-5xl rounded-3xl overflow-hidden border border-slate-400/20 bg-[#0a0a1a]/80 backdrop-blur-xl p-6 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]`}
      >
        {/* Background Glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 pointer-events-none`}
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
          {/* Text Content */}
          <div className="flex flex-col gap-5 order-2 md:order-1">
            <div className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold tracking-wide uppercase text-slate-300">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              {project.category}
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              {project.title}
            </h3>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10 bg-white/[0.04] text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 relative z-50 w-fit inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/[0.05] backdrop-blur-xl text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.1] hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                View Project
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </span>
            </a>
          </div>

          {/* Image Container */}
          <div className="order-1 md:order-2 h-[250px] sm:h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden relative border border-white/10 bg-black/40 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter projects based on active tab
  const filteredProjects = projectsData.filter((p) =>
    activeTab === "All" ? true : p.category === activeTab
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      className="relative isolate py-24 sm:py-32 px-4 sm:px-6 bg-[#03030a]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">
              Our Portfolio
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Selected Works
            </h2>
            <p className="text-slate-400 text-lg">
              We engineer scalable platforms and design premium digital experiences
              that drive real business results.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] w-fit">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-300 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 border border-white/10 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sticky Stack Cards Container */}
        <div ref={containerRef} className="relative mt-10 flex flex-col">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, i) => {
                const targetScale = 1 - (filteredProjects.length - i) * 0.04;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="sticky top-0 h-screen flex items-center justify-center w-full"
                    style={{ zIndex: i }}
                  >
                    <Card
                      i={i}
                      project={project}
                      progress={scrollYProgress}
                      range={[i * (1 / filteredProjects.length), 1]}
                      targetScale={targetScale}
                    />
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full py-32 flex flex-col items-center justify-center border border-white/10 rounded-3xl bg-white/[0.02]"
              >
                <p className="text-slate-400 text-lg">
                  No projects available in this category yet.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
