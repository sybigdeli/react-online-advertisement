/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Estedad"],
      serif: ["Estedad"],
    },
    extend: {
      backgroundImage: {
        "header-image": "url('./src/assets/images/Landing.png')",
      },
      colors: {
        primary: {
          200: "#B160FB",
          500: "#B160FB",
        },
      },
    },
  },
  plugins: [],
};
