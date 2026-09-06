import { Reveal } from "@/components/ui/Reveal";

const pipeline = [
  { label: "Frontend", detail: "Next.js / React" },
  { label: "Backend", detail: "NestJS / Django" },
  { label: "Database", detail: "Mongo / SQL" },
  { label: "Infrastructure", detail: "Cloud / Deploy" },
] as const;

export function About() {
  return (
    <section id="about" className="section border-t border-border" aria-labelledby="about-heading">
      <div className="container-page grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <p className="section-label">About</p>
          <h2
            id="about-heading"
            className="max-w-xl font-[family-name:var(--font-display)] text-[clamp(1.85rem,4vw,2.75rem)] font-semibold tracking-[-0.03em] text-text"
          >
            Building software that solves real problems.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-text-muted md:text-lg">
            <p>
              I&apos;m a Full-Stack Software Engineer focused on building reliable,
              scalable web applications and backend systems.
            </p>
            <p>
              I work primarily with Next.js, NestJS, and Django, building everything
              from responsive user interfaces and REST APIs to database architecture,
              authentication, payments, and third-party integrations.
            </p>
            <p>
              I enjoy turning complex requirements into simple, maintainable and
              production-ready software.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[22px] border border-border bg-bg-elevated p-6 md:p-7">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-text-subtle">
              Delivery stack
            </p>
            <ol className="mt-6 space-y-0">
              {pipeline.map((step, index) => (
                <li key={step.label} className="relative flex gap-4 pb-6 last:pb-0">
                  {index < pipeline.length - 1 && (
                    <span
                      className="absolute left-[11px] top-7 h-[calc(100%-1.25rem)] w-px bg-border"
                      aria-hidden
                    />
                  )}
                  <span className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border bg-bg-soft text-[0.65rem] font-semibold text-accent">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium text-text">{step.label}</p>
                    <p className="mt-0.5 text-sm text-text-muted">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-2 border-t border-border pt-5 font-[family-name:var(--font-mono)] text-xs text-text-subtle">
              Frontend → Backend → Database → Infrastructure
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
