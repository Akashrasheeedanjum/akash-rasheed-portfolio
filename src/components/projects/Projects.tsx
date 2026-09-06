"use client";

import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyModal } from "@/components/projects/CaseStudyModal";
import { GithubIcon } from "@/components/ui/SocialIcons";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <div className="container-page">
        <Reveal>
          <p className="section-label">Selected Work</p>
          <h2
            id="work-heading"
            className="max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-[-0.03em] text-text"
          >
            Selected Work
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            A selection of applications and systems I&apos;ve built across web
            development, backend engineering, and business automation.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <ProjectCard project={project} onOpen={() => setActive(project)} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 rounded-[20px] border border-border bg-bg-elevated p-5 sm:mt-8 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
            <div className="max-w-xl">
              <p className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[-0.02em] text-text">
                More on GitHub
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                Explore repositories, code samples, and additional projects on my
                GitHub profile.
              </p>
            </div>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary mt-4 w-full sm:mt-0 sm:w-auto"
            >
              <GithubIcon size={16} />
              View GitHub Profile
              <ExternalLink size={14} aria-hidden />
            </a>
          </div>
        </Reveal>
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
  const hasLive = Boolean(project.liveUrl);
  const hasGithub = Boolean(project.githubUrl);

  return (
    <article
      className="group relative overflow-hidden rounded-[18px] border border-border bg-bg-elevated transition-all duration-300 hover:border-border-strong hover:bg-surface-hover sm:rounded-[22px] sm:hover:-translate-y-1"
      style={{
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1 opacity-80 transition-opacity group-hover:opacity-100"
        style={{ background: project.accent }}
        aria-hidden
      />

      <div className="grid gap-6 p-4 sm:gap-8 sm:p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8 lg:gap-12">
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

          <h3 className="mt-3 font-[family-name:var(--font-display)] text-[1.35rem] font-semibold tracking-[-0.03em] text-text sm:mt-4 sm:text-2xl md:text-[1.75rem]">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-text-subtle">{project.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-text-muted sm:mt-4 sm:text-base">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
            {previewTechs.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-surface px-2.5 py-1 text-[0.7rem] text-text-muted sm:px-3 sm:text-xs"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > previewTechs.length && (
              <span className="rounded-full border border-border px-2.5 py-1 text-[0.7rem] text-text-subtle sm:px-3 sm:text-xs">
                +{project.technologies.length - previewTechs.length}
              </span>
            )}
          </div>

          <div className="mt-5 flex flex-col gap-2 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <button
              type="button"
              onClick={onOpen}
              className="btn btn-secondary !min-h-11 w-full justify-center !px-4 !text-sm sm:w-auto"
            >
              View Case Study
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </button>

            {hasLive && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary !min-h-11 w-full justify-center !px-4 !text-sm sm:w-auto"
              >
                Live Project
                <ExternalLink size={14} aria-hidden />
              </a>
            )}

            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary !min-h-11 w-full justify-center !px-4 !text-sm sm:w-auto"
              >
                <GithubIcon size={14} />
                Source Code
              </a>
            )}

            {!hasLive && !hasGithub && (
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-2 text-sm font-medium text-text-muted transition-colors hover:text-accent-strong sm:justify-start"
              >
                <GithubIcon size={14} />
                See related work on GitHub
              </a>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-bg-soft/80 p-4 sm:p-5">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-text-subtle">
            Key capabilities
          </p>
          <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
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
          <p className="mt-4 text-xs text-text-subtle sm:mt-5">
            +{Math.max(project.features.length - previewFeatures.length, 0)} more
            in case study
          </p>
        </div>
      </div>
    </article>
  );
}
