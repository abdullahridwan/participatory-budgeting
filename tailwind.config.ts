import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "system-ui", "sans-serif"],
        editorial: ["Editors Note", "Georgia", "serif"],
      },
      colors: {
        ink: "#0a0a0a",
        muted: "#737373",
        border: "#e5e5e5",
        accent: "#0094FF",
      },
    },
  },
  plugins: [],
};

export default config;
