import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Home } from "lucide-react";
import { chapters, getChapter, getAdjacentChapters } from "@/lib/chapters";
import { getChapterMarkdown, extractToc } from "@/lib/content";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { TableOfContents } from "@/components/TableOfContents";
import { ChapterPager } from "@/components/ChapterPager";
import { Icon } from "@/components/Icon";

export function generateStaticParams() {
  return chapters.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const chapter = getChapter(params.slug);
  if (!chapter) return {};
  return {
    title: chapter.title,
    description: chapter.subtitle,
    openGraph: { title: chapter.title, description: chapter.subtitle },
  };
}

export default function ChapterPage({ params }: { params: { slug: string } }) {
  const chapter = getChapter(params.slug);
  if (!chapter) notFound();

  const markdown = getChapterMarkdown(chapter.slug);
  const toc = extractToc(markdown);
  const { prev, next } = getAdjacentChapters(chapter.slug);

  return (
    <article className="pt-16">
      {/* Chapter header */}
      <header className="relative overflow-hidden border-b border-night-200/70 dark:border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className={`absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br ${chapter.gradient} opacity-20 blur-3xl`}
          />
        </div>
        <div className="container-page py-14">
          <nav className="flex items-center gap-2 text-sm text-night-500 dark:text-night-400">
            <Link href="/" className="inline-flex items-center gap-1 hover:text-solar-600 dark:hover:text-solar-300">
              <Home className="h-3.5 w-3.5" /> Home
            </Link>
            <span>/</span>
            <span className="text-night-700 dark:text-night-200">
              Chapter {chapter.order}
            </span>
          </nav>

          <div className="mt-6 flex items-start gap-5">
            <span
              className={`hidden h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${chapter.gradient} text-white shadow-xl sm:grid`}
            >
              <Icon name={chapter.icon} className="h-8 w-8" />
            </span>
            <div>
              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {chapter.title}
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-night-600 dark:text-night-300">
                {chapter.subtitle}
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-night-500 dark:text-night-400">
                <Clock className="h-4 w-4" /> {chapter.readingMinutes} min read
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Body + sticky TOC */}
      <div className="container-page grid gap-12 py-12 lg:grid-cols-[1fr_260px]">
        <div className="min-w-0">
          <MarkdownArticle markdown={markdown} />
          <ChapterPager prev={prev} next={next} />
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-8">
            <TableOfContents items={toc} />
          </div>
        </aside>
      </div>
    </article>
  );
}
