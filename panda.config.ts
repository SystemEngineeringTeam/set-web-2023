import { defineConfig } from "@pandacss/dev";

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

  // The output directory for your css system
  outdir: "styled-system",
});
