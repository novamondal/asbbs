/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				"text": "#ffffff",
				"primary": "#393960",
				"secondary": "#1d1d30",
				"accent": "#7676a2",
				"background": "#27272a",
			},
			keyframes: {
				"fadeInUp": {
					"0%": { opacity: "0", transform: "translateY(10%)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
			},
			animation: {
				"fadeInUp-50": "fadeInUp 50ms ease-in-out",
				"fadeInUp-100": "fadeInUp 100ms ease-in-out",
				"fadeInUp-300": "fadeInUp 300ms ease-in-out",
				"fadeInUp-500": "fadeInUp 500ms ease-in-out",
				"fadeInUp-700": "fadeInUp 700ms ease-in-out",
				"fadeInUp-1000": "fadeInUp 1000ms ease-in-out",
			},
			fontSize: {
				rxs: "clamp(0.75rem, 1vw + 0.05rem, 0.875rem)",
				rsm: "clamp(0.75rem, 1vw + 0.05rem, 1rem)",
				rmd: "clamp(1rem, 2vw + 0.05rem, 1.125rem)",
				rlg: "clamp(1rem, 2vw + 0.05rem, 1.25rem)",
				rxl: "clamp(1rem, 2vw + 0.25rem, 1.5rem)",
				r2xl: "clamp(1.5rem, 2vw + 0.25rem, 1.875rem)",
				r3xl: "clamp(1.5rem, 4vw + 0.6rem, 2.25rem)",
				r4xl: "clamp(1.5rem, 4vw + 0.6rem, 3rem)",
				r5xl: "clamp(2rem, 7vw + 1rem, 3.75rem)",
				r6xl: "clamp(2rem, 7.5vw + 1rem, 4.5rem)",
				r7xl: "clamp(2.6rem, 8vw + 1rem, 6rem)",
				r8xl: "clamp(2.6rem, 8.5vw + 1rem, 8rem)",
				r9xl: "clamp(2.6rem, 9vw + 1rem, 9rem)",
				r10xl: "clamp(2.5rem, 9.5vw + 1rem, 10rem)",
				r11xl: "clamp(2.5rem, 10vw + 1rem, 11rem)",
				r12xl: "clamp(2.5rem, 10.5vw + 1rem, 12rem)",
			},
		},
	},
	plugins: [],
};
