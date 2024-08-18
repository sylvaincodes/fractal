import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0",
        sm: "0",

        md: "0",

        lg: "0",

        xl: "0",

        "2xl": "2rem",

        "3xl": "2rem",

        "4xl": "2rem",
      },
      screens: {
        xs: "360px",
        // => @media (min-width: 360px) { ... }

        sm: "575px",
        // => @media (min-width: 575px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1440px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1680px",
        // => @media (min-width: 1536px) { ... }

        "4xl": "1920px",
        // => @media (min-width: 1536px) { ... }
      },
    },

    colors: {
      // default colors
      slate: colors.slate,
      gray: colors.gray,
      neutral: colors.neutral,
      red: colors.red,
      yellow: colors.yellow,
      cyan: colors.cyan,
      blue: colors.blue,
      indigo: colors.indigo,
      transparent: "transparent",

      //primary color: brink-pink
      primary: {
        "50": "#fef2f4",
        "100": "#fde6e9",
        "200": "#fad1d9",
        "300": "#f5acba",
        "400": "#ed6b86",
        "500": "#e44f71",
        "600": "#d02e5b",
        "700": "#af214d",
        "800": "#931e45",
        "900": "#7e1d41",
        "950": "#460b20",
      },

      //secondary color: matisse
      secondary: {
        "50": "#f0f8ff",
        "100": "#e0f0fe",
        "200": "#bae2fd",
        "300": "#7ccbfd",
        "400": "#37b1f9",
        "500": "#0d97ea",
        "600": "#016fb9",
        "700": "#025fa2",
        "800": "#065186",
        "900": "#0c446e",
        "950": "#082b49",
      },
    },

    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
