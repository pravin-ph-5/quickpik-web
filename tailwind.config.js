// hah om sai ram om bhaskaraaya namaha om namaha sivayaa 

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        azure: '#0077B6',
        saffron: '#FFC000',
        tertiary: "#F2F2F2"
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
