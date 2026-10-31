/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f6fafd',
        ink: {
          DEFAULT: '#0e1b26',
          soft: '#4a5b69',
        },
        line: '#d6e4ee',
        sky: {
          50: '#eef7fd',
          100: '#d9eefb',
          300: '#8cd0f5',
          500: '#2ba3e6',
          700: '#0b6fa8',
        },
        accent: {
          100: '#ffe9d6',
          500: '#ff7a1a',
          600: '#e8650a',
        },
      },
      fontFamily: {
        display: ['"Familjen Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
      },
      boxShadow: {
        card: '0 8px 24px rgba(14, 27, 38, 0.08)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

