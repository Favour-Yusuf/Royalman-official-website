import React from 'react'
import Header from './Components/Static/Header'
import Hero from './Components/LandingPage/Hero'
import WhatWeDo from './Components/LandingPage/WhatWeDo'
import Offers from './Components/LandingPage/Offers'
import WebMaintenance from './Components/LandingPage/Services/WebMaintenance'

const App = () => {

  return (
    <div>
      <Header/>
      <Hero/>
      <WhatWeDo/>
      <Offers/>
      <br />
      <br />
      <WebMaintenance/>
      
    </div>
  )
}

export default App