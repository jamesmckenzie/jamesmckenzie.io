module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        fade: "fade 2s",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        inconsolata: ['"Inconsolata"', "monospace"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
