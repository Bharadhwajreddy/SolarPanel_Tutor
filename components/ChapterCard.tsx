"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import type { Chapter } from "@/lib/chapters";
import { Icon } from "./Icon";

export function ChapterCard({ chapter, index }: { chapter: Chapter; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <Link
        href={`/learn/${chapter.slug}`}
        className="glass group relative flex h-full flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-solar-500/10"
      >
        {/* hover gradient wash */}
        <div
          className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${chapter.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.07]`}
        />

        <div className="flex items-center justify-between">
          <span
            className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${chapter.gradient} text-white shadow-lg`}
          >
            <Icon name={chapter.icon} className="h-6 w-6" />
          </span>
          <span className="font-display text-5xl font-bold text-night-200/80 dark:text-white/10">
            {String(chapter.order).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
          {chapter.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-night-600 dark:text-night-300">
          {chapter.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {chapter.topics.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full bg-night-100 px-2.5 py-1 text-[11px] font-medium text-night-600 dark:bg-white/5 dark:text-night-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-night-200/70 pt-4 dark:border-white/10">
          <span className="flex items-center gap-1.5 text-xs text-night-500 dark:text-night-400">
            <Clock className="h-3.5 w-3.5" /> {chapter.readingMinutes} min read
          </span>
          <span className="flex items-center gap-1 text-sm font-medium text-solar-600 transition group-hover:gap-2 dark:text-solar-300">
            Read <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
