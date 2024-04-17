/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        redPrimary: "#e11d07",
        darkBlack: "#1b1b1b",
        grayMain: "#d0d5dd",

        lightBlack: "#202a31",
        white: "#ffffff",
        lightBlue: "#cfe4fe",
        buttonDisable: "#c6b9b9",
      },
    },
  },
  plugins: [],
};
