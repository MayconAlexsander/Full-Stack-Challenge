const brandColors = {
  birdBlue: "#1D98F0",
  platinum: "#E7E9EA",
  silver: "#71767B",
  onix: "#333639",
  richBlack: "#15202B"
}

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        ...brandColors,
        bgColor: brandColors.richBlack,
        textColor: brandColors.platinum
      }
    },
  },
  plugins: [],
}