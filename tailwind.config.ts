import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'rounded-t-lg',
    'pr-2',
    'text-left',
    'px-1',
    'px-6',
    'py-3',
    'py-4',
    {
      pattern: /bg-(dark|light)-(red|green|blue|white)-(1|2|3)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
  ],
  theme: {
    extend: {
      colors: {
        'dark-layer-2': 'rgb(26,26,26)',
        'light-gray-1': 'rgb(255, 255, 255)',
        'light-gray-2': 'rgb(245, 250, 254)',
        'brand-blue': 'rgb(84, 141, 182)',
        'brand-blue-s': 'rgb(126, 169, 200)',
        'light-blue-1': 'rgb(228, 239, 246)',
        'dark-blue-1': 'rgb(9, 64, 103)',
        'dark-yellow': 'rgb(255 192 30)',
        'dark-pink': 'rgb(239, 67, 99)',
        'dark-green-s': 'rgb(44 187 93)',
      },
    },
  },

  plugins: [],
};
export default config;
