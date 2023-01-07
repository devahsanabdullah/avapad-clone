/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Expletus: ["Expletus Sans","cursive"]
      },
      colors:{
        'app-clr':'#1a1a1a',
        'boxshadow':'0 1px 10px 0 rgb(0 0 0 / 50%)',
        'boxshadow2':'1px 2px 20px rgb(0 0 0 / 10%)',
        'beforeC' : '#e63f40 #e63f40 hsla(0,0%,100%,.1) hsla(0,0%,100%,.1)',
        'afterC' : '#e63f40 hsla(0,0%,100%,.1)'
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'reverse-spin': 'reverse-spin 10s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          },
        }
      }
    },
  },
  plugins: [],
}