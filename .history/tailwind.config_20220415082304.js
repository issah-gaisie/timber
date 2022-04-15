module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tclPrimary: "#3e7c17",
      },
      keyframes: {
        fadeIn: { from: { opacity: 0, transform: "scale(.95)" } },
        fadeOut: { to: { opacity: 0, transform: "scale(.95)" } },
      },
      animation: {
        fadeIn: "fadeIn 0.1s ease-out",
        fadeOut: "fadeOut 0.15s ease-out forwards",
      },
    },
  },
  plugins: [],
};
