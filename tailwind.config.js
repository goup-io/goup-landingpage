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
      animation: {
        'foguete': 'tremer 1.4s linear infinite',
        'fogo': 'tremer 0.7s linear infinite',
      },
      keyframes : {
        tremer : {
          '0%' : { transform: 'translate(1px, 1px) rotate(0deg)'},
          '10%' : { transform: 'translate(-1px, -2px) rotate(1deg)'},
          '20%' : { transform: 'translate(-1px, 0px) rotate(1deg)'},
          '30%' : { transform: 'translate(1px, 2px) rotate(0deg)'},
          '40%' : { transform: 'translate(1px, -1px) rotate(1deg)'},
          '50%' : { transform: 'translate(-1px, 2px) rotate(1deg)'},
          '60%' : { transform: 'translate(-1px, 1px) rotate(0deg)'},
          '70%' : { transform: 'translate(1px, 1px) rotate(1deg)'},
          '80%' : { transform: 'translate(-1px, -1px) rotate(0deg)'},
          '90%' : { transform: 'translate(1px, 1px) rotate(1deg)'},
          '100%' : { transform: 'translate(1px, 1px) rotate(0deg)'},
        },
        pulsar : {
          '0%': { transform : ''},
          '50%': { transform : 'scale(1.1)'},
        },
      },
      colors: {
        'verdeGoUp' : '#48CFAE',
        'brancoGoUp' : '#F1F1F1',
      }
    },
  },
  plugins: [],
}