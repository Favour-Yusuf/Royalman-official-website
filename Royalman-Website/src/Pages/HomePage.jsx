import React from 'react'
import Hero from '../Components/LandingPage/Hero'
import WhatWeDo from '../Components/LandingPage/WhatWeDo'
import WebMaintenance from '../Components/LandingPage/WebMaintenance'
import SuccessStory from '../Components/LandingPage/CaseStudy'
import FrustrationsList from '../Components/LandingPage/ProblemIdentification'
import Consequences from '../Components/LandingPage/Consequences'
import HighPerformingWebsite from '../Components/LandingPage/GeneralSolution'
import RoyalmanDigitalConcept from '../Components/LandingPage/Royalman'
import Testimonials from '../Components/LandingPage/Testimonials'
import ProcessSteps from '../Components/LandingPage/Steps'
import MoneyBackGuarantee from '../Components/LandingPage/Guarantee'
import Packages from '../Components/LandingPage/Packages'
import FAQ from '../Components/LandingPage/FAQ'

// import { Helmet } from 'react-helmet-async'


const HomePage = () => {
  return (
    <>
   
    <Hero/>
    {/* <WhatWeDo/> */}
    <SuccessStory/>
    <FrustrationsList/>
    <Consequences/>
    <HighPerformingWebsite/>
    <RoyalmanDigitalConcept/>
    <Testimonials/>
    <ProcessSteps/>
    <MoneyBackGuarantee/>
    <Packages/>
    <FAQ/>
    {/* <WebMaintenance/> */}
    </>
  )
}

export default HomePage