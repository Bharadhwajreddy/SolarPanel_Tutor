import Link from "next/link";
import { Sun } from "lucide-react";
import { chapters } from "@/lib/chapters";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-night-200/70 bg-white/40 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-solar-400 to-rose-500 text-white">
              <Sun className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-semibold">
              Solar<span className="text-solar-gradient">Tutor</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-night-600 dark:text-night-300">
            An engineer-grade, end-to-end guide to solar photovoltaics — from
            the quantum physics of a single cell to gigawatt-scale farms and the
            research frontier.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-night-500 dark:text-night-400">
            Chapters
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {chapters.slice(0, 3).map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/learn/${c.slug}`}
                  className="text-night-600 transition hover:text-solar-600 dark:text-night-300 dark:hover:text-solar-300"
                >
                  {c.order}. {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-night-500 dark:text-night-400">
            &nbsp;
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {chapters.slice(3).map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/learn/${c.slug}`}
                  className="text-night-600 transition hover:text-solar-600 dark:text-night-300 dark:hover:text-solar-300"
                >
                  {c.order}. {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-night-200/70 dark:border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-night-500 dark:text-night-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} SolarTutor. Educational content — verify
            figures against primary sources before engineering use.
          </p>
          <p>Built with Next.js · Tailwind CSS · deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
