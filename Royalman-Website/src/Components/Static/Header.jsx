import React from 'react'
import Logo from "../../assets/png/RoyalmanLogo.png"
import { Link } from 'react-router-dom'


const Header = () => {
  
  return (
    <header className='h-[70px] w-full bg-white shadow-lg flex justify-between items-center fixed top-0 left-0 z-10 '>
        <div className='ml-4'>
            <img src={Logo} alt="Logo" className='h-[70px]' />
        </div>
        <div className=' w-[600px] h-[80%] flex justify-between items-center text-[20px] '>
            <Link to='/'>Home</Link>
            <Link to='/about'>About us</Link>
            <Link>Contact us</Link>
            <Link>Blog</Link>
        </div>
        <button className='mr-4 h-9 w-44 rounded-lg bg-brandOne'>Contact us</button>
    </header>
  )
}

export default Header