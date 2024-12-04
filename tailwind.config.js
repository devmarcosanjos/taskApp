/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        brand: {
          "dark-blue": "#35383e",
          primary: "#00adb5",
          "dark-gray": "#818181",
          "text-gray": "#9a9c9f",
          "light-gray": "#EEEEEE",
          white: "#FFFFFF",
          background: "#f8f8f8",
          process: "#FFAA04",
          danger: "EF4444",
        },
      },
    },
  },
  plugins: [],
}
