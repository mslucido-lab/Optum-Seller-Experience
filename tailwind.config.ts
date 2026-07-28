import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0d0f1c",
        "navy-mid": "#12152a",
        "navy-card": "#181c30",
        "navy-row": "#1e2236",
        "navy-hover": "#232840",
        border: "#2a2e45",
        "border-lt": "#3a3f58",
        orange: "#f68b1e",
        "text-primary": "#f0f1f5",
        "text-body": "#c8cad8",
        "text-muted": "#8890a8",
        "text-subtle": "#565d7a",
        green: "#22c55e",
        yellow: "#f59e0b",
        red: "#ef4444",
        blue: "#60a5fa",
        purple: "#a78bfa",
      },
    },
  },
};

export default config;
