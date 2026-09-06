"use client";

import { FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";
import { siteConfig } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

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

  if (!values.name.trim()) errors.name = "Please enter your name.";
  else if (values.name.trim().length < 2)
    errors.name = "Name must be at least 2 characters.";

  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";

  if (!values.message.trim()) errors.message = "Please enter a message.";
  else if (values.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";

  return errors;
}

export function ContactTab() {
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

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${values.name.trim()}`,
    );
    const body = encodeURIComponent(
      `${values.message.trim()}\n\n— ${values.name.trim()}\n${values.email.trim()}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="space-y-8">
      <header>
        <p className="section-label !mb-3">Contact</p>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold tracking-[-0.03em] text-text">
          Have a project in mind?
        </h2>
        <p className="mt-3 text-sm text-text-muted sm:text-base">
          Let&apos;s build something useful.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-3 rounded-2xl border border-border bg-bg-soft/70 px-4 py-3 text-sm text-text-muted transition-colors hover:border-border-strong hover:text-text"
          >
            <Mail size={16} aria-hidden />
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-border bg-bg-soft/70 px-4 py-3 text-sm text-text-muted transition-colors hover:border-border-strong hover:text-text"
          >
            <GithubIcon size={16} />
            GitHub Profile
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-border bg-bg-soft/70 px-4 py-3 text-sm text-text-muted transition-colors hover:border-border-strong hover:text-text"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-[18px] border border-border bg-bg-soft/50 p-4 sm:p-5"
          noValidate
        >
          <div className="space-y-4">
            <Field
              id="contact-name"
              label="Name"
              value={values.name}
              error={errors.name}
              autoComplete="name"
              onChange={(value) => setValues((p) => ({ ...p, name: value }))}
            />
            <Field
              id="contact-email"
              label="Email"
              type="email"
              value={values.email}
              error={errors.email}
              autoComplete="email"
              onChange={(value) => setValues((p) => ({ ...p, email: value }))}
            />
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm text-text-muted"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={values.message}
                onChange={(event) =>
                  setValues((p) => ({ ...p, message: event.target.value }))
                }
                className="w-full resize-y rounded-xl border border-border bg-bg-elevated px-4 py-3 text-text outline-none transition-colors placeholder:text-text-subtle focus:border-accent"
                placeholder="Tell me about the project or role."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
              />
              {errors.message ? (
                <p
                  id="contact-message-error"
                  className="mt-2 text-sm text-[#ff7b72]"
                  role="alert"
                >
                  {errors.message}
                </p>
              ) : null}
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-5 w-full sm:w-auto">
            Send Message
            <Send size={16} aria-hidden />
          </button>

          {submitted ? (
            <p className="mt-3 text-sm text-success" role="status">
              Opening your email client with the message…
            </p>
          ) : null}
        </form>
      </div>
    </div>
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
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-border bg-bg-elevated px-4 py-3 text-text outline-none transition-colors focus:border-accent"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#ff7b72]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
