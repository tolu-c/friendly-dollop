module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        meals: "appear 1s ease-out forwards",
        show: "showfromup 1s ease-in-out forwards",
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
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
