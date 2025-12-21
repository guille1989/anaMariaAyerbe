import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#231F20",
          orange: "#D65527",
          yellow: "#F4BD31",
          navy: "#1E224F",
          blue: "#48A4DB",
          green: "#89C97F",
          red: "#E93C55",
        },
      },
      fontFamily: {
        brandDisplay: [
          '"Copperplate Gothic Bold"',
          "Copperplate",
          '"Copperplate Gothic"',
          "Georgia",
          "serif",
        ],
        brandSans: [
          '"Century Gothic"',
          "CenturyGothic",
          "AppleGothic",
          '"Segoe UI"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
