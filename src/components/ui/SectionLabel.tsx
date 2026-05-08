"use client";

interface SectionLabelProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionLabel({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionLabelProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-16 ${alignClass}`}>
      <p className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">
        {eyebrow}
      </p>
      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{title}</h2>
      {subtitle && (
        <p className={`text-slate-400 max-w-xl leading-relaxed ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
