/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'philosophy': ["Gideon Roman", "serif"],
        'Inter': ["Inter"]
      },
      colors: {
        "white-bg": '#FFF',
        "black-text": '#000000',
        "gray-bg": '1E1E1E'
      }
    },
  },
  plugins: [],
}

