/** @type {import('tailwindcss').Config} */
import { radialGradientPlugin } from './radial-gradient';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		radialGradientPlugin,
		require("tailwindcss-animate"),
	]
};
