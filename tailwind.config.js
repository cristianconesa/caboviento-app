module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00e676", // Modern green
        background: "#111111", // Deep black
        surface: "#222831", // Grayish black
        border: "#393e46", // Gray border
        text: "#eeeeee", // Light text
        secondaryText: "#aaaaaa", // Secondary text
      }
    }
  },
  plugins: []
};