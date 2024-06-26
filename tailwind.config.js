/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: '0' },
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
        },
      },
      animation: {
        typing: 'typing 2s steps(22)',
        blink: 'blink 0.5s step-end infinite alternate',
      },
    },
  },
  plugins: [],
}


