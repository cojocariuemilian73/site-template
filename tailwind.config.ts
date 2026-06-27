import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds — dark, elegant, auriu (inspirat din Dental Concept by Dr. Mihali)
        "bg-deep": "#1a1510",
        "bg-navbar": "#0f0d09",
        "bg-footer": "#0a0805",
        "bg-card": "#242018",
        "bg-card-deep": "#0f0d09",
        "bg-alt": "#2a251a",

        // Brand — auriu-bronz mat
        primary: {
          DEFAULT: "#8B7355",
          dark: "#A08B6A", // folosit ca hover (mai deschis, nu mai întunecat)
          light: "#C4A882",
        },
        secondary: {
          DEFAULT: "#8B7355",
          dark: "#A08B6A",
          light: "#C4A882",
        },
        gold: {
          DEFAULT: "#8B7355",
          dark: "#A08B6A",
          light: "#C4A882",
        },
        urgent: {
          DEFAULT: "#C0392B",
          dark: "#962E22",
          light: "rgba(192, 57, 43, 0.15)",
        },

        // Tooth / gum accents for the hero illustration
        lip: "#F4A7A3",
        gum: "#E8909A",
        mouth: "#C47B8A",
        tooth: "#FFFDF8",
        "tooth-hover": "#F5D76E",

        // Text
        ink: "#0f0d09",
        "on-gold": "#0f0d09",
        "text-primary": "#F0EDE6",
        "text-muted": "#9E9080",
        "text-faint": "#6B6055",

        // Legacy aliases kept so existing components don't break
        background: "#1a1510",
        accent: {
          DEFAULT: "#8B7355",
          dark: "#A08B6A",
          light: "rgba(139, 115, 85, 0.12)",
        },
        "primary-light": "rgba(139, 115, 85, 0.08)",
        "urgent-light": "rgba(192, 57, 43, 0.12)",
        "border-subtle": "rgba(139, 115, 85, 0.2)",
        "border-accent": "rgba(139, 115, 85, 0.5)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-playfair)", "Playfair Display", "serif"],
        quote: ["var(--font-dm-serif)", "DM Serif Display", "serif"],
        mono: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        btn: "4px",
      },
      boxShadow: {
        warm: "0 4px 24px rgba(0, 0, 0, 0.4)",
        "warm-lg": "0 12px 40px rgba(0, 0, 0, 0.55)",
        glow: "0 4px 24px rgba(139, 115, 85, 0.18)",
        "glow-sm": "0 2px 14px rgba(139, 115, 85, 0.14)",
        "glow-urgent": "0 4px 20px rgba(192, 57, 43, 0.3)",
        "glow-gold": "0 4px 16px rgba(139, 115, 85, 0.35)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        glow: {
          "0%, 100%": { opacity: "0.85" },
          "50%": { opacity: "1" },
        },
        "tooth-glow": {
          "0%, 100%": { opacity: "0.92" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 3s ease-in-out infinite",
        "tooth-glow": "tooth-glow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
