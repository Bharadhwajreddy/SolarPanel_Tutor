"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/content";

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="text-sm">
      <p className="mb-3 font-display text-xs font-semibold uppercase tracking-wider text-night-500 dark:text-night-400">
        On this page
      </p>
      <ul className="space-y-1 border-l border-night-200 dark:border-white/10">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`-ml-px block border-l-2 py-1 transition ${
                  item.level === 3 ? "pl-6" : "pl-4"
                } ${
                  isActive
                    ? "border-solar-500 font-medium text-solar-600 dark:text-solar-300"
                    : "border-transparent text-night-500 hover:border-night-300 hover:text-night-800 dark:text-night-400 dark:hover:text-night-100"
                }`}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
