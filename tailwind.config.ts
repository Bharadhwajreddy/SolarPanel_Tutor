import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
      },
      colors: {
        solar: {
          50: "#fff8eb",
          100: "#ffedc6",
          200: "#ffd888",
          300: "#ffbe4a",
          400: "#ffa31f",
          500: "#f98307",
          600: "#dd6002",
          700: "#b74106",
          800: "#94320c",
          900: "#7a2a0d",
          950: "#461302",
        },
        night: {
          50: "#f4f6fb",
          100: "#e8edf6",
          200: "#cbd8eb",
          300: "#9db6d8",
          400: "#688fc1",
          500: "#4570aa",
          600: "#34588f",
          700: "#2b4774",
          800: "#283e61",
          900: "#0e1726",
          950: "#080d18",
        },
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 40s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
