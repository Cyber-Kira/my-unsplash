/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				noto: 'Noto Sans, sans-serif',
				montserrat: 'Montserrat, sans-serif',
			},
			boxShadow: {
				button: '0px 1px 6px rgba(0, 0, 0, 0.1)',
			},
			keyframes: {
				expand: {
					'0%': {
						transform: 'scale(0)',
					},
					'100%': {
						transform: 'scale(1)',
					},
				},
				shrink: {
					'0%': {
						transform: 'scale(1)',
					},
					'100%': {
						transform: 'scale(0)',
					},
				},

				slideIn: {
					'0%': {
						transform: 'translateY(-15%)',
						opacity: '0%',
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '100%',
					},
				},
			},
			animation: {
				bubbleExpand: 'expand .20s ease-out forwards',
				bubbleShrink: 'shrink .15s ease-in forwards',
				slideIn: 'slideIn .35s ease-out forwards',
			},
		},
		colors: {
			transparent: 'transparent',
			white: '#FFFFFF',
			dark: '#333333',
			backDark: 'rgba(0, 0, 0, 0.38)',
			backDarkLighter: 'rgba(0, 0, 0, 0.25)',
			lightDark: '#4F4F4F',
			gray: '#BDBDBD',
			accentGreen: '#3DB46D',
			accentRed: '#EB5757',
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
}
