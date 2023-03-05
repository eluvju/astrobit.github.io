/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			primary: '#9318e1',
			textcolor: '#F6F4F3',
			secondary: '#161616',
			}
			
		},
	},
	variants: {
		fill: ['hover', 'focus'], // this line does the trick
	  },	
	plugins: [],
}
