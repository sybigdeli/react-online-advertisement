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
          200: "#B160FB",
          500: "#B160FB",
          400: "#F5F5F5",
          600:"#E6E6E6"
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
