const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#013A44",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#B2F4B5",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "#5AB5B8"
        },
        light: {
          DEFAULT: "#EBEBEC"
        },
        dark: {
          DEFAULT: "#222"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "blue": {
          DEFAULT: "#0077CC",
          50: "#E0F2FF",
          100: "#C2E6FF",
          200: "#85CCFF",
          300: "#47B3FF",
          400: "#0A99FF",
          500: "#0077CC",
          600: "#005FA3",
          700: "#00477A",
          800: "#003052",
          900: "#001829",
          950: "#000C14"
        }
      }
    },
    fontFamily: {
      primary: ["SpaceGrotesk", ...defaultTheme.fontFamily.sans],
      secondary: ["Spectral", ...defaultTheme.fontFamily.serif],
    }
  },
  plugins: [],
}