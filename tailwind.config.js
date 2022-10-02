/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['app/*/**/*.{jsx, jsx, tsx, ts}', 'app/root.{jsx, jsx, tsx, ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#171617',
        secondary: '#1e1d1e',
        'accent-blue': '#488fff',
        'accent-purple': '#8165fb',
        'accent-gray': '#484748',
        'accent-red': '#ff6647',
        type: {
          white: '#f4f3f4',
          primary: '#c9c8c9',
          secondary: '#6a696a',
        },
      },
      keyframes: {
        toast: {
          '0%': { transform: 'scaleX(1)' },
          '100%': { transform: 'scaleX(0)' },
        },
      },
      animation: {
        toast: 'toast 5s ease-in',
      },
      fontFamily: {
        lato: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
