/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        coffee: {
          50: '#F5E6D3',
          100: '#E7D4B8',
          500: '#8B4513',
          900: '#5D2E1F'
        }
      }
    }
  },
  plugins: []
}