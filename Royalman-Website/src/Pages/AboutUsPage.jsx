import React from 'react'
import AboutHero from '../Components/About/AboutHero'
import AboutUs from '../Components/About/AboutUs'
import Portfolio from '../Components/About/Portfolio'
import { Helmet } from 'react-helmet-async'


const AboutUsPage = () => {
  return (
    <>
    <Helmet>
    <title>About</title>
    <meta name='description' content='About Royalman Digital Concept' />
    <link rel="canonical" href="/about" />
    </Helmet>
    <AboutHero/>
    <AboutUs/>
    <Portfolio/>
    
    </>
  )
}

export default AboutUsPage