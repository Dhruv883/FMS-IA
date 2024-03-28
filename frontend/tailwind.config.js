const { nextui } = require("@nextui-org/react");

// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        RedHat: ["Red Hat Display", "sans-serif"],
      },
      colors: {
        darkGrey: "#13181D",
        lightGrey: "#21242C",
        primaryYellow: "#FFB43A",
        darkYellow: "#906C33",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#FFB43A",
              foreground: "#000000",
            },
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: "#FFB43A",
              foreground: "#000000",
            },
          },
        },
      },
    }),
  ],
};
