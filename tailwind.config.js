/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      "pink-soft": "#fff0f4",
      pudra: "#FEF4EB",
      orange: "#f27a1a",
      green: "#0BC15C",
      "green-soft": "#EFFBF5",
      yellow: "#ffc82c",
      "gray-dark": "#333",
      gray: "#f3f3f3",
      "gray-light": "#fefefe",
    },
    extend: {
      width: {
        500: "500px",
        350: "350px",
      },
    },
  },
  plugins: [],
};
