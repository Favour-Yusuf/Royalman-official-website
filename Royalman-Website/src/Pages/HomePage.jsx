import React from 'react'
import Hero from '../Components/LandingPage/Hero'
import WhatWeDo from '../Components/LandingPage/WhatWeDo'
import Offers from '../Components/LandingPage/Offers'
import WebMaintenance from '../Components/LandingPage/WebMaintenance'
import SuccessStory from '../Components/LandingPage/CaseStudy'
// import { Helmet } from 'react-helmet-async'


const HomePage = () => {
  return (
    <>
    {/* <Helmet>
    
    </Helmet> */}
    <Hero/>
    <WhatWeDo/>
    <SuccessStory/>
    <Offers/>
    <br />
    <WebMaintenance/>
    <br />
    </>
  )
}

export default HomePage