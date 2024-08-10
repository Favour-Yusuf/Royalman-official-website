import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Static/Header'
import Footer from '../Static/footer'



const WebLayout = () => {
  return (
    <>
    <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default WebLayout