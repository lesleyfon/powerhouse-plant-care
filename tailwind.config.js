module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			green: {
				primary: "#25523B",
				secondary: "#7c9789",
				hover: "#92a89d",
			},
			white: {
				lightGreen: "#e9edeb",
				deepGreen: "#0b1811",
				bgColor: "#ffffff",
			},
			"th-primary": "var(--primary)",
			"th-secondary": "var(--secondary)",
			"th-light": "var(--lightGreen)",
			"th-green": "var(--deepGreen)",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
