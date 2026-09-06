import type { ReactNode } from "react";
import { Mail } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border pb-10 pt-12" role="contentinfo">
      <div className="container-page">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[-0.02em] text-text">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-text-muted">{siteConfig.title}</p>
            <p className="mt-3 font-[family-name:var(--font-mono)] text-xs text-text-subtle">
              {siteConfig.specialization}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3">
            <SocialLink href={siteConfig.github} label="GitHub">
              <GithubIcon size={18} />
            </SocialLink>
            <SocialLink href={siteConfig.linkedin} label="LinkedIn">
              <LinkedinIcon size={18} />
            </SocialLink>
            <SocialLink href={`mailto:${siteConfig.email}`} label="Email">
              <Mail size={18} aria-hidden />
            </SocialLink>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-sm text-text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs">Built with Next.js · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-border-strong hover:text-text"
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
