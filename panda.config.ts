import { defineConfig } from "@pandacss/dev";
import { mdStyle } from "./components/mdstyle";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        primary: {
          100: { value: "#001a4b" },
          200: { value: "#00457e" },
          300: { value: "#008bc3" },
          400: { value: "#89cbdd" },
          500: { value: "#d2e8ef" },
        },
      },
      fontSizes: {
        sm: { value: "16px" },
      },
    },
  },

  patterns: { mdStyle },

  // The output directory for your css system
  outdir: "styled-system",
});
