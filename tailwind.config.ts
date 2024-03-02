import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    padding: {
      main: "60px",
    },
    extend: {
      backgroundColor: {
        "bg-brown-main-50": "#8B7D6B",
      },
      colors: {
        "color-yellow-main": "#FFB40C",
      },
    },
  },
  plugins: [],
};
export default config;
