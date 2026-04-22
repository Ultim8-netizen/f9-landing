import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red:    '#EF4444',
          blue:   '#3B82F6',
          purple: '#A855F7',
        },
      },
      fontFamily: {
        syne:  ['var(--font-syne)',       'sans-serif'],
        geist: ['var(--font-geist-sans)', 'sans-serif'],
      },
      animation: {
        'fade-up':      'fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in':      'fadeIn 0.6s ease both',
        'gradient-pan': 'gradientPan 5s ease infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)'    },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        gradientPan: {
          '0%, 100%': { backgroundPosition: '0%   50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

export default config