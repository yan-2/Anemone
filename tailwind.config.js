/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {},
    // Anemone color palette
    colors: {
      'background': '#EDEDED',
      'primary': '#2F2E41',
      'secondary': '#8A88A0',
      'action': '#D16464',
      'accent': '#8185E7',
      'neutral': '#FFFFFF',
      'hyperlinks': '#649DD1',
    },
    // Anemone font families
    fontFamily: {
      'roboto': ['Roboto Mono', 'monospace'],
      'rosamila': ['Rosamila', 'sans-serif'],
    },
  },
  plugins: [],
}
