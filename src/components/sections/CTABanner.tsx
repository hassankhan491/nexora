"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative isolate py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/40 via-[#05050f] to-indigo-950/30 p-6 sm:p-10 lg:p-16 text-center overflow-hidden"
        >
          {/* Glow orbs */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-16 right-1/4 w-64 h-64 bg-cyan-500/[0.07] rounded-full blur-[60px] pointer-events-none" />

          {/* Decorative grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] rounded-3xl" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6"
            >
              <Sparkles size={13} />
              Ready to Start?
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-5"
            >
              Let&apos;s Build Something{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-slate-400 text-lg max-w-2xl mx-auto mb-10"
            >
              Have a vision? We have the team and tools to make it real.
              Let&apos;s talk about your project and create something
              remarkable together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center"
            >
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Start a Project
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-white/15 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/5 font-semibold text-sm sm:text-base transition-all duration-200 w-full sm:w-auto"
              >
                View Our Work
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
