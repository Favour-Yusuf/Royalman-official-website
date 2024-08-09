/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    
    extend: {
      colors:{
        brandOne: "#FF9300",
        brandTwo:"#000F9A"
      },
      backgroundImage: {
        'hero': "url('./src/assets/JPEG/BgImage.jpeg')",
      },
    },
  },
  plugins: [],
}