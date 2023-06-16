/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eerieBlack': "#222222",
        'white': "#ffffff",
        'cadetGray': "#95a3b3",
        'tiffanyBlue': "#84DCC6",
      },
      fontFamily: {
        'mono': ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'stripe': "repeating-linear-gradient(45deg, transparent, transparent 3px, #222 3px, #84DCC6 10px), linear-gradient( to bottom, #222, #84DCC6)",
      },
    },
  },
  plugins: [],
}

