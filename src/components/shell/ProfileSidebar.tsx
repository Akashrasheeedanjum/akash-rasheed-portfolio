"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Download,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export function ProfileSidebar() {
  const [contactsOpen, setContactsOpen] = useState(false);

  return (
    <aside
      className={cn(
        "glass overflow-hidden rounded-[22px] transition-[max-height] duration-300 lg:sticky lg:top-8 lg:max-h-none",
        contactsOpen ? "max-h-[720px]" : "max-h-[148px] sm:max-h-[160px]",
      )}
    >
      <div className="relative flex items-center gap-4 p-4 sm:gap-5 sm:p-5 lg:flex-col lg:items-center lg:px-6 lg:pb-5 lg:pt-8">
        <div className="relative shrink-0">
          <div className="relative h-[78px] w-[78px] sm:h-[96px] sm:w-[96px] lg:h-[150px] lg:w-[150px]">
            <span
              className="absolute inset-0 rounded-full ring-2 ring-accent/70 ring-offset-2 ring-offset-bg-elevated"
              aria-hidden
            />
            <span className="absolute inset-[4px] overflow-hidden rounded-full bg-bg-soft sm:inset-[5px] lg:inset-[6px]">
              <span className="relative block h-full w-full">
                <Image
                  src={siteConfig.avatarImage}
                  alt={`${siteConfig.name} profile photo`}
                  fill
                  sizes="(min-width: 1024px) 138px, 86px"
                  className="scale-[1.18] object-cover object-[center_12%]"
                  priority
                />
              </span>
            </span>
          </div>
        </div>

        <div className="min-w-0 flex-1 text-left lg:text-center">
          <h1 className="truncate font-[family-name:var(--font-display)] text-lg font-semibold tracking-[-0.03em] text-text sm:text-xl">
            {siteConfig.name}
          </h1>
          <p className="mt-1 inline-flex rounded-full border border-border bg-surface px-3 py-1 text-[0.7rem] text-accent-strong sm:text-xs">
            {siteConfig.title}
          </p>
          <p className="mt-2 hidden font-[family-name:var(--font-mono)] text-[0.7rem] text-text-subtle lg:block">
            {siteConfig.specialization}
          </p>
        </div>

        <button
          type="button"
          className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-border bg-bg-soft px-2.5 py-1.5 text-[0.7rem] text-text-muted lg:hidden"
          aria-expanded={contactsOpen}
          onClick={() => setContactsOpen((v) => !v)}
        >
          {contactsOpen ? "Hide" : "Show"} Contacts
          <ChevronDown
            size={14}
            className={cn(
              "transition-transform",
              contactsOpen && "rotate-180",
            )}
            aria-hidden
          />
        </button>
      </div>

      <div
        className={cn(
          "border-t border-border px-4 pb-5 pt-4 sm:px-5 lg:block lg:px-6",
          contactsOpen ? "block" : "hidden lg:block",
        )}
      >
        <ul className="space-y-3">
          <ContactRow
            icon={<Mail size={16} aria-hidden />}
            label="Email"
            value={siteConfig.email}
            href={`mailto:${siteConfig.email}`}
          />
          {siteConfig.phone ? (
            <ContactRow
              icon={<Phone size={16} aria-hidden />}
              label="Phone"
              value={siteConfig.phone}
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
            />
          ) : null}
          <ContactRow
            icon={<MapPin size={16} aria-hidden />}
            label="Location"
            value={siteConfig.location}
          />
        </ul>

        <div className="mt-5 flex flex-wrap gap-2 lg:justify-center">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-border-strong hover:text-text"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-border-strong hover:text-text"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-border-strong hover:text-text"
            aria-label="Email"
          >
            <Mail size={16} aria-hidden />
          </a>
        </div>

        <a
          href={siteConfig.resumePath}
          download="Akash-Rasheed-Resume.pdf"
          className="btn btn-primary mt-5 w-full !min-h-11 !text-sm"
        >
          <Download size={16} aria-hidden />
          Download Resume
        </a>
      </div>
    </aside>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-accent">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[0.65rem] uppercase tracking-[0.14em] text-text-subtle">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="mt-0.5 block truncate text-sm text-text-muted transition-colors hover:text-text"
          >
            {value}
          </a>
        ) : (
          <p className="mt-0.5 truncate text-sm text-text-muted">{value}</p>
        )}
      </div>
    </li>
  );
}
