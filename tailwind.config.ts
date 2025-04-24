import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		fontSize: {
    			'12': '12px',
    			'13': '13px',
    			md: '16px'
    		},
    		maxHeight: {
    			'690': '690px',
    			'590': '590px',
    		},
    		height: {
    			'55': '55px',
    			'428': '428px',
    			'214': '214px',
    			'292': '292px',
    			'103': '103px',
    			'70': '70px'
    		},
    		width: {
    			'600': '646px',
    			'686': '686px',
    			'330': '330px',
    			'276': '276px',
    			'70': '70px',
    			'400': '400px'
    		},
    		maxWidth: {
    			'100': '25.625rem',
    			'600': '646px',
    			'686': '686px',
    			'776': '776px',
    			'720': '720px',
    		},
    		boxShadow: {
    			inputShadow: '0px 10px 20px 0px rgba(68,97,242,0.05)',
    			btnShadow: '0px 18px 30px 0px rgba(47, 28, 28, 0.1)',
    			comShadow: '0px 15px 40px 0px rgba(0, 0, 0, 0.08)',
    			dilogShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.25)'
    		},
    		fontFamily: {
    			inter: [
    				'Inter',
    				'sans-serif'
    			],
    			poppins: [
    				'Poppins',
    				'sans-serif'
    			],
    			roboto: 'var(--font-roboto)'
    		},
    		colors: {
    			borderColor: '#E0E0E9',
    			qusColor: '#EDEFF3',
    			borderHover: '#F04438',
    			inputBg: '#F9F9F9',
    			main: '#4461F2',
    			mainHover: '#3d57da',
    			borderColor2: '#3364FD',
    			textColor: '#696F79',
    			textSub: '#535353',
    			bgComp: '#F9F9F9',
    			timeColor: '#11CE19',
    			trueColor: '#CCD7EB',
    			trueBg: '#CAF9CC',
    			falseBorder: '#CC1010',
    			falseBg: '#F8D2D2',
    			headerColor: '#122D9C',
    			iconPass: '#949BA5',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
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
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		},
    		borderRadius: {
    			'10': '10px',
    			'20': '20px',
    			'100': '100px',
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};
export default config;
