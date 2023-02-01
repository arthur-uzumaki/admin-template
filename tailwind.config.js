/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
 
  ],
  darkMode:'class' ,
  theme: {
    extend: {
        fontFamily: {
          sans: 'Roboto , sans-serif',
        },
        
      colors:{
        background: '#09090A'
      }
    },
  },
  plugins: [],
}
