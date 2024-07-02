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
  darkMode: 'class',
  theme: {
    extend: {
      // Anemone color palette [ light and dark ]
      colors: {
        background: {
          DEFAULT: '#EDEDED',
          dark: '#2F2E41',
        },
        primary: {
          DEFAULT: '#2F2E41',
          dark: '#EDEDED',
        },
        secondary: {
          DEFAULT: '#A19FB9',
          dark: '#8A88A0',
        },
        ternary: '#434159',
        action: '#D16464',
        accent: '#8185E7',
        neutral: '#FFFFFF',
        hyperlinks: '#649DD1',
      },
      // Fonts and text formatting
      fontFamily: {
        roboto: ['Roboto Mono', 'monospace'],
        rosamila: ['Rosamila', 'sans-serif'],
      },
      fontSize: {
        title: '3.5rem',
      },
      // Custom translations
      translate: {
        2: '0.5rem',
      },
      // Custom animations
      animation: {
        wiggle: 'wiggle 0.3s ease-in-out 1',
        shrink: 'shrink 0.3s ease-in-out forwards',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4.5deg)' },
          '50%': { transform: 'rotate(4.5deg)' },
        },
        shrink: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.9)' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.shrink-on-hover': {
          '@apply transition-transform duration-300 ease-in-out hover:scale-90': {},
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
