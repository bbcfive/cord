module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#C6FFDC',
        'custom-blue': '#D1EFF9',
        'custom-purple': '#E4D5FF',
      },
      width: {
        '[479px]': '479px',
      },
      height: {
        '[716px]': '716px',
      },
    },
  },
  plugins: [],
}