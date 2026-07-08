const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eaf2fa",
          100: "#cfe3f3",
          200: "#a7d8f6",
          300: "#7ab8e6",
          400: "#4c94d0",
          500: "#2e76b0",
          600: "#21558a",
          700: "#1a4471",
          800: "#153658",
          900: "#0f2740",
        },
        forest: {
          50: "#eef8e9",
          100: "#d3edc4",
          200: "#a8db8f",
          300: "#82be4c",
          400: "#5f9f36",
          500: "#3f7d21",
          600: "#2c5f16",
          700: "#1f4a10",
          800: "#164a09",
          900: "#0f3306",
        },
        cross: {
          500: "#c81e1e",
          600: "#b90101",
          700: "#920101",
        },
        paper: "#f7fafc",
        ink: "#0f1c28",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "route-grid":
          "radial-gradient(circle at 1px 1px, rgba(15,39,64,0.09) 1px, transparent 0)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,28,40,0.04), 0 8px 24px -8px rgba(15,28,40,0.12)",
        "card-hover": "0 2px 4px rgba(15,28,40,0.06), 0 16px 32px -12px rgba(15,28,40,0.18)",
      },
      animation: {
        "dash": "dash 2.4s linear infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-slower": "float 9s ease-in-out infinite",
      },
      keyframes: {
        dash: {
          to: { strokeDashoffset: "-24" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
});
