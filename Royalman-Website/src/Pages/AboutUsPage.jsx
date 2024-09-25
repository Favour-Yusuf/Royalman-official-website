import React from 'react'
import HeroSection from '../Components/About/AboutHero'
import AboutContent from '../Components/About/AboutContent'
import MissionSection from '../Components/About/MissionSection'
import WhyChooseUs from '../Components/About/WhyChooseUs'
import { Helmet } from 'react-helmet-async'


const AboutUsPage = () => {
  return (
    <>
    <Helmet>
    <title>About</title>
    <meta name='description' content='About Royalman Digital Concept' />
    <link rel="canonical" href="/about" />
    </Helmet>
    <HeroSection />
      <AboutContent />
      <MissionSection />
      <WhyChooseUs />
    
    </>
  )
}

export default AboutUsPage