
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF7D",
        secondary: "#FFB830",
        alert: "#FF6B6B",
        background: "#FAFAF5",
        surface: "#FFFFFF",
        text: {
          primary: "#1A1A2E",
          secondary: "#6B7280",
          muted: "#9CA3AF",
        }
      },
      borderRadius: {
        'card': '20px',
        'pill': '100px',
        'button': '14px',
      },
      boxShadow: {
        'soft': '0px 4px 20px rgba(0, 0, 0, 0.07)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
