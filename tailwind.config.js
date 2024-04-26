/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#F8EEFD",
        black_05: "rgba(24, 24, 24, 0.5)",
        white: "rgba(245, 245, 245, 1)",
        white_05: "rgba(245, 245, 245, 0.5)",
        white_01: "rgba(245, 245, 245, 0.1)",
        green: "rgba(30, 215, 96, 1)",
        green_08: "rgba(30, 215, 96, 0.8)",
        green_06: "rgba(30, 215, 96, 0.6)",
        green_top: "rgba(26, 173, 78, 1)",
        pink: "background: linear-gradient(180deg, rgba(143, 0, 255, 0.04) 0%, rgba(191, 0, 138, 0.2) 100%)",
        pink_01: "#bf008a",
        purple1: "#8f00ff",
        pink1: "#bf008a",
      },
      fontFamily: {
        'quatro': ['Quattro-Medium', 'sans-serif'],
        'quatro': ['Quattro-Book', 'sans-serif'],
        'quatro-bold': ['Quattro-SemiBold', 'sans-serif'],
      },
      animation: {
        slideup: "slideup 1s ease-in-out",
        slideup2: "slideup 500ms ease-in-out",
      },
      keyframes: {
        slideup: {
          from: { opacity: 0, transform: "translateY(25%)" },
          to: { opacity: 1, transform: "none" },
        },
      },
    },
  },
  plugins: [],
};

