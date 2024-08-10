import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Static/Header'
import Footer from '../Static/footer'
import ScrollToTop from '../../Utils/ScrollToTop'



const WebLayout = () => {
  return (
    <>
    <ScrollToTop/>
    <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default WebLayout