"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin, Clock } from "lucide-react";

const info = [
  { icon: Mail, label: "Email", value: "hello@nexorastudio.com" },
  { icon: MapPin, label: "Location", value: "Available Worldwide" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "eb4130e0-dc13-48e5-ad2e-c969ac5a97f9",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        console.error("Web3Forms Error:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative isolate py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/[0.06] rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Build Something
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have a project in mind? Tell us about it and we&apos;ll get back to you
            within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            {info.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 hover:border-blue-500/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-slate-200 text-sm font-medium">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 mt-2">
              <p className="text-slate-400 text-sm leading-relaxed">
                We work with clients globally. Whether you&apos;re a startup or an
                established business, we&apos;d love to hear from you.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 sm:p-7 flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-400 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-slate-200 placeholder-slate-600 outline-none text-sm transition-all duration-200 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 focus:bg-blue-500/[0.04]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-400 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-slate-200 placeholder-slate-600 outline-none text-sm transition-all duration-200 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 focus:bg-blue-500/[0.04]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-slate-200 placeholder-slate-600 outline-none text-sm transition-all duration-200 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 focus:bg-blue-500/[0.04] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
            >
              {status === "sending" ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send
                    size={15}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </>
              )}
            </button>

            {status === "sent" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-emerald-400 text-sm font-medium"
              >
                ✅ Message sent! We&apos;ll be in touch soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-red-400 text-sm font-medium"
              >
                ❌ Something went wrong. Please try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
