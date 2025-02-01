/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-3px)' },
          '50%': { transform: 'translateX(3px)' },
          '75%': { transform: 'translateX(-3px)' },
        },
      },
      animation: {
        shake: 'shake 0.2s ease-in-out',
      },
      colors:{
        primary:"#ffc25d",
        gray:"#333646",
        darkGray:"#252734"
      },
      container:{
        center:true,
        padding:{
          DEFAULT: '1rem',
          sm: '2rem',
        }
      },
    },
  },
  plugins: [],
}

