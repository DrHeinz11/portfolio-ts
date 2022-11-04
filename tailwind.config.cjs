/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Neurial Grotesk", "sans-serif"],
      },
      colors: {
        main: "#ed743d",
        bgGray: "#2d2d2d",
        lightGray: "#f0f0f0",
      },
    },
  },
  plugins: [],
};
