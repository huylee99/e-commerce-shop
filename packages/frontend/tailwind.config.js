const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx}', './src/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#3a9046',
        'primary-dark': '#2a7535',
        dark: '#3e4a5e',
      },
      boxShadow: {
        'custom-1': '0 0 10px 1px hsla(0,0%,56%,.1)',
      },
    },
  },
  variants: {
    extend: {
      border: ['last'],
    },
  },
  plugins: [],
};
