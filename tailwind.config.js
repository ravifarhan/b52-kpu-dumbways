/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'red': '#ff0000',
        'dwdarkred': '#5C1E03',
        'dwred': '#7506068A',
      },
    },
  },
  plugins: [],
}