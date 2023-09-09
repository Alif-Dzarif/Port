/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Bitstream Vera Sans Mono'],
      'serif': ['Inconsolata']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}