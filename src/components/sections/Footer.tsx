"use client";

import { GitFork, Send, Link2 } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Web Development",
  "UI / UX Design",
  "E-commerce",
  "SaaS Products",
  "Responsive Design",
  "Maintenance & Support",
];

const socials = [
  { icon: GitFork, href: "#", label: "GitHub" },
  { icon: Send, href: "#", label: "Twitter" },
  { icon: Link2, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06]">
      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-6 sm:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mb-4 block"
            >
              <Image src="/logo.png" alt="Nexora Studio" width={140} height={140} className="w-28 h-auto object-contain" />
            </button>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              A premium web development &amp; design agency crafting fast,
              beautiful, and scalable digital experiences.
            </p>
            <div className="flex items-center gap-2.5 mt-5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/[0.07] bg-white/[0.03] flex items-center justify-center text-slate-500 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Services
            </p>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-slate-500">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Get In Touch
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hello@nexorastudio.com"
                  className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200"
                >
                  hello@nexorastudio.com
                </a>
              </li>
              <li>
                <span className="text-sm text-slate-500">Available Worldwide</span>
              </li>
              <li>
                <span className="text-sm text-slate-500">Response within 24h</span>
              </li>
            </ul>

            <button
              onClick={() => scrollTo("#contact")}
              className="mt-6 inline-flex px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_30px_rgba(59,130,246,0.45)]"
            >
              Start a Project →
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Nexora Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-600 text-xs">Available for new projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
