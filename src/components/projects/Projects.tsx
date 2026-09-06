"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyModal } from "@/components/projects/CaseStudyModal";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <div className="container-page">
        <Reveal>
          <p className="section-label">Selected Work</p>
          <h2
            id="work-heading"
            className="max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.85rem,4vw,2.75rem)] font-semibold tracking-[-0.03em] text-text"
          >
            Selected Work
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            A selection of applications and systems I&apos;ve built across web
            development, backend engineering, and business automation.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <ProjectCard project={project} onOpen={() => setActive(project)} />
            </Reveal>
          ))}
        </div>
      </div>

      <CaseStudyModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const previewTechs = project.technologies.slice(0, 4);
  const previewFeatures = project.features.slice(0, 4);

  return (
    <article
      className="group relative overflow-hidden rounded-[22px] border border-border bg-bg-elevated transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-surface-hover"
      style={{
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1 opacity-80 transition-opacity group-hover:opacity-100"
        style={{ background: project.accent }}
        aria-hidden
      />

      <div className="grid gap-8 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8 lg:gap-12">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="rounded-full px-3 py-1 text-xs font-medium"
              style={{
                background: project.accentMuted,
                color: project.accent,
              }}
            >
              {project.category}
            </span>
          </div>

          <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-text md:text-[1.75rem]">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-text-subtle">{project.tagline}</p>
          <p className="mt-4 max-w-xl leading-relaxed text-text-muted">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {previewTechs.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-text-muted"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > previewTechs.length && (
              <span className="rounded-full border border-border px-3 py-1 text-xs text-text-subtle">
                +{project.technologies.length - previewTechs.length}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onOpen}
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-text transition-colors hover:text-accent-strong"
          >
            View Case Study
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </button>
        </div>

        <div className="rounded-2xl border border-border bg-bg-soft/80 p-5">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-text-subtle">
            Key capabilities
          </p>
          <ul className="mt-4 space-y-3">
            {previewFeatures.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm text-text-muted">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: project.accent }}
                  aria-hidden
                />
                {feature}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-text-subtle">
            +{Math.max(project.features.length - previewFeatures.length, 0)} more
            in case study
          </p>
        </div>
      </div>
    </article>
  );
}
