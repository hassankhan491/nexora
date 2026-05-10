"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

export default function Background() {
  const { scrollYProgress } = useScroll();

  // Scroll mapping for Top-Left Color Blob
  // Using Soft Cyan and Deep Teal
  const color1 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "rgba(8, 145, 178, 0.15)",  // Hero: Soft Cyan
      "rgba(0, 128, 128, 0.15)",  // Projects: Deep Teal
      "rgba(0, 128, 128, 0.15)",
    ]
  );

  // Scroll mapping for Bottom-Right Color Blob
  const color2 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "rgba(0, 128, 128, 0.15)",  // Hero: Deep Teal
      "rgba(8, 145, 178, 0.15)",  // Projects: Soft Cyan
      "rgba(8, 145, 178, 0.15)",
    ]
  );

  // Scroll mapping for Center Color Blob
  // Very muted dark teal/cyan mix for depth
  const color3 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "rgba(6, 182, 212, 0.08)",  // Hero: Very soft Cyan
      "rgba(0, 128, 128, 0.12)",   // Projects: Deep Teal
      "rgba(0, 128, 128, 0.12)",
    ]
  );

  // Combine into a radial-gradient mesh
  const backgroundImage = useMotionTemplate`
    radial-gradient(circle at 15% 20%, ${color1} 0%, transparent 50%),
    radial-gradient(circle at 85% 80%, ${color2} 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, ${color3} 0%, transparent 60%)
  `;

  return (
    <motion.div
      style={{ backgroundImage }}
      className="fixed inset-0 z-[-50] pointer-events-none blur-3xl transition-colors duration-500"
    />
  );
}
