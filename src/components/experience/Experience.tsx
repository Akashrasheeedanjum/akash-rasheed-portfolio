import { education, experience } from "@/data/experience";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="section border-t border-border"
      aria-labelledby="experience-heading"
    >
      <div className="container-page">
        <Reveal>
          <p className="section-label">Experience</p>
          <h2
            id="experience-heading"
            className="max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.85rem,4vw,2.75rem)] font-semibold tracking-[-0.03em] text-text"
          >
            Professional experience.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 0.05}>
              <article className="relative overflow-hidden rounded-[22px] border border-border bg-bg-elevated p-6 md:p-8">
                <div className="absolute bottom-0 left-0 top-0 w-1 bg-accent" aria-hidden />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.02em] text-text md:text-2xl">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-base text-accent-strong">{item.company}</p>
                  </div>
                  <p className="font-[family-name:var(--font-mono)] text-sm text-text-subtle">
                    {item.period}
                  </p>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {item.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex gap-3 text-sm leading-relaxed text-text-muted md:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <aside className="mt-8 rounded-[18px] border border-border bg-surface px-5 py-5 md:px-6">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-text-subtle">
              Education
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-text">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-text-muted">{education.institution}</p>
            <p className="mt-1 font-[family-name:var(--font-mono)] text-xs text-text-subtle">
              {education.detail}
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
