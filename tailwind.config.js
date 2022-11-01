/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        transform: "transform",
      },
      screens: {
        mobile: "1005px",
        m: "926px",
        s: "670px",
      },
      fontFamily: {
        raleway: ["Raleway"],
      },
    },
  },
  plugins: [],
};
