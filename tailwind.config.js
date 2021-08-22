module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "indigo-1": "#4C63B6",
      "indigo-2": "#647ACB",
      "indigo-3": "#19216C",
      "indigo-4": "#BED0F7",
      "indigo-5": "#201933",
      "gray-light": "#CBD2D9",
      "gray-5": "#616E7C",
      "gray-4": "#3E4C59",
      "gray-3": "#1F2933",
      "gray-2": "#323F4B",
      "gray-1": "#F5F7FA",
      "pink-cta": "#620042",
      "pink-white": "#FFE3EC",
      "yellow-cta": "#F7C948",
      "dark-cyan": "#0FB5BA",
    },
    //replace default font utility with imported fonts
    fontFamily: {
      body: ["Open Sans", "sans-serif"],
      display: ['"Paytone One"', "sans-serif"],
      sans: ["Work Sans", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
};
