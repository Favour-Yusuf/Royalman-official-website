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
        'hero': "url('https://res.cloudinary.com/decwhxo32/image/upload/v1723390366/BgImage_hpfyf0.jpg')",
        'footer':"url('https://res.cloudinary.com/decwhxo32/image/upload/v1723390446/footerbackground_relqna.jpg')",
        'terms': "url('https://res.cloudinary.com/decwhxo32/image/upload/v1723390499/TermsHero_kupoat.webp')",
        'about':"url('https://res.cloudinary.com/decwhxo32/image/upload/v1723310140/AboutHero_gtn0oi.jpg')",
        'aboutbg':"url('https://res.cloudinary.com/decwhxo32/image/upload/v1723390569/Aboutbg_pzcqjf.svg')",
        'portfolio':"url('https://res.cloudinary.com/decwhxo32/image/upload/v1723390602/portfolio_swrei1.svg')",
        'blog':"url('https://res.cloudinary.com/decwhxo32/image/upload/v1724083671/blog_i4tg5l.webp')"
      },
    },
  },
  plugins: [],
}