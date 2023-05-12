import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#f87216",
        backgroundColor: "#111010",
        slateLight: "#ccd6f6",
        slateDark: "#8892b0",
      },
    },
  },
  plugins: [],
} satisfies Config;
