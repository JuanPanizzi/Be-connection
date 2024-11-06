/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple1': '#B346A1',
        'rosa1': '#f0c4dd'
      }
    },
  },
  plugins: [],
}

