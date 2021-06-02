module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or false
  theme: {
    extend: {
      colors: {
        gray: {
          550: "#4E5051",
          650: "#3A3C3C",
          850: "#242627",
          950: "#18191A",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
