import React from 'react'
import Hero from '../Components/LandingPage/Hero'
import WhatWeDo from '../Components/LandingPage/WhatWeDo'
import Offers from '../Components/LandingPage/Offers'
import WebMaintenance from '../Components/LandingPage/WebMaintenance'
import SuccessStory from '../Components/LandingPage/CaseStudy'
import FrustrationsList from '../Components/LandingPage/ProblemIdentification'
import Consequences from '../Components/LandingPage/Consequences'
// import { Helmet } from 'react-helmet-async'


const HomePage = () => {
  return (
    <>
    {/* <Helmet>
    
    </Helmet> */}
    <Hero/>
    <WhatWeDo/>
    <SuccessStory/>
    <FrustrationsList/>
    <Consequences/>
    <Offers/>
    <br />
    <WebMaintenance/>
    <br />
    </>
  )
}

export default HomePage