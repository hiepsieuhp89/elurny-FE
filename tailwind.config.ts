import type { Config } from "tailwindcss";

const config: Config = {
	prefix: '',
	darkMode: ["class", 'class'],
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			height: {
				'90p': '90%',
				'10p': '10%',
				'50p': '50%',
				'70v': '70vh'
			},
			fontFamily: {
				'raleway': [
					'Raleway',
					'sans-serif'
				],
				sans: [
					'Raleway',
					'sans-serif'
				]
			},
			filter: {
				'sidebar-icon-active': 'brightness(0) saturate(100%) invert(51%) sepia(11%) saturate(1317%) hue-rotate(344deg) brightness(97%) contrast(86%)'
			},
			colors: {
				mainVioletV1: '#764DAE',
				mainYellowV1: '#FFC35E',
				mainBackgroundV1: '#161616',
				mainCardV1: '#2A2930',
				mainDarkBackgroundV1: '#020003',
				mainText: '#FFFFFF',
				mainBorderV1: '#2B2B2B',
				mainGrayV1: '#B3B3B3',
				secondaryText: '#A0A0A0',
				accentColor: '#E0C3A9',
				grayV2: {
					'100': '#F0F0F0',
					'200': '#E1E1E1',
					'300': '#D1D1D1',
					'400': '#AEAEAE',
					'500': '#9A9A9A',
					'600': '#868686',
					'700': '#717171',
					'800': '#5D5D5D',
					'900': '#494949',
					'1000': '#353535',
					DEFAULT: '#C2C2C2'
				},
				successV2: {
					'100': '#BCF5DA',
					'200': '#7AECB5',
					'300': '#37E28F',
					'400': '#127F4A',
					DEFAULT: '#1AB369'
				},
				warningV2: {
					'100': '#FFE2AE',
					'200': '#FFC65C',
					'300': '#CE8500',
					'400': '#925E00',
					DEFAULT: '#FFA90B'
				},
				errorV2: {
					'100': '#FDB8CB',
					'200': '#FC7797',
					'300': '#E3063B',
					'400': '#9F0429',
					DEFAULT: '#FA3363'
				},
				main: {
					'50': '#f0f3f6',
					'100': '#e1f4fd',
					'150': '#e3f1fa',
					'200': '#acc5db',
					'300': '#acc5db',
					'400': '#5997bc',
					'500': '#4d7394',
					gray: '#4b4b4a',
					DEFAULT: '#acc5db'
				},
				gradient: {
					good: 'bg-gradient-to-b from-[#2af598] to-[#08aeea]',
					medium: 'bg-gradient-to-b from-[#F76B1C] to-[#FAD961]',
					bad: 'bg-gradient-to-b from-[#F99D15] to-[#FF1212]'
				},
				status: {
					'1': '#84c2df',
					'2': '#8aceb5',
					'3': '#005586',
					'4': '#dc5557',
					'5': '#d1d3d4',
					blue: '#27aae1',
					good: '#1ab369',
					fail: '#fa3363',
					medium: '#ffa90b'
				},
				other: {
					blue: '#27aae1',
					interview: '#f05672',
					schedule: '#e0f1ef',
					treatement: '#afc1d5'
				},
				background: 'hsl(var(--background))',
				setting: {
					table: '#eaecef',
					border: '#dfe2e6'
				},
				label: {
					'1': '#ed1849',
					'2': '#f7a7ab',
					'3': '#f16b8f',
					'4': '#f26a57',
					'5': '#9d435d',
					'6': '#bfae9b',
					'7': '#fff5ac',
					'8': '#00a9c6'
				},
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			screens: {
				sssm: '360px',
				ssm: '375px',
				sm: '414px',
				xsm: '540px',
				md: '640px',
				lg: '768px',
				xl: '1024px',
				'2xl': '1280px',
				'3xl': '1536px',
				'4xl': '1792px'
			},
			boxShadow: {
				section: '0px 0px 16px rgba(60, 49, 40, 0.09)'
			},
			borderRadius: {
				lg: '8px',
				xl: '12px',
				'2xl': '16px',
				'3xl': '24px',
				'4xl': '32px',
				'5xl': '40px',
				full: '9999px'
			},
			keyframes: {
				float: {
					'0%, 100%': {
						transform: 'translateY(-5px)'
					},
					'50%': {
						transform: 'translateY(5px)'
					}
				},
				'move-to-top': {
					'0%': {
						transform: 'translateY(20px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
			},
			animation: {
				float: 'float 2s ease-in-out infinite',
				'move-to-top': 'move-to-top 0.3s ease-out forwards',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
	safelist: [
		"text-label-1",
		"text-label-2",
		"text-label-3",
		"text-label-4",
		"text-label-5",
		"text-label-6",
		"text-label-7",
		"text-label-8",
	],
};

export default config;
