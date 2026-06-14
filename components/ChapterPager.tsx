import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Chapter } from "@/lib/chapters";

export function ChapterPager({
  prev,
  next,
}: {
  prev: Chapter | null;
  next: Chapter | null;
}) {
  return (
    <div className="mt-16 grid gap-4 border-t border-night-200/70 pt-8 dark:border-white/10 sm:grid-cols-2">
      {prev ? (
        <Link
          href={`/learn/${prev.slug}`}
          className="glass group flex flex-col gap-1 p-5 transition hover:border-solar-400/60"
        >
          <span className="flex items-center gap-1.5 text-xs font-medium text-night-500 dark:text-night-400">
            <ArrowLeft className="h-3.5 w-3.5" /> Previous
          </span>
          <span className="font-display font-semibold text-night-900 transition group-hover:text-solar-600 dark:text-white dark:group-hover:text-solar-300">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}

      {next ? (
        <Link
          href={`/learn/${next.slug}`}
          className="glass group flex flex-col gap-1 p-5 text-right transition hover:border-solar-400/60 sm:items-end"
        >
          <span className="flex items-center gap-1.5 text-xs font-medium text-night-500 dark:text-night-400">
            Next <ArrowRight className="h-3.5 w-3.5" />
          </span>
          <span className="font-display font-semibold text-night-900 transition group-hover:text-solar-600 dark:text-white dark:group-hover:text-solar-300">
            {next.title}
          </span>
        </Link>
      ) : (
        <Link
          href="/#chapters"
          className="glass group flex flex-col gap-1 p-5 text-right transition hover:border-solar-400/60 sm:items-end"
        >
          <span className="flex items-center gap-1.5 text-xs font-medium text-night-500 dark:text-night-400">
            Done <ArrowRight className="h-3.5 w-3.5" />
          </span>
          <span className="font-display font-semibold text-night-900 transition group-hover:text-solar-600 dark:text-white dark:group-hover:text-solar-300">
            Back to all chapters
          </span>
        </Link>
      )}
    </div>
  );
}
