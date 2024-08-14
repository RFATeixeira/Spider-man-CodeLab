/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../**/*.{html,js,css}"],
  theme: {
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/img/background.svg')",
      },
      colors: {
        "brand-color": "#ec1f1d",
        "dark-10": "#111826",
      },
    },
  },
  plugins: [],
};
