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
        'footer':"url('./src/assets/JPEG/footerbackground.jpeg')",
        'terms': "url('./src/assets/JPEG/TermsHero.webp')",
        'about':"url('./src/assets/JPEG/AboutHero.jpeg')",
        'aboutbg':"url('./src/assets/SVG/Aboutbg.svg')",
        'portfolio':"url('./src/assets/SVG/portfolio.svg')"
      },
    },
  },
  plugins: [],
}