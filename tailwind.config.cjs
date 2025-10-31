/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // 🟢 Primary color — deep green
        primary: "#0f5132", // dark emerald green
        // 💚 Secondary — softer green accent
        secondary: "#20c997",
        // 🌿 Tertiary — muted greenish-gray for depth
        tertiary: "#1b4332",

        // ⚫ Background shades for dark mode
        "black-100": "#0b0f0d",
        "black-200": "#050806",
        "white-100": "#e9f5ec",

        // 🌈 Optional highlight
        "accent-green": "#00ff88",
      },

      // 💫 Shadow for cards
      boxShadow: {
        card: "0px 25px 100px -15px rgba(0, 255, 136, 0.25)", // greenish glow
      },

      // 📱 Extra small screen breakpoint
      screens: {
        xs: "450px",
      },

      // 🌌 Background gradient
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(135deg, #0b0f0d 0%, #0f5132 50%, #1b4332 100%)",
      },
    },
  },
  plugins: [],
};
