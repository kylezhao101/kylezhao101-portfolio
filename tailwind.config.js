/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "monospace"],
        neopixel: ["neopixel", "sans"],
      },
      colors: {
        "custom-blue": "#3945FC",
        "custom-gray": "#BEBEBE",
        "custom-background-gray": "#E8ECF1",
      },
    },
  },
  plugins: [],
};
