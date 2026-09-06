"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { CaseStudyModal } from "@/components/projects/CaseStudyModal";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";

function rankProject(project: Project) {
  if (project.liveUrl) return 0;
  if (project.githubUrl) return 1;
  return 2;
}

export function PortfolioTab() {
  const orderedProjects = useMemo(
    () =>
      [...projects].sort((a, b) => {
        const rank = rankProject(a) - rankProject(b);
        if (rank !== 0) return rank;
        return a.title.localeCompare(b.title);
      }),
    [],
  );

  const categories = useMemo(() => {
    const unique = Array.from(new Set(orderedProjects.map((p) => p.category)));
    return ["All", ...unique];
  }, [orderedProjects]);

  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = orderedProjects.filter(
    (project) => filter === "All" || project.category === filter,
  );

  return (
    <div className="space-y-6 sm:space-y-7">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-label !mb-2">Portfolio</p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold tracking-[-0.03em] text-text">
            Selected work
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-muted">
            Live demos first — then case studies and source code.
          </p>
        </div>

        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary w-full !min-h-11 !text-sm sm:w-auto"
        >
          <GithubIcon size={15} />
          GitHub
          <ExternalLink size={13} aria-hidden />
        </a>
      </header>

      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            className={cn(
              "shrink-0 rounded-full border px-3.5 py-2 text-sm transition-colors",
              filter === category
                ? "border-accent bg-accent-soft text-text"
                : "border-border text-text-muted hover:border-border-strong hover:text-text",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="grid gap-4">
        {visible.map((project) => (
          <li key={project.id}>
            <article className="overflow-hidden rounded-[18px] border border-border bg-bg-soft/50 transition-colors hover:border-border-strong">
              <div
                className="h-1.5 w-full"
                style={{ background: project.accent }}
                aria-hidden
              />
              <div className="p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="rounded-full px-2.5 py-1 text-[0.7rem] font-medium"
                    style={{
                      background: project.accentMuted,
                      color: project.accent,
                    }}
                  >
                    {project.category}
                  </span>
                  {project.liveUrl ? (
                    <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-1 text-[0.7rem] font-medium text-accent-strong">
                      Live
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.03em] text-text">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-text-subtle">{project.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-surface px-2.5 py-1 text-[0.7rem] text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 ? (
                    <span className="rounded-full border border-border px-2.5 py-1 text-[0.7rem] text-text-subtle">
                      +{project.technologies.length - 5}
                    </span>
                  ) : null}
                </div>

                <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary !min-h-11 w-full !px-4 !text-sm sm:w-auto"
                    >
                      Live Project
                      <ExternalLink size={14} aria-hidden />
                    </a>
                  ) : null}

                  <button
                    type="button"
                    onClick={() => setActive(project)}
                    className="btn btn-secondary !min-h-11 w-full !px-4 !text-sm sm:w-auto"
                  >
                    Case Study
                    <ArrowUpRight size={15} aria-hidden />
                  </button>

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary !min-h-11 w-full !px-4 !text-sm sm:w-auto"
                    >
                      <GithubIcon size={14} />
                      Source
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <CaseStudyModal project={active} onClose={() => setActive(null)} />
    </div>
  );
}
