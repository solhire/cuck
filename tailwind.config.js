/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'pulse': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.2)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'text-glitch': {
          '0%': { 
            transform: 'translate(0)',
            textShadow: '0 0 0 #ff0000'
          },
          '20%': { 
            transform: 'translate(-2px, 2px)',
            textShadow: '2px 2px 0 #ff0000'
          },
          '40%': { 
            transform: 'translate(-2px, -2px)',
            textShadow: '-2px -2px 0 #ff0000'
          },
          '60%': { 
            transform: 'translate(2px, 2px)',
            textShadow: '2px -2px 0 #ff0000'
          },
          '80%': { 
            transform: 'translate(2px, -2px)',
            textShadow: '-2px 2px 0 #ff0000'
          },
          '100%': { 
            transform: 'translate(0)',
            textShadow: '0 0 0 #ff0000'
          },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-in-out',
        'fade-out': 'fade-out 0.3s ease-in-out',
        'slide-down': 'slide-down 0.8s ease-out forwards',
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'glitch': 'glitch 0.3s cubic-bezier(.25,.46,.45,.94) both infinite',
        'pulse': 'pulse 1.5s ease-in-out infinite',
        'text-glitch': 'text-glitch 0.3s cubic-bezier(.25,.46,.45,.94) both infinite',
        slide: 'slide 5s linear infinite',
        'spin-slow': 'spin-slow 3s linear infinite'
      },
    },
  },
  plugins: [],
} 