import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0B4F8A", deep: "#062E54" },
        brand: "#1A73E8",
        gold: "#F5B400",
        ink: "#0F172A",
        body: "#475569",
        mist: "#F4F8FB",
        wa: "#16A34A",
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: { tightest: "-0.02em" },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,.06), 0 12px 32px -12px rgba(6,46,84,.35)",
      },
    },
  },
  plugins: [],
};

export default config;
