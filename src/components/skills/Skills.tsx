import { skillCategories } from "@/data/skills";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container-page">
        <Reveal>
          <p className="section-label">Technical Skills</p>
          <h2
            id="skills-heading"
            className="max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.85rem,4vw,2.75rem)] font-semibold tracking-[-0.03em] text-text"
          >
            Technologies I use to ship software.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            Categorized by the layers I work across—from interfaces and APIs to
            data stores, cloud, and integrations.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.05}>
              <div className="h-full rounded-[20px] border border-border bg-bg-elevated p-5 transition-colors duration-300 hover:border-border-strong hover:bg-surface-hover md:p-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[-0.02em] text-text">
                  {category.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li key={skill}>
                      <span className="inline-flex rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-text-muted transition-colors duration-200 hover:border-accent/40 hover:text-text">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
