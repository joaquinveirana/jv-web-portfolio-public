import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'dark-primary-color-200': '#0d131a',
      'dark-primary-color-300': '#161f2b',
      'dark-primary-color-400': '#1e2b3c',
      'dark-primary-color-500': '#27374d',
      'dark-primary-color-600': '#30435e',
      'dark-primary-color-700': '#384f6f',
      'dark-primary-color-800': '#415b80',
      'dark-secondary-color': '#526d82',
      'light-primary-color': '#dde6ed',
      'light-secondary-color': '#9db2bf',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
export default config;
