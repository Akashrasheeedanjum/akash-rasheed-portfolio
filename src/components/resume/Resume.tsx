import { Download, FileText, GraduationCap, Briefcase } from "lucide-react";
import { education, experience } from "@/data/experience";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function Resume() {
  return (
    <section
      id="resume"
      className="section border-t border-border"
      aria-labelledby="resume-heading"
    >
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="section-label">Resume</p>
              <h2
                id="resume-heading"
                className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-[-0.03em] text-text"
              >
                Resume
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">
                Education, experience, and a downloadable résumé you can share
                with recruiters and clients.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={siteConfig.resumePath}
                download="Akash-Rasheed-Resume.pdf"
                className="btn btn-primary w-full sm:w-auto"
              >
                <Download size={18} aria-hidden />
                Download Resume
              </a>
              <a
                href="/resume"
                className="btn btn-secondary w-full sm:w-auto"
              >
                <FileText size={18} aria-hidden />
                View Online
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[20px] border border-border bg-bg-elevated p-5 sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-accent">
                  <GraduationCap size={18} aria-hidden />
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[-0.02em] text-text">
                  Education
                </h3>
              </div>
              <div className="rounded-2xl border border-border bg-bg-soft/70 p-4 sm:p-5">
                <p className="text-base font-semibold text-text">{education.degree}</p>
                <p className="mt-1 text-sm text-text-muted">{education.institution}</p>
                <p className="mt-2 font-[family-name:var(--font-mono)] text-xs text-text-subtle">
                  {education.detail}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="h-full rounded-[20px] border border-border bg-bg-elevated p-5 sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-accent">
                  <Briefcase size={18} aria-hidden />
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[-0.02em] text-text">
                  Experience Snapshot
                </h3>
              </div>
              <ul className="space-y-4">
                {experience.map((item) => (
                  <li
                    key={`${item.company}-${item.role}`}
                    className="rounded-2xl border border-border bg-bg-soft/70 p-4 sm:p-5"
                  >
                    <p className="text-base font-semibold text-text">{item.role}</p>
                    <p className="mt-1 text-sm text-accent-strong">{item.company}</p>
                    <p className="mt-2 font-[family-name:var(--font-mono)] text-xs text-text-subtle">
                      {item.period}
                    </p>
                  </li>
                ))}
              </ul>
              <a
                href="#experience"
                className="mt-4 inline-flex text-sm font-medium text-text-muted transition-colors hover:text-accent-strong"
              >
                See full experience →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
