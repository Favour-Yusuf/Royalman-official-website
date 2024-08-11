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
        'about':"url('https://res.cloudinary.com/decwhxo32/image/upload/v1723310140/AboutHero_gtn0oi.jpg')",
        'aboutbg':"url('./src/assets/SVG/Aboutbg.svg')",
        'portfolio':"url('./src/assets/SVG/portfolio.svg')"
      },
    },
  },
  plugins: [],
}