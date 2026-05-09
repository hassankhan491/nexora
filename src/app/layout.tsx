import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexora Studio — We Build Digital Experiences",
  description:
    "Nexora Studio is a premium web development & design agency crafting fast, beautiful, and scalable digital products.",
  keywords: ["web development", "UI/UX design", "Next.js", "agency", "SaaS"],
  openGraph: {
    title: "Nexora Studio",
    description: "Premium web development & design agency.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} overflow-x-clip bg-[#03030a]`}>{children}</body>
    </html>
  );
}
