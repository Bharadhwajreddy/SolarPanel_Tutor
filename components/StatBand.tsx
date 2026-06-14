"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "~1.12 eV", label: "Silicon band gap — the energy gate a photon must clear" },
  { value: "~33.7%", label: "Shockley-Queisser limit for a single-junction cell" },
  { value: "~0.5%/yr", label: "Median real-world module degradation rate" },
  { value: ">33%", label: "Record perovskite-on-silicon tandem efficiency" },
];

export function StatBand() {
  return (
    <section className="container-page">
      <div className="glass grid gap-px overflow-hidden rounded-2xl bg-night-200/50 dark:bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.value}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-night-50 p-6 text-center dark:bg-night-950 sm:text-left"
          >
            <div className="font-display text-3xl font-bold text-solar-gradient">
              {s.value}
            </div>
            <p className="mt-2 text-sm leading-snug text-night-600 dark:text-night-300">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
