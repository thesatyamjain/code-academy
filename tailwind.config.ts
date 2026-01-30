import type { Config } from "next";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712", // Deep Cyber Black
        surface: "#0f172a",    // Dark Blue Grey
        primary: "#00f3ff",    // Neon Cyan
        secondary: "#bc13fe",  // Electric Purple
        accent: "#facc15",     // Warning Yellow
        text: "#e2e8f0",       // Slate 200
        muted: "#64748b",      // Slate 500
      },
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'cyber-grid': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
