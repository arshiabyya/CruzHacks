/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#6c5ce7",
          secondary: "#8e44ad",
          accent: "#d670e7",
          danger: "#EA4335",
          light: "#F8F9FA",
          dark: "#202124",
          background: "#E2FFAC",
          "card-header": "#f8e8fa",
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        boxShadow: {
          card: '0 4px 8px rgba(0, 0, 0, 0.1)',
          'card-hover': '0 10px 15px rgba(0, 0, 0, 0.1)',
        },
        gradients: {
          'main-background': 'linear-gradient(184.1deg, rgba(249,255,182,1) 44.7%, rgba(226,255,172,1) 67.2%)',
        }
      },
    },
    plugins: [],
  }