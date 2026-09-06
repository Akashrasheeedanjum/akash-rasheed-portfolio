import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { education, experience } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${siteConfig.name} — ${siteConfig.title}`,
  robots: { index: false, follow: true },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-bg px-4 py-8 text-text sm:px-6 sm:py-10">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 print:hidden sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/#resume"
          className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
        >
          <ArrowLeft size={16} aria-hidden />
          Back to portfolio
        </Link>
        <a
          href={siteConfig.resumePath}
          download="Akash-Rasheed-Resume.pdf"
          className="btn btn-primary w-full sm:w-auto"
        >
          <Download size={16} aria-hidden />
          Download PDF
        </a>
      </div>

      <article className="mx-auto mt-6 max-w-3xl rounded-[22px] border border-border bg-bg-elevated p-5 sm:mt-8 sm:p-8 print:mt-0 print:border-0 print:bg-white print:p-0 print:text-black">
        <header className="border-b border-border pb-6 print:border-neutral-300">
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.03em] print:text-black">
            {siteConfig.name}
          </h1>
          <p className="mt-1 text-accent-strong print:text-neutral-700">
            {siteConfig.title}
          </p>
          <p className="mt-3 text-sm text-text-muted print:text-neutral-600">
            {siteConfig.specialization}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-text-muted print:text-neutral-700">
            {siteConfig.positioning}
          </p>
          <ul className="mt-4 flex flex-col gap-1 text-sm text-text-subtle print:text-neutral-600 sm:flex-row sm:flex-wrap sm:gap-x-4">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-text print:text-neutral-700">
                {siteConfig.email}
              </a>
            </li>
            {siteConfig.location ? <li>{siteConfig.location}</li> : null}
            <li>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text print:text-neutral-700"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text print:text-neutral-700"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </header>

        <section className="mt-7">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-text-subtle print:text-neutral-500">
            Experience
          </h2>
          <div className="mt-4 space-y-5">
            {experience.map((item) => (
              <div key={`${item.company}-${item.role}`}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold text-text print:text-black">
                    {item.role} · {item.company}
                  </h3>
                  <p className="font-[family-name:var(--font-mono)] text-xs text-text-subtle print:text-neutral-500">
                    {item.period}
                  </p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text-muted print:text-neutral-700">
                  {item.responsibilities.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-text-subtle print:text-neutral-500">
            Education
          </h2>
          <div className="mt-3">
            <h3 className="font-semibold text-text print:text-black">{education.degree}</h3>
            <p className="text-sm text-text-muted print:text-neutral-700">
              {education.institution}
            </p>
            <p className="mt-1 font-[family-name:var(--font-mono)] text-xs text-text-subtle print:text-neutral-500">
              {education.detail}
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-text-subtle print:text-neutral-500">
            Selected Projects
          </h2>
          <ul className="mt-3 space-y-3">
            {projects.map((project) => (
              <li key={project.id} className="text-sm">
                <p className="font-semibold text-text print:text-black">{project.title}</p>
                <p className="text-text-muted print:text-neutral-700">{project.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-text-subtle print:text-neutral-500">
            Skills
          </h2>
          <div className="mt-3 space-y-3">
            {skillCategories.map((category) => (
              <p key={category.title} className="text-sm text-text-muted print:text-neutral-700">
                <span className="font-semibold text-text print:text-black">
                  {category.title}:
                </span>{" "}
                {category.skills.join(", ")}
              </p>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
