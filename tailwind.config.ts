import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			backgroundColor: {
				"purple-300": "#7f56d9",
				"purple-400": "#6941c6",
				"purple-500": "#53389e",
			},
		},
	},
	colors: {
		gray: { "600": "#475467", "700": "#344054" },
	},
	plugins: [],
};
export default config;
