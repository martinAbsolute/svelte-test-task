// Shamelessly stole this from https://stackoverflow.com/a/77121542
const plugin = require('tailwindcss/plugin');

function _presets() {
	const shapes = ['circle', 'ellipse'];
	const pos = {
		c: 'center',
		t: 'top',
		b: 'bottom',
		l: 'left',
		r: 'right',
		tl: 'top left',
		tr: 'top right',
		bl: 'bottom left',
		br: 'bottom right'
	};
	let result = {};
	for (const shape of shapes)
		for (const [posName, posValue] of Object.entries(pos))
			result[`${shape}-${posName}`] = `${shape} at ${posValue}`;

	return result;
}

export const radialGradientPlugin = plugin(
	function ({ matchUtilities, theme }) {
		matchUtilities(
			{
				// map to bg-radient-[*]
				'bg-radient': (value) => ({
					'background-image': `radial-gradient(${value},var(--tw-gradient-stops))`
				})
			},
			{ values: theme('radialGradients') }
		);
	},
	{
		theme: {
			radialGradients: _presets()
		}
	}
);
