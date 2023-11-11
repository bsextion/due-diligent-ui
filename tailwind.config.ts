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
				"dark-layer-1": "rgb(40,40,40)",
				"dark-layer-2": "rgb(26,26,26)",
				"dark-label-2": "rgba(239, 241, 246, 0.75)",
				"dark-divider-border-2": "rgb(61, 61, 61)",
				"dark-fill-2": "rgb(95, 109, 124)",
				"dark-fill-3": "hsla(0,0%,100%,.1)",
				"dark-gray-6": "rgb(138, 138, 138)",
				"dark-gray-7": "rgb(179, 179, 179)",
				"gray-8": "rgb(38, 38, 38)",
				"dark-gray-8": "rgb(219, 219, 219)",
				"brand-blue": "rgb(44, 147, 221)",
				"brand-blue-s": "rgb(84, 141, 182)",
				"dark-yellow": "rgb(255 192 30)",
				"dark-pink": "rgb(239, 67, 99)",
				"dark-green-s": "rgb(44 187 93)",
			},
		},
	},
	plugins: [],
}
export default config
