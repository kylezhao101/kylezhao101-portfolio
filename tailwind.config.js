/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Mono', 'monospace'],
        'neopixel' : ['neopixel', 'sans']

      },
      colors: {
        'custom-blue': '#3945FC',
        'custom-gray': '#CBCBCB',
        'custon-background-gray': '#B6BBC0' 
      },
    },
  },
  plugins: [],
}

