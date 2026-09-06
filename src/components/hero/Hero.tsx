"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";

const stackHints = [
  { label: "Frontend", value: "Next.js / React" },
  { label: "Backend", value: "NestJS / Django" },
  { label: "Database", value: "MongoDB / PostgreSQL" },
] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-glow pt-[calc(var(--nav-height)+1.5rem)] pb-12 sm:pt-[calc(var(--nav-height)+2.5rem)] sm:pb-16 md:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <div>
          <motion.p
            className="section-label !mb-5"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            Full-Stack Software Engineer
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="font-[family-name:var(--font-display)] text-[clamp(2.35rem,6vw,4.25rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-text"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            I build scalable digital products.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-text-muted md:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            I&apos;m {siteConfig.name}, a Full-Stack Software Engineer specializing
            in Next.js, NestJS, and Django. I build modern interfaces, scalable
            APIs, backend systems, and production-ready applications.
          </motion.p>

          <motion.p
            className="mt-5 break-words font-[family-name:var(--font-mono)] text-[0.78rem] leading-relaxed tracking-wide text-accent-strong sm:text-sm"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
          >
            {siteConfig.technologies.join(" · ")}
          </motion.p>

          <motion.div
            className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 }}
          >
            <a href="#work" className="btn btn-primary w-full sm:w-auto">
              View My Work
              <ArrowDownRight size={18} aria-hidden />
            </a>
            <a href="#resume" className="btn btn-secondary w-full sm:w-auto">
              Download Resume
            </a>
            <a href="#contact" className="btn btn-secondary w-full sm:w-auto">
              Let&apos;s Talk
              <ArrowRight size={18} aria-hidden />
            </a>
          </motion.div>

          <motion.ul
            className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
          >
            {stackHints.map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border border-border bg-surface px-4 py-3"
              >
                <p className="text-[0.7rem] uppercase tracking-[0.14em] text-text-subtle">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-medium text-text">{item.value}</p>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          aria-hidden
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[28px] bg-[radial-gradient(circle_at_30%_20%,rgba(79,140,255,0.18),transparent_55%)] blur-2xl" />

      <div className="relative overflow-hidden rounded-[22px] border border-border bg-bg-elevated shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-[family-name:var(--font-mono)] text-xs text-text-subtle">
            architecture.ts
          </span>
        </div>

        <pre className="overflow-x-auto p-5 font-[family-name:var(--font-mono)] text-[0.78rem] leading-6 text-text-muted md:text-[0.82rem]">
          <code>
            <span className="text-accent-strong">const</span> stack = {"{"}
            {"\n"}
            {"  "}frontend: <span className="text-[#7dd3c7]">&quot;Next.js&quot;</span>,
            {"\n"}
            {"  "}backend: <span className="text-[#7dd3c7]">&quot;NestJS | Django&quot;</span>,
            {"\n"}
            {"  "}data: <span className="text-[#7dd3c7]">&quot;MongoDB | PostgreSQL&quot;</span>,
            {"\n"}
            {"  "}focus: <span className="text-[#7dd3c7]">&quot;production systems&quot;</span>,
            {"\n"}
            {"}"}
            {"\n\n"}
            <span className="text-text-subtle">{"// Reliable. Maintainable. Scalable."}</span>
            {"\n"}
            <span className="text-accent-strong">export</span> {"function"} build() {"{"}
            {"\n"}
            {"  "}
            <span className="text-accent-strong">return</span> ship(stack)
            {"\n"}
            {"}"}
          </code>
        </pre>

        <div className="grid grid-cols-3 gap-px border-t border-border bg-border">
          {[
            ["API", "REST · Auth"],
            ["Data", "SQL · NoSQL"],
            ["Ship", "Cloud · CI"],
          ].map(([title, desc]) => (
            <div key={title} className="bg-bg-soft px-3 py-3">
              <p className="text-xs font-medium text-text">{title}</p>
              <p className="mt-0.5 text-[0.7rem] text-text-subtle">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
