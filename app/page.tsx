import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { StatBand } from "@/components/StatBand";
import { ChapterCard } from "@/components/ChapterCard";
import { chapters } from "@/lib/chapters";

export default function HomePage() {
  return (
    <>
      <Hero />

      <StatBand />

      {/* Chapters */}
      <section id="chapters" className="container-page scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-solar-600 dark:text-solar-400">
            The full journey
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Six chapters, sand to grid
          </h2>
          <p className="mt-4 text-lg text-night-600 dark:text-night-300">
            Each chapter is a self-contained, in-depth reference. Read straight
            through for the complete story, or jump to the part you need.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter, i) => (
            <ChapterCard key={chapter.slug} chapter={chapter} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-8">
        <div className="glass relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-solar-400/10 via-transparent to-rose-400/10" />
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to go from photon to power?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-night-600 dark:text-night-300">
            Begin with the discovery of the photovoltaic effect in 1839 and the
            quantum mechanics that make a solar cell possible.
          </p>
          <Link
            href="/learn/history-and-physics"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-solar-500 to-rose-500 px-7 py-3.5 font-medium text-white shadow-lg shadow-solar-500/30 transition hover:shadow-xl"
          >
            Start with Chapter 1
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
