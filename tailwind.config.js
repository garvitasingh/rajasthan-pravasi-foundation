/** tailwind.config.js */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // ensures Tailwind processes our components
  theme: {
    extend: {
      // Add Italianno as a named font so we can use `font-italianno` in JSX
      fontFamily: {
        italianno: ["Italianno", "cursive"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
 