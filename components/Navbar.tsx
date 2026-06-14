"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Sun } from "lucide-react";
import { chapters } from "@/lib/chapters";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-night-200/70 bg-night-50/80 backdrop-blur-xl dark:border-white/10 dark:bg-night-950/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-solar-400 to-rose-500 text-white shadow-lg shadow-solar-500/30">
            <Sun className="h-5 w-5 transition-transform duration-700 group-hover:rotate-90" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Solar<span className="text-solar-gradient">Tutor</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {chapters.map((c) => (
            <Link
              key={c.slug}
              href={`/learn/${c.slug}`}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-night-100 hover:text-solar-600 dark:hover:bg-white/5 dark:hover:text-solar-300 ${
                pathname === `/learn/${c.slug}`
                  ? "text-solar-600 dark:text-solar-300"
                  : "text-night-600 dark:text-night-300"
              }`}
            >
              {c.order}
            </Link>
          ))}
          <div className="mx-2 h-5 w-px bg-night-200 dark:bg-white/10" />
          <Link
            href="/#chapters"
            className="rounded-lg px-3 py-2 text-sm font-medium text-night-600 transition hover:text-solar-600 dark:text-night-300 dark:hover:text-solar-300"
          >
            All chapters
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-night-200/70 dark:border-white/10"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-night-200/70 bg-night-50/95 backdrop-blur-xl dark:border-white/10 dark:bg-night-950/95 md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {chapters.map((c) => (
              <Link
                key={c.slug}
                href={`/learn/${c.slug}`}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-night-700 transition hover:bg-night-100 dark:text-night-200 dark:hover:bg-white/5"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-gradient-to-br from-solar-400 to-rose-500 text-xs font-semibold text-white">
                  {c.order}
                </span>
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
