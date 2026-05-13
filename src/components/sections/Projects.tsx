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
  {
    id: 5,
    title: "Venture Web Design",
    category: "Designing",
    description:
      "Get a professional website for $125 and a FREE LOGO. We deliver high-end, responsive designs that convert visitors into loyal customers.",
    tags: ["Web Design", "UI/UX", "Branding", "Logo Design"],
    image: "/venture-design.png",
    color: "from-purple-600/20 to-pink-600/20",
    border: "border-purple-500/20",
    link: "#",
  },
  {
    id: 6,
    title: "YNC Recruitment Flyer",
    category: "Designing",
    description:
      "A high-impact recruitment flyer designed for YNC to attract top-tier WordPress Developers. Bold, modern, and optimized for social media engagement.",
    tags: ["Graphic Design", "Branding", "Social Media", "Typography"],
    image: "/hiring-design.png",
    color: "from-blue-600/20 to-yellow-600/20",
    border: "border-blue-500/20",
    link: "#",
  },
];

function Card({
  project,
  i,
  progress,
  range,
  targetScale,
  onViewDesign,
}: {
  project: (typeof projectsData)[0];
  i: number;
  progress: any;
  range: number[];
  targetScale: number;
  onViewDesign: (img: string) => void;
}) {
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [1, 0.7]);
  const isDesign = project.category === "Designing";

  return (
    <div className="w-full relative z-10 flex items-center justify-center pt-8 sm:pt-32">
      <motion.div
        style={{
          scale,
          top: `calc(5vh + ${i * 20}px)`,
          backgroundColor: '#03030a',
          opacity: 1,
        }}
        className="relative w-full max-w-5xl rounded-[2.5rem] overflow-hidden border border-white/10 p-6 sm:p-10 shadow-[0_40px_80px_rgba(0,0,0,0.9)]"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
          {/* Text Content */}
          <div className="flex flex-col gap-3 sm:gap-6 order-2 md:order-1">
            <div className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              {project.category}
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              {project.title}
            </h3>

            <p className="text-slate-400 text-base leading-relaxed max-w-md font-medium">
              {project.description}
            </p>

            <div className="hidden sm:flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold border border-white/5 bg-white/[0.03] text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            {isDesign ? (
              <button
                onClick={() => onViewDesign(project.image)}
                className="mt-2 sm:mt-6 relative z-50 w-fit inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl text-white font-bold text-sm transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  View Full Design
                  <ArrowUpRight
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  />
                </span>
              </button>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 sm:mt-6 relative z-50 w-fit inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl text-white font-bold text-sm transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  Launch Project
                  <ArrowUpRight
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  />
                </span>
              </a>
            )}
          </div>

          {/* Image Container */}
          <div
            onClick={() => isDesign && onViewDesign(project.image)}
            className={`order-1 md:order-2 h-[240px] sm:h-[380px] md:h-[480px] w-full rounded-[2rem] overflow-hidden relative border border-white/10 bg-black/40 group shadow-2xl ${isDesign ? "cursor-zoom-in" : ""}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-110"
              priority={i === 0}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
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
      ref={sectionRef}
      className="relative py-12 sm:py-32 px-4 sm:px-6 bg-[#03030a] min-h-screen z-10"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-24 text-center mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-500 mb-4">
            Featured Projects
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Selected <span className="text-slate-500 italic font-light">Works</span>
          </h2>
          <p className="text-slate-400 text-base max-w-3xl mx-auto font-medium leading-relaxed">
            Explore a curated showcase of our most defining digital products. Every project in this collection represents our unwavering commitment to pixel-perfect design and sophisticated engineering.
          </p>
        </div>

        {/* Sticky Tabs Container */}
        <div className="sticky top-20 z-[110] flex justify-center w-full mb-6 sm:mb-20 px-4">
          <div className="p-1.5 rounded-2xl bg-[#0a0a1a]/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-500 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-600/10 border border-blue-500/20 rounded-xl"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sticky Stack Cards Container */}
        <div ref={containerRef} className="relative flex flex-col items-center">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, i) => {
                const targetScale = 1 - (filteredProjects.length - i) * 0.05;
                return (
                    <motion.div
                      key={`${activeTab}-${project.id}`}
                      initial={{ opacity: 1, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, transition: { duration: 0.2 } }}
                      className="sticky top-0 min-h-screen flex items-start justify-center w-full"
                      style={{ zIndex: i + 10 }}
                    >
                      <Card
                        i={i}
                        project={project}
                        progress={scrollYProgress}
                        range={[i * (1 / filteredProjects.length), 1]}
                        targetScale={targetScale}
                        onViewDesign={setSelectedImage}
                      />
                    </motion.div>
                  );
                })
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full py-32 flex flex-col items-center justify-center border border-white/10 rounded-[2.5rem] bg-[#05050f]"
                >
                  <p className="text-slate-500 text-lg font-medium">
                    No projects available in this category yet.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[200] flex items-center justify-center bg-black p-4 sm:p-10 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Full Design Preview"
                  fill
                  className="object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
  );
}
