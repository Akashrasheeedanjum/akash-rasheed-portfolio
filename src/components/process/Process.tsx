import { processSteps } from "@/data/experience";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section id="process" className="section" aria-labelledby="process-heading">
      <div className="container-page">
        <Reveal>
          <p className="section-label">Engineering Approach</p>
          <h2
            id="process-heading"
            className="max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.85rem,4vw,2.75rem)] font-semibold tracking-[-0.03em] text-text"
          >
            How I Build
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            A clear process from requirements to production—focused on maintainable
            systems, not throwaway demos.
          </p>
        </Reveal>

        {/* Desktop horizontal timeline */}
        <div className="mt-12 hidden lg:block">
          <Reveal>
            <ol className="relative grid grid-cols-5 gap-4">
              <span
                className="absolute left-[10%] right-[10%] top-[18px] h-px bg-border"
                aria-hidden
              />
              {processSteps.map((step) => (
                <li key={step.number} className="relative pt-1">
                  <span className="relative z-10 mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg-elevated font-[family-name:var(--font-mono)] text-xs text-accent">
                    {step.number}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[-0.02em] text-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        {/* Mobile / tablet vertical timeline */}
        <ol className="relative mt-12 space-y-0 lg:hidden">
          <span
            className="absolute bottom-2 left-[15px] top-2 w-px bg-border"
            aria-hidden
          />
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.05}>
              <li className="relative flex gap-4 pb-8 last:pb-0">
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-bg-elevated font-[family-name:var(--font-mono)] text-[0.65rem] text-accent">
                  {step.number}
                </span>
                <div className="pt-0.5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[-0.02em] text-text">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
