/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      pixel: ['Pixelify Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}