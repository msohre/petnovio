import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-violet": "var(--brand-violet)",
        "brand-peach": "var(--brand-peach)",
        "brand-aqua": "var(--brand-aqua)",
        "brand-lime": "var(--brand-lime)",
        "brand-coral": "var(--brand-coral)",
      },
    },
  },
  plugins: [],
};

export default config;
