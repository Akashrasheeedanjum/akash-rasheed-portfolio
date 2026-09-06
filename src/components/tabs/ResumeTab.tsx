import { Download, FileText } from "lucide-react";
import { education, experience } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { siteConfig } from "@/data/site";

export function ResumeTab() {
  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-label !mb-3">Resume</p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold tracking-[-0.03em] text-text">
            Experience & education
          </h2>
        </div>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          <a
            href={siteConfig.resumePath}
            download="Akash-Rasheed-Resume.pdf"
            className="btn btn-primary w-full !min-h-11 !text-sm sm:w-auto"
          >
            <Download size={16} aria-hidden />
            Download PDF
          </a>
          <a
            href="/resume"
            className="btn btn-secondary w-full !min-h-11 !text-sm sm:w-auto"
          >
            <FileText size={16} aria-hidden />
            View Online
          </a>
        </div>
      </header>

      <section>
        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-text-subtle">
          Experience
        </h3>
        <ol className="relative mt-5 space-y-0">
          <span
            className="absolute bottom-4 left-[7px] top-2 w-px bg-border"
            aria-hidden
          />
          {experience.map((item) => (
            <li key={`${item.company}-${item.role}`} className="relative pl-8 pb-8 last:pb-0">
              <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg-elevated" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="font-semibold tracking-[-0.02em] text-text">
                  {item.role}
                </h4>
                <p className="font-[family-name:var(--font-mono)] text-xs text-text-subtle">
                  {item.period}
                </p>
              </div>
              <p className="mt-1 text-sm text-accent-strong">{item.company}</p>
              <ul className="mt-3 space-y-2">
                {item.responsibilities.map((line) => (
                  <li key={line} className="flex gap-2 text-sm text-text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-text-subtle">
          Education
        </h3>
        <div className="mt-4 rounded-2xl border border-border bg-bg-soft/70 p-4 sm:p-5">
          <h4 className="font-semibold text-text">{education.degree}</h4>
          <p className="mt-1 text-sm text-text-muted">{education.institution}</p>
          <p className="mt-2 font-[family-name:var(--font-mono)] text-xs text-text-subtle">
            {education.detail}
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-text-subtle">
          Skills & technologies
        </h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-border bg-bg-soft/70 p-4"
            >
              <h4 className="text-sm font-semibold text-text">{category.title}</h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-flex rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-text-muted">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
