module.exports = {
	mode: 'jit',
	darkMode: 'class',
	purge: [
		// purge out css that isn't being used
		'./src/**/*.svelte',
		'./src/**/*.html',
		'./src/**/*.ts',
		'./src/**/*.js'
	],
	theme: {
		fontFamily: {
			ubuntuSans: ['Ubuntu', 'sans-serif'],
			firaMono: ['fira-mono', 'sans-serif']
		},
		extend: {
			colors: {
				ashenLowContrast: {
					light: '#9CA6B6',
					dark: '#494C59'
				},
				ashenMidContrast: {
					light: '#656870',
					dark: '#A7AEC1'
				},
				ashenHighContrast: {
					light: '#333742',
					dark: '#EDF0F6'
				},
				bldrsCoveDeepBlue: '#090d1a',
				bldrsCoveCoolSlate: '#141928',
				bldrsCoveCoolGray: '#252936',
				bldrsCoveBrightBlue: '#38aaff',
				bldrsCoveMidBlue: '#2f75d6',
				bldrsCovePureBlue: '#093bc7',
				bldrsCoveLtBabyBlue: '#d3edff',
				bldrsCoveLtGray: '#cccccc',
				bldrsCovePaleStone: '#e0eaf0'
			},
			fontSize: {
				'4xl-a': '2.375rem'
			},
			gridTemplateColumns: {
				// Simple 16 column grid
				16: 'repeat(16, minmax(0, 1fr))'
			},
			lineHeight: {
				'4xl-a': '2.875rem'
			},
			screens: {
				xs: '425px'
			},
			dropShadow: {
				xlLight: '0 10px 15px rgba(0, 0, 0, 0.06)'
			},
			spacing: {
				106: '30rem',
				120: '40.75rem'
			},
			zIndex: {
				'-10': '-10'
			}
		}
	},
	variants: {},
	plugins: []
};
