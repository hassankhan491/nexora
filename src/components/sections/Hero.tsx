"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const GRID_SIZE = 35;

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "2+", label: "Years Active" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let mouse = { x: -999, y: -999 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = Math.ceil(canvas.width / GRID_SIZE) + 1;
      const rows = Math.ceil(canvas.height / GRID_SIZE) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * GRID_SIZE;
          const y = j * GRID_SIZE;
          const dist = Math.hypot(mouse.x - x, mouse.y - y);
          const maxDist = 160;
          const alpha = dist < maxDist ? 0.25 * (1 - dist / maxDist) : 0.045;
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
          ctx.fill();
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate min-h-[calc(100svh-4rem)] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      />

      {/* Background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,90vw)] h-[min(600px,90vw)] rounded-full bg-blue-600/[0.08] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-cyan-500/[0.06] blur-[80px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse flex-shrink-0" />
          <span>Premium Web Development &amp; Design Agency</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-8xl font-extrabold leading-[1.08] tracking-tight text-white mb-5 sm:mb-6"
        >
          We Build{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Digital
            </span>
          </span>
          <br />
          Experiences
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm sm:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
        >
          From concept to deployment — we design and engineer scalable,
          high-performance web products that drive real business results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-12"
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:shadow-[0_0_50px_rgba(59,130,246,0.55)] hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            View Our Work
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-white/20 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/5 font-semibold text-sm sm:text-base transition-all duration-200 w-full sm:w-auto justify-center"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Stats pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="grid grid-cols-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm divide-x divide-white/[0.07] overflow-hidden w-full max-w-xs sm:max-w-sm mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 sm:px-6 py-3 sm:py-4 text-center">
              <p className="text-lg sm:text-2xl font-extrabold bg-gradient-to-b from-blue-300 to-cyan-400 bg-clip-text text-transparent leading-tight">
                {stat.value}
              </p>
              <p className="text-slate-500 text-[9px] sm:text-xs mt-0.5 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
