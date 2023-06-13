/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'moonstar': ['Moonstar', 'sans-serif'],
        'venice': ['Venice', 'sans-serif'],
        'magis': ['Magis', 'sans-serif'],
        'slant': ['Slant', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'cyber': ['CyberCaligraphic', 'sans-serif'],
        'diabolica': ['Diabolica', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
