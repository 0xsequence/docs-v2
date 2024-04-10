/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/**/*.{js,ts,jsx,tsx,md,mdx}'],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      fontFamily: {
        ['inter']: 'Inter',
        ['roboto']: 'Roboto Mono',
      },
      screens: {
        md: '848px',
        lg: '1080px',
      },
      colors: {
        ['white-10']: 'rgba(255,255,255,0.1)',
        ['white-15']: 'rgba(255,255,255,0.15)',
        ['white-25']: 'rgba(255,255,255,0.25)',
        ['white-50']: 'rgba(255,255,255,0.5)',
        ['white-80']: 'rgba(255,255,255,0.8)',
        ['black-10']: 'rgba(0,0,0,0.1)',
        ['black-7']: 'rgba(0,0,0,0.07)',
        ['black-50']: 'rgba(0,0,0,0.5)',
        ['black-80']: 'rgba(0,0,0,0.8)',
      },
      spacing: {
        ['15']: '3.75rem',
        ['30']: '7.5rem',
      },
      fontSize: {
        ['text-3xl']: ['1.75rem', '2.25rem'],
      },
      maxWidth: {
        ['xl']: '610px',
        ['3xl']: '840px',
      }
    },
  },
  plugins: [],
}
