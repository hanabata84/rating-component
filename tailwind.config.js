/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgBlue: '#141519',
        transBlue: 'rgba(70, 103, 136, 0.21)',
        btnOrage: '#FC7613',
        textGrey: '#A4A4A4',
        textGreyLight: '#D9D9D9',
        btnHoverGrey: '#636E78'
      },
      backgroundImage: {
        componentImage: "url('./assets/component_bg.png')"
      }
    },
  },
  plugins: [],
}
