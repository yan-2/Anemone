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
    extend: {
      // Anemone color palette
      colors: {
        // Website default theme
        background: '#EDEDED',
        primary: '#2F2E41',
        secondary: '#8A88A0',
        ternary: '#434159',
        action: '#D16464',
        accent: '#8185E7',
        neutral: '#FFFFFF',
        hyperlinks: '#649DD1',
        // Assistant theme
        dark: {
          background: '#2F2E41',
          primary: '#EDEDED',
          secondary: '#8A88A0',
          ternary: '#434159',
          action: '#D16464',
          accent: '#8185E7',
          neutral: '#FFFFFF',
          hyperlinks: '#649DD1',
        },
      },
      // Anemone fonts
      fontFamily: {
        roboto: ['Roboto Mono', 'monospace'],
        rosamila: ['Rosamila', 'sans-serif'],
      },
      fontSize: {
        base: '0.85rem',
        big: '3.5rem',
      },
      // Custom translations
      translate: {
        2: '0.55rem',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        // Add any custom durations you need
      },
    },
  },
  plugins: [],
}
