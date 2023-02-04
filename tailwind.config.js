const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const primary = '#1A1D20'

module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,scss}',
		'./components/**/*.{js,ts,jsx,tsx,scss}'
	],
	theme: {
		extend: {
			colors: {
				primary,
				green: '#5DBE66',
				black: colors.black,
				white: colors.white,
				transparent: colors.transparent,
				gray: {
					300: '#ADADAD',
					400: '#A5A5A5',
					500: '#9E9E9E',
					600: '#7B7B7B',
					700: '#4A4A4A',
					800: '#36383C',
					900: '#232428'
				}
			},
			spacing: {
				0.5: '0.12rem',
				layout: '2.75rem'
			},
			fontSize: {
				xs: '.9rem',
				sm: '1rem',
				base: '1.4rem',
				lg: '1.5rem',
				xl: '1.6rem',
				'2xl': '1.75rem',
				'3xl': '1.9rem',
				'4xl': '2.4rem',
				'5xl': '3.5rem',
				'6xl': '4.5rem',
				'7xl': '5.5rem'
			},
			borderRadius: {
				'layout-10': '0.7rem',
				'layout-15': '1.1rem'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},
			transitionDuration: {
				DEFAULT: '200ms'
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 }
				}
			},
			animation: {
				fade: 'fade .5s ease-in-out'
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3'
			}
		}
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.image-like-bg': {
					objectPosition: 'center',
					objectFit: 'cover',
					pointerEvents: 'none'
				},
				'.outline-border-none': {
					outline: 'none',
					border: 'none'
				}
			})
		})
	]
}
