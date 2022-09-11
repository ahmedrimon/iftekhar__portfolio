/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '280px',
      '3xl': '1700px',
    },
    extend: {
      fontFamily: {
        plainThin: ['Plain Thin'],
        saolDisplayRegular: ['Saol Display Regular'],
        apercu: ['Apercu']
      }
    },
  },
  plugins: [],
}
