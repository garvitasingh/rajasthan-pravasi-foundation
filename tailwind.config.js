/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        italianno: ["Italianno", "cursive"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        shine: "shine 6s ease-out infinite",
      },
      backgroundImage: {
        "button-gradient":
          "conic-gradient(from 0deg, #00F5FF, #000, #000, #00F5FF, #000, #000, #000, #00F5FF)",
      },
      backgroundSize: {
        300: "300% 300%",
      },
    },
  },
  plugins: [],
};
