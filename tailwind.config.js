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
        warmwhite: "rgb(251 250 248 / <alpha-value>)"
      },
      boxShadow: {
        glow: "0 10px 30px rgba(191,161,90,0.25)"
      }
    },
  },
  plugins: [],
}

