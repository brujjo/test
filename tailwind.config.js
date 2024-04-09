/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    ".pages/**/*.{html,ts}",
    ".components/**/*.{html,ts}",

  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6363',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        },
        accent: {
          1: '#FF0000',
          2: '#00FF00',
          3: '#0000FF',
        },
        danger: '#FF0000',
      },
    },
  },
  plugins: [],
}

