/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['app/*/**/*.{jsx, jsx, tsx, ts}', 'app/root.{jsx, jsx, tsx, ts}'],
  theme: {
    extend: {
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
