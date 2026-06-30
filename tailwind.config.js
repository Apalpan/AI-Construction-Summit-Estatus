/**
 * GEN+ / AECODE — Design Tokens x7  ·  Tailwind preset
 * Mirrors tokens.css 1:1 so a future Tailwind/React port stays pixel-identical
 * to the vanilla microsite. Drop into a project as:
 *   module.exports = { presets: [require('./tailwind.config.js')] }
 * Colors point at CSS variables where the value is theme-scoped (light/dark
 * command island); raw hex is used only where the token is mode-invariant.
 */
module.exports = {
  darkMode: ["class", '[data-data-mode="real-locked"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2165FF",
          hover: "#1B4ED8",
          active: "#132D66",
          50: "#EEF3FF",
          100: "#DCE6FF",
          200: "#B9CEFF",
        },
        /* Semantic AEC vocabulary */
        aec: {
          progress: "#0891B2",
          "progress-bright": "#22D3EE",
          risk: "#EA580C",
          "risk-bright": "#F97316",
          danger: "#DC2626",
          success: "#15A34A",
          "success-bright": "#22C55E",
          "success-soft": "#86EFAC",
          blocked: "#9333EA",
          "blocked-bright": "#C084FC",
          warning: "#B45309",
          "warning-bright": "#F59E0B",
        },
        surface: {
          DEFAULT: "var(--surface)",
          2: "var(--surface-2)",
          3: "var(--surface-3)",
        },
        ink: {
          DEFAULT: "var(--text)",
          2: "var(--text-2)",
          3: "var(--text-3)",
        },
        line: {
          DEFAULT: "var(--border)",
          strong: "var(--border-strong)",
        },
        /* Dark command room */
        command: { 0: "#02060F", 1: "#040F20", 2: "#06121F" },
        bg: { light: "#F8FAFC", soft: "#F1F5F9", base: "#FFFFFF" },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
        display: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        /* the perfect scale */
        "2xs": ["0.75rem", { lineHeight: "1.4" }],
        xs: ["0.8125rem", { lineHeight: "1.45" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.55" }],
        lg: ["1.125rem", { lineHeight: "1.5" }],
        xl: ["1.25rem", { lineHeight: "1.35" }],
        "2xl": ["1.5rem", { lineHeight: "1.25" }],
        "3xl": ["2rem", { lineHeight: "1.15" }],
        "4xl": ["2.5rem", { lineHeight: "1.08" }],
        "5xl": ["3.5rem", { lineHeight: "1.04" }],
        "6xl": ["4.5rem", { lineHeight: "1" }],
        metric: ["clamp(2rem,1.3rem + 2.6vw,3.25rem)", { lineHeight: "1", letterSpacing: "-0.022em" }],
        hero: ["clamp(2.35rem,1.45rem + 4vw,4.6rem)", { lineHeight: "1.05", letterSpacing: "-0.022em" }],
      },
      fontWeight: { regular: "400", medium: "500", semibold: "600", bold: "700", black: "800" },
      letterSpacing: { tighter: "-0.022em", tight: "-0.012em", eyebrow: "0.16em" },
      spacing: {
        /* strict 4px grid is Tailwind-native; named premium aliases */
        card: "24px",
        shell: "clamp(20px,4.5vw,64px)",
      },
      maxWidth: { shell: "1280px" },
      borderRadius: {
        xs: "8px", sm: "12px", md: "16px", lg: "20px", xl: "24px", "2xl": "28px", pill: "999px",
      },
      boxShadow: {
        card: "0 10px 15px -3px rgb(2 6 23 / 0.07), 0 4px 6px -4px rgb(2 6 23 / 0.05)",
        elevated: "0 24px 48px -16px rgb(2 6 23 / 0.18), 0 8px 16px -8px rgb(2 6 23 / 0.10)",
        pop: "0 24px 60px -12px rgb(2 6 23 / 0.30)",
        command: "0 40px 120px -28px rgb(2 6 23 / 0.55)",
        ring: "0 0 0 3px rgb(33 101 255 / 0.32)",
        glow: "0 12px 32px -10px rgb(33 101 255 / 0.28)",
      },
      transitionTimingFunction: {
        house: "cubic-bezier(0.23,1,0.32,1)",
        spring: "cubic-bezier(0.34,1.4,0.64,1)",
      },
      transitionDuration: { fast: "140ms", base: "220ms", slow: "320ms" },
    },
  },
  plugins: [],
};
