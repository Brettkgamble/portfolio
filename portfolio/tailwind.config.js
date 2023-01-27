/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/**/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/**/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./portfolio/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth:{
      '1100': '1100px',
    },
    extend: {
      colors: {
        'callout-rgb': 'rgb(20, 20, 20)',
        'callout-border-rgb': 'rgba(108, 108, 108,.3)',
        'card-rgb': 'rgb(100, 100, 100, 0.15)',
        'card-border': 'rgb(200, 200, 200, 0.15)',
        'loc-select': '#007ca7'
      },
      zIndex: {
        '2': '2',
      },
      gridTemplateColumns:{
        'page-4': 'repeat(4, minmax(25%, auto))'
      }

    },
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}
