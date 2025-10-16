import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // 👈 required for manual toggle
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
