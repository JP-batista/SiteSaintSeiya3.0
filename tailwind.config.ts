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
        'saint-blue': '#1E40AF',
        'saint-gold': '#FFD700',
      },
      fontFamily: {
        'saint': ['"Roboto"', 'sans-serif'],
      },
    },
  },
  
  plugins: [],
};
export default config;
