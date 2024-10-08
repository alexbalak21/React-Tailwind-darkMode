/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyBackgroundColor: "rgba(var(--body-background-color))",
        foregroundBgColor: "rgba(var(--foreground-bg-color))", // bg-gray-800
        cardBorderColor: "rgba(var(--border-color))", // border-gray-700
        cardTitleColor: "rgba(var(--title-color))", // text-white
        cardTextColor: "rgba(var(--text-color))", // text-gray-400
        cardButtonBackground: "rgba(var(--card-button-background))", // bg-blue-600
        cardButtonHoverBackground: "rgba(var(--card-button-hover-background))", // hover:bg-blue-700
        cardFocusRing: "rgba(var(--card-focus-ring))", // focus:ring-blue-800
        buttonTexColor: "rgba(var(--button-text-color))",
      },
    },
  },
  plugins: [],
}
