/** @type {import('tailwindcss').Config} */
export default {
  content: { relative: true, files: ["./index.html", "./src/**/*.{ts,tsx}"] },
  theme: {
    extend: {
      colors: {
        ink: "#294A5F",
        linen: "#F0F0F2",
        steel: "#6A8FA6",
        powder: "#A9C6D9",
        petal: "#F2D399",
        gold: "#F2BA52",
        white: "#F0F0F2"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(41, 74, 95, 0.16)",
        glow: "0 14px 40px rgba(242, 186, 82, 0.28)"
      }
    }
  },
  plugins: []
};
