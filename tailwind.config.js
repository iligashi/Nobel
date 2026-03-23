/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#faf7f2",
        cream: "#f0ebe3",
        "cream-light": "#f7f4ef",
        gold: "rgb(201 169 110 / <alpha-value>)",
        "gold-light": "#d4bc8a",
        "gold-dark": "#a68b4b",
        charcoal: "#1c1c1c",
        "charcoal-light": "#2c2620",
        "warm-gray": "#6b6055",
        "warm-brown": "#8b7d6b",
        background: "#faf7f2",
        foreground: "#1c1c1c",
        muted: "#f0ebe3",
        "muted-foreground": "#6b6055",
        border: "rgba(201, 169, 110, 0.2)",
        accent: "rgb(201 169 110 / <alpha-value>)",
        primary: "#1c1c1c",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.04)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.06)",
        strong: "0 15px 40px rgba(0, 0, 0, 0.08)",
        gold: "0 4px 20px rgba(201, 169, 110, 0.15)",
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      }
    },
  },
  plugins: [],
}
