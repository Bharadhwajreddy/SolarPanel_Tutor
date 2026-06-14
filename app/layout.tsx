import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://solarpanel-tutor.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Solar Tutor — An Engineer's Guide to Photovoltaics",
    template: "%s · Solar Tutor",
  },
  description:
    "A deep, engineer-grade interactive guide to solar panels: the physics of how they work, how they're manufactured from sand, how they're installed, how they degrade over decades, and where the technology is heading.",
  keywords: [
    "solar panels",
    "photovoltaics",
    "how solar cells work",
    "solar manufacturing",
    "solar installation",
    "panel degradation",
    "perovskite tandem",
  ],
  authors: [{ name: "Solar Tutor" }],
  openGraph: {
    title: "Solar Tutor — An Engineer's Guide to Photovoltaics",
    description:
      "From sand to grid: the physics, manufacturing, installation, lifecycle and future of solar power — explained in depth.",
    url: siteUrl,
    siteName: "Solar Tutor",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Tutor — An Engineer's Guide to Photovoltaics",
    description:
      "From sand to grid: the physics, manufacturing, installation, lifecycle and future of solar power.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#080d18" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen font-sans">
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
