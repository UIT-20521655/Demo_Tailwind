/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundColor: {
        "head": "#151937"
      },
      container: {
        center: true,
      },
      backgroundImage : {
        "gradient-orange-pink": "linear-gradient(to left, #fc8e51, #fa61f9 )"
      },
      padding: {
        "3o": "3px"
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}