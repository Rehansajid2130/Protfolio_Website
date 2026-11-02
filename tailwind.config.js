/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        'white-smoke': '#faf7f3',
        'dark-turquoise': '#0099ff',
        blue: '#0000ee',
        black: '#000000',
        'black-1': '#111111',
      },
      fontFamily: {
        archivo: ['"Archivo"', 'sans-serif'],
        display: ['"Archivo"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'neg-1-44': '-1.44px',
        'neg-1-36': '-1.36px',
        'neg-0-88': '-0.88px',
        'neg-0-72': '-0.72px',
        'neg-0-64': '-0.64px',
        'neg-0-32': '-0.32px',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
