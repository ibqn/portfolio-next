/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        // sm: '480px',
      },
      spacing: {
        big: '48rem',
      },
    },
  },
  plugins: [],
}
