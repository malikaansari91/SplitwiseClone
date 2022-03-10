const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      ...defaultTheme.colors,
      ...colors,
      primary: colors.teal,
    },
    extend: {
      keyframes: {
        "title-part1": {
          "0%, 100%": { color: colors.red },
          "50%": { color: colors.cyan },
        },
        "title-part2": {
          "0%, 100%": { color: colors.cyan },
          "50%": { color: colors.purple },
        },
        "title-part3": {
          "0%, 100%": { color: colors.red },
          "50%": { color: colors.yellow },
        },
      },
      animation: {
        "title-part1": "title-part1 3s ease-in-out infinite",
        "title-part2": "title-part2 3s ease-in-out 1s infinite",
        "title-part3": "title-part3 3s ease-in-out 2s infinite",
      },
    },
  },
  plugins: [],
};
