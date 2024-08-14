/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefinSans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata', 'sans-serif'],
      },
      colors:{
        'white': "#FFFFFF",
        'black': '#000000',
        'grey': '#E5EAF1',

      },
      backgroundImage: {
        'hero': "url('assets/Object.png')",
        'hero-sm': "url('assets/Object-sm.png')",

      },
    },
  },
  plugins: [],
}

