/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "400px",
        xs: "475px", // Custom breakpoint for extra small screens
      },
      keyframes: {
        shadowPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(168, 85, 247, 0.7)" },
          "50%": { boxShadow: "0 0 15px 5px rgba(168, 85, 247, 0.4)" },
        },
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        shadowPulse: "shadowPulse 2s infinite",
        scroll: "scroll 10s linear infinite",
      },
    },
  },
  plugins: [],
};
