import Link from "next/link";
import { Sun } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container-page grid min-h-[70vh] place-items-center text-center">
      <div>
        <Sun className="mx-auto h-14 w-14 animate-spin-slow text-solar-400" />
        <h1 className="mt-6 font-display text-5xl font-bold">404</h1>
        <p className="mt-3 text-night-600 dark:text-night-300">
          This page drifted off the grid. Let&apos;s get you back to the light.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-solar-500 to-rose-500 px-6 py-3 font-medium text-white shadow-lg shadow-solar-500/30"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
