/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['app/*/**/*.{jsx, jsx, tsx, ts}', 'app/root.{jsx, jsx, tsx, ts}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
