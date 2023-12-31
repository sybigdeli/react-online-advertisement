/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Estedad"],
      serif: ["Estedad"],
      estedadLighter : ["estedadLighter"]
    },
    extend: {
      backgroundImage: {
        "header-image": "url('./src/assets/images/Landing.png')",
      },
      colors: {
        primary: {
          100: "#ebd8fc",
          200: "#d8b2fb",
          300: "#cd98fe",
          400: "#be7cfa",
          500: "#B160FB",
          600: "#a342fc",
          700:"#992bfe",
          800:"#8e14fd",
          900:"#8500ff",
          1000: "#E6E6E6",
          1100:"#F5F5F5"
          
        },
        textColor: {
          100: "#AAAAAA",
          200: "#555555",
          900: "#000000",
          50: "#FFFFFF",
          500: "#6F17BF",
          600: "#999999"
        },
      },
    },
  },
  plugins: [],
};
