"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { tabs, type TabId } from "@/data/site";
import { ProfileSidebar } from "@/components/shell/ProfileSidebar";
import { TabNav } from "@/components/shell/TabNav";
import { AboutTab } from "@/components/tabs/AboutTab";
import { ResumeTab } from "@/components/tabs/ResumeTab";
import { PortfolioTab } from "@/components/tabs/PortfolioTab";
import { ContactTab } from "@/components/tabs/ContactTab";

const tabContent: Record<TabId, ReactNode> = {
  about: <AboutTab />,
  resume: <ResumeTab />,
  portfolio: <PortfolioTab />,
  contact: <ContactTab />,
};

function getTabFromHash(): TabId {
  if (typeof window === "undefined") return "about";
  const hash = window.location.hash.replace("#", "").toLowerCase();
  const match = tabs.find((tab) => tab.id === hash);
  return match?.id ?? "about";
}

export function PortfolioShell() {
  const [active, setActive] = useState<TabId>("about");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setActive(getTabFromHash());

    const onHashChange = () => setActive(getTabFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const changeTab = (tab: TabId) => {
    setActive(tab);
    window.history.replaceState(null, "", `#${tab}`);
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-glow">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1200px] px-3 py-4 sm:px-5 sm:py-6 lg:px-6 lg:py-8">
        <div className="grid items-start gap-4 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-6 xl:grid-cols-[300px_minmax(0,1fr)]">
          <ProfileSidebar />

          <section className="glass min-h-[70vh] overflow-hidden rounded-[22px]">
            <TabNav active={active} onChange={changeTab} />

            <div className="p-4 sm:p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  {tabContent[active]}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
        </div>

        <p className="mt-6 px-1 pb-4 text-center text-xs text-text-subtle sm:text-left">
          © {new Date().getFullYear()} Akash Rasheed. Full-Stack Software Engineer ·
          Next.js · NestJS · Django
        </p>
      </div>
    </div>
  );
}
