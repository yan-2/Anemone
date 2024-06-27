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
      // Anemone color palette
      colors: {
        html: {
          light: '#EDEDED',
          dark: '#2F2E41',
        },
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
        base: '0.85rem',
        big: '3.5rem',
      },
      keyframes: {
        shrink: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.9)' },
        },
      },
      animation: {
        shrink: 'shrink 0.3s ease-out forwards',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}
