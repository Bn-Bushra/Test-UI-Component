import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'nana-blue': '#00C2E8',
        'nana-lime': '#4ADE80',
        'nana-purple': '#C084FC',
        'nana-stone': '#A8A29E',
      },
      fontFamily: {
        Omnes: ['Omnes', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
