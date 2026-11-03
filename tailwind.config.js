/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#070B14',
          surface: '#0D1424',
          card: '#101B30',
          cardHover: '#13223D',
          border: '#1B2A47',
          borderLight: '#23375C',
        },
        neon: {
          blue: '#168BFF',
          highlight: '#4DB8FF',
          glow: 'rgba(22, 139, 255, 0.25)',
          muted: 'rgba(77, 184, 255, 0.12)',
        },
        content: {
          main: '#F5F8FF',
          secondary: '#A5B4CC',
          muted: '#6E82A1',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'neon': '0 0 20px -3px rgba(22, 139, 255, 0.35)',
        'neon-sm': '0 0 12px -2px rgba(22, 139, 255, 0.25)',
        'card': '0 4px 20px -2px rgba(7, 11, 20, 0.6), 0 2px 6px -1px rgba(7, 11, 20, 0.4)',
      },
    },
  },
  plugins: [],
}
