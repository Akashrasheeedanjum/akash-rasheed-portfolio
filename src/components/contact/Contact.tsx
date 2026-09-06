"use client";

import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

export function Contact() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name.trim()}`);
    const body = encodeURIComponent(
      `${values.message.trim()}\n\n— ${values.name.trim()}\n${values.email.trim()}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section border-t border-border"
      aria-labelledby="contact-heading"
    >
      <div className="container-page grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <p className="section-label">Contact</p>
          <h2
            id="contact-heading"
            className="font-[family-name:var(--font-display)] text-[clamp(1.85rem,4vw,2.75rem)] font-semibold tracking-[-0.03em] text-text"
          >
            Have a project in mind?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">
            Let&apos;s build something useful.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-border bg-bg-elevated px-5 py-4">
              <p className="text-xs uppercase tracking-[0.14em] text-text-subtle">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 inline-block text-base text-text transition-colors hover:text-accent-strong"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn btn-primary !min-h-11"
              >
                <Mail size={16} aria-hidden />
                Email
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary !min-h-11"
              >
                <Github size={16} aria-hidden />
                GitHub
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary !min-h-11"
              >
                <Linkedin size={16} aria-hidden />
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            className="rounded-[22px] border border-border bg-bg-elevated p-6 md:p-8"
            noValidate
          >
            <div className="space-y-5">
              <Field
                id="name"
                label="Name"
                value={values.name}
                error={errors.name}
                autoComplete="name"
                onChange={(value) => setValues((prev) => ({ ...prev, name: value }))}
              />
              <Field
                id="email"
                label="Email"
                type="email"
                value={values.email}
                error={errors.email}
                autoComplete="email"
                onChange={(value) => setValues((prev) => ({ ...prev, email: value }))}
              />
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, message: event.target.value }))
                  }
                  className="w-full resize-y rounded-xl border border-border bg-bg-soft px-4 py-3 text-text outline-none transition-colors placeholder:text-text-subtle focus:border-accent"
                  placeholder="Tell me about the project or role."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-[#ff7b72]" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-6 w-full sm:w-auto">
              Send Message
              <Send size={16} aria-hidden />
            </button>

            {submitted && (
              <p className="mt-4 text-sm text-success" role="status">
                Opening your email client with the message…
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-text-muted">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-border bg-bg-soft px-4 py-3 text-text outline-none transition-colors placeholder:text-text-subtle focus:border-accent"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#ff7b72]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
