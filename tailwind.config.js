/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          50: '#1d29620d',
          100: '#1d29621a',
          200: '#1d296233',
          300: '#1d29624d',
          400: '#1d296266',
          500: '#1d296280',
          600: '#1d296299',
          700: '#1d2962b3',
          800: '#1d2962cc',
          900: '#1d2962e6',
          color:"#1d2962"
        },
        secondary:"#ff5e18",
      }
    },

  },
  plugins: [],
}

