"use client";

import { motion } from "framer-motion";

export default function BlurredAura() {
  return (
    <div className="fixed inset-0 z-[-10] pointer-events-none overflow-hidden">
      {/* Top-Left: Cyan Glow */}
      <motion.div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-cyan-500 opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Middle-Right: Deep Green Glow */}
      <motion.div
        className="absolute top-1/4 -right-48 w-[800px] h-[800px] rounded-full bg-[#0d9488] opacity-15 blur-[120px]"
        animate={{
          scale: [1, 1.05, 1],
          x: [0, -20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom-Left: Subtle Teal Flare */}
      <motion.div
        className="absolute -bottom-48 -left-48 w-[700px] h-[700px] rounded-full bg-[#008080] opacity-10 blur-[100px]"
        animate={{
          scale: [1, 1.03, 1],
          x: [0, 15, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
