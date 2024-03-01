/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "Poppins" : ["Poppins", "sans-serif"]
    },
    extend: {
      colors: {
        'verdeGoUp' : '#48CFAE',
        'brancoGoUp' : '#F1F1F1',
      }
    },
  },
  plugins: [],
}