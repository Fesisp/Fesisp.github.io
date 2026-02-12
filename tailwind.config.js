/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00ff41", // Matrix Green
        "primary-dim": "rgba(0, 255, 65, 0.1)",
        "primary-glow": "rgba(0, 255, 65, 0.4)",
        secondary: "#008F11",
        dark: "#050505",
        surface: "#0a0a0a",
        "surface-hover": "#111111",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
