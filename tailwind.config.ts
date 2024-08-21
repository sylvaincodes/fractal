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
      white: colors.white,
      black: colors.black,
      slate: colors.slate,
      gray: colors.gray,
      neutral: colors.neutral,
      red: colors.red,
      yellow: colors.yellow,
      cyan: colors.cyan,
      blue: colors.blue,
      indigo: colors.indigo,
      transparent: "transparent",

      //primary color: mauvelous
      primary: {
        "50": "#fcf3f6",
        "100": "#fbe8f0",
        "200": "#f8d2e1",
        "300": "#f4adc8",
        "400": "#ef94b4",
        "500": "#e15381",
        "600": "#cf335d",
        "700": "#b32346",
        "800": "#94203b",
        "900": "#7c1f34",
        "950": "#4b0c1a",
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
      boxShadow: {
        button:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "heart-beating": {
          "0%, 10%": { transform: "scale(1)" },
          "10%, 100%": { transform: "scale(1.01)" },
          "100%, 0%": { transform: "scale(1)" },
        },
        radius: {
          "0%": {
            borderRadius: "0px",
          },
          "10%, 30": {
            borderRadius: "10px",
            transition: "1s ease",
          },
          "30%, 100%": {
            borderRadius: "40px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
          },
          "100%, 70%": {
            borderRadius: "20px",
          },
          "70%, 30%": {
            borderRadius: "0px",
            boxShadow:
              " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          },
          "30%, 0%": {
            borderRadius: "100px",
            background: "#e15381",
            transition: "1s ease",
            boxShadow:
              " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "heart-beating": "heart-beating 2s infinite ease-out",
        radius: "radius 3s infinite ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
