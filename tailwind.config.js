const { scale } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        meals: "appear 1s ease-out forwards",
        show: "showfromup 1s ease-in-out forwards",
        bump: "bump 300ms ease-out",
      },
      keyframes: {
        appear: {
          from: {
            opacity: 0,
            transform: "translateY(3rem)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        showfromup: {
          from: {
            opacity: 0,
            transform: "translateY(0)",
          },
          to: {
            opacity: 1,
            transform: "translateY(3rem)",
          },
        },
        bump: {
          "0%": { transform: "scale(1)" },
          "10%": { transform: "scale(0.9)" },
          "30%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(1.15)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
