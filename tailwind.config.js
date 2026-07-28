/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0a0a0a',
          800: '#141414',
          700: '#1f1d1b',
          600: '#2a2724',
        },
        gold: {
          50: '#fbf7ee',
          100: '#f5ecd6',
          200: '#e8d6a8',
          300: '#dcbd78',
          400: '#cfa64f',
          500: '#bf9240',
          600: '#a37a33',
          700: '#83612b',
          800: '#5f4622',
        },
        clay: {
          100: '#f3e9df',
          200: '#e6d2bf',
          300: '#d4b196',
          400: '#bd8c6b',
          500: '#9f6f4f',
          600: '#7d5639',
          700: '#5c4029',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out both',
        'fade-in': 'fadeIn 1s ease-out both',
        'shimmer': 'shimmer 6s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
    },
  },
  plugins: [],
};
