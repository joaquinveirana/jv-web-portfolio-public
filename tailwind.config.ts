import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'dark-200': '#0d131a',
      'dark-300': '#161f2b',
      'dark-400': '#1e2b3c',
      'dark-500': '#27374d',
      'dark-600': '#30435e',
      'dark-700': '#384f6f',
      'dark-800': '#415b80',
      'dark-secondary-color': '#526d82',
      'light-200': '#abc1d3',
      'light-300': '#bccddb',
      'light-400': '#ccdae4',
      'light-500': '#dde6ed',
      'light-600': '#eef2f6',
      'light-700': '#ffffff',
      'light-800': '#ffffff',

      'light-secondary-color-200': '#6f8ea1',
      'light-secondary-color-300': '#7e9aab',
      'light-secondary-color-400': '#8ea6b5',
      'light-secondary-color-500': '#9db2bf',
      'light-secondary-color-600': '#acbec9',
      'light-secondary-color-700': '#bccad3',
      'light-secondary-color-800': '#cbd6dd',

      'cyan-500': '#1ab3ff',
      'cyan-600': '#34bbff',
      'cyan-700': '#4dc4ff',
    },
    extend: {
      animation: {
        'fade-in': 'fadeIn 1000ms ease-in-out',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderWidth: {
        3: '3px',
      },
      grayscale: {
        20: '20%',
        30: '30%',
        50: '50%',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
export default config;
