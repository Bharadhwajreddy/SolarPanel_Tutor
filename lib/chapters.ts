export type Chapter = {
  /** URL slug used at /learn/[slug] */
  slug: string;
  /** Markdown file name inside /content */
  file: string;
  /** Display order, also shown as the chapter number */
  order: number;
  title: string;
  /** One-line teaser shown on cards and headers */
  subtitle: string;
  /** Slightly longer description for the chapter card */
  description: string;
  /** lucide-react icon name, resolved in the UI layer */
  icon: string;
  /** Tailwind gradient classes used for the accent */
  gradient: string;
  /** Estimated reading time in minutes */
  readingMinutes: number;
  /** A few key topics covered, shown as chips */
  topics: string[];
};

export const chapters: Chapter[] = [
  {
    slug: "history-and-physics",
    file: "01-history-and-physics.md",
    order: 1,
    title: "History & The Physics of Light",
    subtitle: "From Becquerel's 1839 spark to the quantum mechanics of a solar cell.",
    description:
      "Why solar power began, the people who made it real, and exactly how a photon becomes an electron — band gaps, p-n junctions, the photovoltaic effect, I-V curves and the Shockley-Queisser limit.",
    icon: "Atom",
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    readingMinutes: 14,
    topics: ["Photovoltaic effect", "Band gap & doping", "p-n junction", "I-V curve", "Shockley-Queisser limit"],
  },
  {
    slug: "manufacturing",
    file: "03-manufacturing.md",
    order: 2,
    title: "Manufacturing — Sand to Module",
    subtitle: "The full value chain: quartz sand to a finished, framed panel.",
    description:
      "Every fab step in detail: carbothermic reduction to metallurgical silicon, the Siemens & fluidized-bed polysilicon routes, Czochralski crystal growth, diamond-wire wafering, cell diffusion & metallization, and module lamination.",
    icon: "Factory",
    gradient: "from-sky-400 via-cyan-500 to-blue-600",
    readingMinutes: 16,
    topics: ["MG-Si & polysilicon", "Czochralski ingots", "Wafering", "PERC / TOPCon / HJT", "Lamination & QC"],
  },
  {
    slug: "the-system",
    file: "04-system-electricity.md",
    order: 3,
    title: "From Panel to Power",
    subtitle: "Inverters, MPPT, the grid, and the balance of system.",
    description:
      "How DC from the array becomes usable AC: string vs micro vs optimizer inverters, MPPT algorithms, anti-islanding & grid codes, batteries and the duck curve, plus the performance metrics engineers actually track.",
    icon: "Zap",
    gradient: "from-violet-400 via-purple-500 to-fuchsia-600",
    readingMinutes: 12,
    topics: ["Inverters & MLPE", "MPPT", "Grid codes (IEEE 1547)", "Storage (LFP/NMC)", "Performance ratio"],
  },
  {
    slug: "installation",
    file: "05-installation.md",
    order: 4,
    title: "Installation, Step by Step",
    subtitle: "Site survey to permission-to-operate, done right and safely.",
    description:
      "The real install workflow: solar resource & shading analysis, string sizing with cold-temperature Voc correction, roof attachments and flashing, electrical tie-in and the 120% busbar rule, commissioning and utility interconnection.",
    icon: "Wrench",
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    readingMinutes: 12,
    topics: ["Site & shading survey", "String sizing", "Racking & flashing", "Electrical tie-in", "Commissioning / PTO"],
  },
  {
    slug: "degradation",
    file: "06-degradation-lifecycle.md",
    order: 5,
    title: "Degradation & Lifecycle",
    subtitle: "Do panels wear out? How, how fast, and what happens at end of life.",
    description:
      "What 25–30 years really does to a module: LID, LeTID and PID, encapsulant browning, microcracks and hot spots, the ~0.5%/yr degradation reality, reliability testing (IEC 61215), and the coming wave of PV recycling.",
    icon: "Activity",
    gradient: "from-orange-400 via-red-500 to-rose-600",
    readingMinutes: 14,
    topics: ["Degradation rates", "LID / PID / LeTID", "Hot spots & cracks", "IEC 61215 testing", "Recycling & end of life"],
  },
  {
    slug: "the-future",
    file: "07-future-research.md",
    order: 6,
    title: "The Future of Solar",
    subtitle: "Tandems, perovskites, and the frontier — minus the hype.",
    description:
      "Where the science is heading: TOPCon/HJT/back-contact silicon, perovskite-silicon tandems past 33%, bifacial + trackers, agrivoltaics and floating PV, plus an honest near-term outlook to 2030 and 2040.",
    icon: "Rocket",
    gradient: "from-indigo-400 via-blue-500 to-cyan-500",
    readingMinutes: 13,
    topics: ["TOPCon / HJT / IBC", "Perovskite tandems", "Bifacial & trackers", "Agrivoltaics & floating PV", "2030 outlook"],
  },
];

export function getChapter(slug: string): Chapter | undefined {
  return chapters.find((c) => c.slug === slug);
}

export function getAdjacentChapters(slug: string): {
  prev: Chapter | null;
  next: Chapter | null;
} {
  const index = chapters.findIndex((c) => c.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? chapters[index - 1] : null,
    next: index < chapters.length - 1 ? chapters[index + 1] : null,
  };
}
