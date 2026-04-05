/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          lavender: "#D8B4FE", // Soft Lavender
          teal: "#115E59",     // Deep Teal
          glass: "rgba(255, 255, 255, 0.1)",
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
}
