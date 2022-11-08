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
        bgGray: "#1b1b1b",
        lightGray: "#1e1e1e",
      },
      gridTemplateColumns: {
        iconsContainer: "repeat(auto-fit,minmax(100px,1fr))",
        projectContainer: "repeat(auto-fit,minmax(365px,1fr))",
      },
      dropShadow: {
        'custom': '0 35px 35px rgba(255,255,255 0.5)',}
    },
  },
  plugins: [],
};
