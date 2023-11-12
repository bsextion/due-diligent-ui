import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
		extend: {
			colors: {
				"dark-layer-2": "rgb(26,26,26)",
				"light-gray-1": "rgb(245, 250, 254)",
				"brand-blue": "rgb(84, 141, 182)",
				"brand-blue-s": "rgb(126, 169, 200)",
				"dark-yellow": "rgb(255 192 30)",
				"dark-pink": "rgb(239, 67, 99)",
				"dark-green-s": "rgb(44 187 93)",
			},
		},
	},
	plugins: [],
}
export default config
