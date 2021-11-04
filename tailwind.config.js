const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      brainstemGrey: '#B5B5B5',
      leadBelcher: '#CACACA',
      ghostWhite: '#F9F9F9',
      beluga: '#F1F1F1',
      white: colors.white,
      enchantedWells: '#24A691',
      celticSpring: '#addeb2',
      sunShower: '#FCDE72',
      heavenGates: '#c3effd',
      livelyCoral: { DEFAULT: '#e57878' },
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
