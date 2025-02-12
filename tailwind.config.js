/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["'Playfair Display'", ...defaultTheme.fontFamily.serif],
        vibes: ["'Great Vibes'", "cursive"],
        lato: ["'Lato'", ...defaultTheme.fontFamily.sans],
        poppins: ["'Poppins'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
