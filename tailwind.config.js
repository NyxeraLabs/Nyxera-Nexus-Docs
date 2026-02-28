/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nexus: {
          bg: '#0b1018',
          panel: '#111926',
          border: '#243041',
          text: '#e2e8f0',
          muted: '#9fb0c8',
          accent: '#36c2ff'
        }
      },
      fontFamily: {
        sans: ['Roboto', 'Avenir Next', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        brand: ['Orbitron', 'Roboto', 'Avenir Next', 'Segoe UI', 'sans-serif']
      }
    }
  },
  plugins: []
};
