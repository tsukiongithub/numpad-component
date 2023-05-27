/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			keyframes: {
				shake: {
					"10%, 90% ": {
						transform: "translate3d(-1px, 0, 0)",
					},

					"20%, 80% ": {
						transform: "translate3d(2px, 0, 0)",
					},

					"30%, 50%, 70%": {
						transform: "translate3d(-3px, 0, 0)",
					},

					"40%, 60% ": {
						transform: "translate3d(3px, 0, 0)",
					},
				},
			},
			animation: {
				shake: "shake 700ms ease-in-out",
			},
		},
	},
	plugins: [],
};
