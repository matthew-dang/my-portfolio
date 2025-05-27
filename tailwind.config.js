/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Buenard', 'sans-serif'], // set Inter as default sans font
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}