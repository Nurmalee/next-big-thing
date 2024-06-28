// tailwind.config.js
module.exports = {
	mode: 'jit',
	purge: [
		'./public/**/*.html',
		'./src/**/*.{js,jsx,ts,tsx,vue}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			keyframes: {
				typing: {
					from: { width: '0' },
				},
				blink: {
					'50%': { 'border-color': 'transparent' },
				},
			},
			animation: {
				typing: 'typing 2s steps(22)',
				blink: 'blink 0.5s step-end infinite alternate',
			},
			fontFamily: {
				abel: ['"Abel"', 'sans-serif'],
				roboto: ['"Roboto Slab"', 'serif'],
				poppins: ['"Poppins"', 'sans-serif'],
				playwrite: ['"Playwrite IT Moderna"', 'cursive'],
				bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
