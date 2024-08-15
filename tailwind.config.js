/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#7ea4c2",
        lightBase: "#f4efe1",
        darkBase: "#ebd5bd",
        green: "#415c4a",
      },
    },
    fontFamily: {
      sans: ["Libre Franklin", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#685174",
        },
      },
    ],
  },
};
