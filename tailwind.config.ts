import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkOne: "#F58585",
        pinkTwo: "#F9ABAB",
        pinkThree: "#FFE4E4",
        pinkFour: "#FBEFEF",
        borderPink: "#F9D1D1"
      }
    },
  },
  plugins: [],
} satisfies Config;
