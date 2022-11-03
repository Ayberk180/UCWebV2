/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend:{
        colors:{
          'wisp-pink': '#f3e9eb',
          'tan': '#D7BC8F',
          'blue-magenta': '#2E2A3E',
          'dark-gray': '#575A69',
          'dark-tan': '#957F51'

        }
      },
  },
  plugins: [],
}
