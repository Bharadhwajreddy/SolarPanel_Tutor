"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background glow + grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-solar-400/30 via-orange-400/20 to-rose-400/10 blur-3xl" />
        <div className="absolute right-[8%] top-[12%] h-72 w-72 rounded-full bg-solar-300/20 blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-solar-300/60 bg-solar-50 px-3.5 py-1.5 text-xs font-medium text-solar-700 dark:border-solar-500/30 dark:bg-solar-500/10 dark:text-solar-200"
          >
            <Sparkles className="h-3.5 w-3.5" />
            From a grain of sand to the grid — explained in full
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            How solar panels{" "}
            <span className="text-solar-gradient">actually</span> work
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-lg leading-relaxed text-night-600 dark:text-night-300"
          >
            A deep, engineer-grade tour of photovoltaics — the quantum physics
            of turning light into electricity, how cells are manufactured from
            quartz sand, how systems are installed and wired to the grid, how
            panels age over 30 years, and where the technology is heading next.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/learn/history-and-physics"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-solar-500 to-rose-500 px-6 py-3.5 font-medium text-white shadow-lg shadow-solar-500/30 transition hover:shadow-xl hover:shadow-solar-500/40"
            >
              Start learning
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#chapters"
              className="inline-flex items-center gap-2 rounded-xl border border-night-200 bg-white/60 px-6 py-3.5 font-medium text-night-800 transition hover:border-solar-400 dark:border-white/10 dark:bg-white/5 dark:text-night-100"
            >
              Browse 6 chapters
            </Link>
          </motion.div>
        </div>

        {/* Animated solar illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <SolarArt />
        </motion.div>
      </div>
    </section>
  );
}

function SolarArt() {
  return (
    <div className="relative h-full w-full">
      {/* Sun */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="relative h-44 w-44">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 via-solar-400 to-rose-500 shadow-[0_0_80px_20px_rgba(249,131,7,0.45)]" />
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 h-1.5 w-10 origin-left rounded-full bg-gradient-to-r from-solar-400 to-transparent"
              style={{ transform: `rotate(${i * 30}deg) translateX(92px)` }}
            />
          ))}
        </div>
      </motion.div>

      {/* Orbiting electron */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_18px_4px_rgba(34,211,238,0.7)]" />
      </motion.div>
      <motion.div
        className="absolute inset-6"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_16px_4px_rgba(167,139,250,0.7)]" />
      </motion.div>

      {/* Floating solar panel */}
      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="grid grid-cols-4 gap-1 rounded-lg border border-night-700/40 bg-night-900/80 p-2 shadow-2xl backdrop-blur">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="h-5 w-5 rounded-[3px] bg-gradient-to-br from-sky-500/80 to-blue-900"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
