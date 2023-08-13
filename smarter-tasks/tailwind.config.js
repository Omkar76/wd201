/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      // backgroundImage : {
      //   "topography" : `url("assets/topography.svg")`, // not working
      // }
    },
  },
  plugins: [],
};
