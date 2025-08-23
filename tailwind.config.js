/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        gold: "rgb(191 161 90 / <alpha-value>)",
        beige: "rgb(245 239 230 / <alpha-value>)",
        softbrown: "rgb(139 111 71 / <alpha-value>)",
        warmwhite: "rgb(251 250 248 / <alpha-value>)",
        background: "rgb(250 248 243 / <alpha-value>)",
        foreground: "rgb(44 44 44 / <alpha-value>)",
        muted: "rgb(139 115 85 / <alpha-value>)",
        "muted-foreground": "rgb(107 91 71 / <alpha-value>)",
        border: "rgba(139 115 85 / 0.2)",
        accent: "rgb(212 175 55 / <alpha-value>)",
        primary: "rgb(139 115 85 / <alpha-value>)"
      },
      boxShadow: {
        glow: "0 10px 30px rgba(191,161,90,0.25)"
      }
    },
  },
  plugins: [],
}

