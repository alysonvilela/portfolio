/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  ...defaultTheme,
  prefix: '',
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/screens/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontSize: {
      xs: [
        '0.75rem',
        {
          lineHeight: '1rem',
        },
      ],
      sm: [
        '0.875rem',
        {
          lineHeight: '1.5rem',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '1.75rem',
        },
      ],
      lg: [
        '1.125rem',
        {
          lineHeight: '2rem',
        },
      ],
      xl: [
        '1.25rem',
        {
          lineHeight: '2rem',
        },
      ],
      '2xl': [
        '1.5rem',
        {
          lineHeight: '2rem',
        },
      ],
      '3xl': [
        '2rem',
        {
          lineHeight: '2.5rem',
        },
      ],
      '4xl': [
        '2.5rem',
        {
          lineHeight: '3.5rem',
        },
      ],
      '5xl': [
        '3rem',
        {
          lineHeight: '3.5rem',
        },
      ],
      '6xl': [
        '3.75rem',
        {
          lineHeight: '1',
        },
      ],
      '7xl': [
        '4.5rem',
        {
          lineHeight: '1.1',
        },
      ],
      '8xl': [
        '6rem',
        {
          lineHeight: '1',
        },
      ],
      '9xl': [
        '8rem',
        {
          lineHeight: '1',
        },
      ],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        screens: "url('/path-to/image.png')",
      },
      colors: {
        accent: {
          50: '#E5E5FF',
          100: '#CCCCFF',
          200: '#9999FF',
          300: '#6666FF',
          400: '#3333FF',
          500: '#0000FF',
          600: '#0000CC',
          700: '#000099',
          800: '#000066',
          900: '#000033',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        display: ['var(--play-fair-font)', ...defaultTheme.fontFamily.sans],
        sans: ['var(--inter-font)', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}
