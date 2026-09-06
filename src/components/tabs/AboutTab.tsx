import { Code2, Database, Layers, Puzzle, Server, Workflow } from "lucide-react";
import { services, siteConfig } from "@/data/site";
import { processSteps } from "@/data/experience";

const serviceIcons = [Code2, Server, Database, Puzzle, Workflow, Layers];

export function AboutTab() {
  return (
    <div className="space-y-10">
      <header>
        <p className="section-label !mb-3">About</p>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold tracking-[-0.03em] text-text">
          Building software that solves real problems.
        </h2>
      </header>

      <div className="space-y-4 text-[0.98rem] leading-relaxed text-text-muted sm:text-base">
        {siteConfig.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <p className="font-[family-name:var(--font-mono)] text-sm text-accent-strong">
        {siteConfig.technologies.join(" · ")}
      </p>

      <section>
        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-text-subtle">
          What I do
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] ?? Code2;
            return (
              <li
                key={service.title}
                className="rounded-2xl border border-border bg-bg-soft/70 p-4 transition-colors hover:border-border-strong sm:p-5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-accent">
                  <Icon size={18} aria-hidden />
                </span>
                <h4 className="mt-3 font-semibold tracking-[-0.02em] text-text">
                  {service.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-text-subtle">
          How I build
        </h3>
        <ol className="relative mt-5 space-y-0">
          <span
            className="absolute bottom-3 left-[15px] top-3 w-px bg-border"
            aria-hidden
          />
          {processSteps.map((step) => (
            <li key={step.number} className="relative flex gap-4 pb-6 last:pb-0">
              <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-bg-elevated font-[family-name:var(--font-mono)] text-[0.65rem] text-accent">
                {step.number}
              </span>
              <div>
                <h4 className="font-semibold text-text">{step.title}</h4>
                <p className="mt-1 text-sm text-text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
