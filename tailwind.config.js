module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			green: {
				primary: "#25523B",
				secondary: "#7c9789",
				hover: "#a7b9b0",
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
			"th-login-hover": "var(--hover)",
		},

		maxHeight: {
			0: "0",
			"1/4": "25%",
			"1/2": "50%",
			"3/4": "75%",
			full: "100%",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
