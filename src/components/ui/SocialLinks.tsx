"use client";

import React from "react";

/**
 * Custom SVG Icons - Inka build fail hone se koi talluq nahi
 */
const Icons = {
  Instagram: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  ),
  TikTok: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
  ),
  Facebook: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  ),
  LinkedIn: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  ),
};

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/nex_orastudio.official", icon: Icons.Instagram, hoverColor: "hover:text-pink-500" },
  { name: "TikTok", href: "https://www.tiktok.com/@nexorastudio02", icon: Icons.TikTok, hoverColor: "hover:text-white" },
  { name: "Facebook", href: "#", icon: Icons.Facebook, hoverColor: "hover:text-blue-600" },
  { name: "LinkedIn", href: "#", icon: Icons.LinkedIn, hoverColor: "hover:text-blue-400" },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group relative p-3 rounded-xl border border-white/10 
              bg-white/[0.03] backdrop-blur-sm transition-all duration-300 
              hover:scale-110 hover:border-white/20 hover:bg-white/[0.08]
              ${link.hoverColor} text-slate-400
            `}
          >
            <Icon />
            <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 bg-current -z-10`} />
          </a>
        );
      })}
    </div>
  );
}