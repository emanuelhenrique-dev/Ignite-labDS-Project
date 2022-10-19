/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
      '3xl': 40
    },
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      gray: {
        900: '#121214',
        800: '#202024',
        600: '#363640',
        400: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6'
      },

      blue: {
        500: '#5DA9E9',
        200: '#91C1EA'
      }
    },
    extend: {
      fontFamily: {
        sans: 'inter, sans-serif'
      }
    }
  },
  plugins: []
};
