"use client";

import { tabs, type TabId } from "@/data/site";
import { cn } from "@/lib/utils";

interface TabNavProps {
  active: TabId;
  onChange: (tab: TabId) => void;
}

export function TabNav({ active, onChange }: TabNavProps) {
  return (
    <nav
      className="sticky top-0 z-20 border-b border-border bg-[rgba(14,16,20,0.92)] px-2 backdrop-blur-xl sm:px-3 lg:rounded-t-[22px]"
      aria-label="Portfolio sections"
    >
      <ul className="flex items-center gap-0.5 overflow-x-auto scrollbar-none">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <li key={tab.id} className="shrink-0">
              <button
                type="button"
                onClick={() => onChange(tab.id)}
                className={cn(
                  "relative min-h-12 px-3.5 text-sm font-medium transition-colors sm:px-4",
                  isActive ? "text-text" : "text-text-muted hover:text-text",
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {tab.label}
                {isActive ? (
                  <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-accent" />
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
