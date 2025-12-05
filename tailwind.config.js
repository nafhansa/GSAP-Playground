/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#0b1221',
        panel: '#111a2e',
        accent: '#7dd3fc',
      },
      boxShadow: {
        glow: '0 0 24px rgba(125, 211, 252, 0.35)',
      },
    },
  },
  plugins: [],
};
