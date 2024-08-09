import React from 'react'
import Logo from "../../assets/png/RoyalmanLogo.png"


const Header = () => {
  
  return (
    <header className='h-[70px] w-full bg-white shadow-lg flex justify-between items-center fixed top-0 left-0 z-10 '>
        <div className='ml-4'>
            <img src={Logo} alt="Logo" className='h-[70px]' />
        </div>
        <div className=' w-[600px] h-[80%] flex justify-between items-center text-[20px] '>
            <nav>Home</nav>
            <nav>About us</nav>
            <nav>Contact us</nav>
            <nav>Blog</nav>
        </div>
        <button className='mr-4 h-9 w-44 rounded-lg bg-brandOne'>Contact us</button>
    </header>
  )
}

export default Header