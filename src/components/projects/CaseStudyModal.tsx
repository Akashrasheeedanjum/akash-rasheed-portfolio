"use client";

import { useEffect, useId, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import type { Project } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { GithubIcon } from "@/components/ui/SocialIcons";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close case study"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[24px] border border-border bg-bg-elevated sm:rounded-[24px]"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 20 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="border-b border-border px-5 py-5 sm:px-8"
              style={{
                background: `linear-gradient(135deg, ${project.accentMuted}, transparent 70%)`,
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-text-subtle">
                    Case Study · {project.category}
                  </p>
                  <h2
                    id={titleId}
                    className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-text sm:text-3xl"
                  >
                    {project.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-text-muted sm:text-base">
                    {project.tagline}
                  </p>
                  <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary !min-h-10 !px-4 !text-sm"
                      >
                        Live Project
                        <ExternalLink size={14} aria-hidden />
                      </a>
                    ) : null}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary !min-h-10 !px-4 !text-sm"
                      >
                        <GithubIcon size={14} />
                        Source Code
                      </a>
                    ) : (
                      <a
                        href={siteConfig.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary !min-h-10 !px-4 !text-sm"
                      >
                        <GithubIcon size={14} />
                        GitHub Profile
                      </a>
                    )}
                  </div>
                </div>

                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:text-text"
                  aria-label="Close"
                >
                  <X size={18} aria-hidden />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
              <CaseBlock title="Overview">{project.caseStudy.overview}</CaseBlock>
              <CaseBlock title="Problem">{project.caseStudy.problem}</CaseBlock>
              <CaseBlock title="Solution">{project.caseStudy.solution}</CaseBlock>

              <CaseList title="My Contribution" items={project.caseStudy.contribution} />
              <CaseList title="Architecture" items={project.caseStudy.architecture} />

              <div className="mb-7">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-text-subtle">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.caseStudy.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <CaseList title="Key Features" items={project.caseStudy.features} />
              <CaseList title="Technical Challenges" items={project.caseStudy.challenges} />
              <CaseBlock title="Result">{project.caseStudy.result}</CaseBlock>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CaseBlock({ title, children }: { title: string; children: string }) {
  return (
    <section className="mb-7">
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-text-subtle">
        {title}
      </h3>
      <p className="leading-relaxed text-text-muted">{children}</p>
    </section>
  );
}

function CaseList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mb-7">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-text-subtle">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-text-muted">
            <ArrowUpRight
              size={16}
              className="mt-1 shrink-0 text-accent"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
