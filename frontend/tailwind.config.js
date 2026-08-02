import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F8F4EC",
        beige: "#EFE6D6",
        warmwhite: "#FFFDF8",
        sunflower: {
          DEFAULT: "#F7C948",
          deep: "#E9B31C",
        },
        leaf: {
          DEFAULT: "#4D7C3A",
          deep: "#3C622D",
        },
        bark: {
          DEFAULT: "#3E2C24",
          soft: "#5C463A",
          mute: "#8A7364",
        },
        brick: "#A8433A",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      fontFamily: {
        hand: ['"Edu VIC WA NT Hand"', "cursive"],
        sans: ['"DM Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 6px 24px -10px rgba(62, 44, 36, 0.16)",
        lift: "0 18px 42px -18px rgba(62, 44, 36, 0.28)",
        glow: "0 0 0 6px rgba(247, 201, 72, 0.22)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
        "4xl": "2rem",
      },
    },
  },
  plugins: [animate],
};