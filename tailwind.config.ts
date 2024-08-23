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
        'custom-text': '#313E51', 
        'custom-dark': '#3B4D66', 
        'custom-purple': '#A729F5', 
      },
      backgroundImage: {
        'custom-bg': "url('/images/background.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
