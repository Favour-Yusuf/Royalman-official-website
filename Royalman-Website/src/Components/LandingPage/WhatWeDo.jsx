import React from 'react'
import { FaGlobe, FaWordpressSimple,FaShoppingCart,FaMobileAlt } from "react-icons/fa";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

const WhatWeDo = () => {
  return (
    <div className='h-[40vh] w-[100%] flex items-center content-center'>
        <div className='h-[100%] w-[90%] flex items-center jsutify-center flex-col'>
            <p className='text-center text-[45px] font-bold text-gray-700 mb-7 '>We can create any kind of website</p>
            <div className='h-[70%]  w-[85%]  flex justify-between'>
            <div className='  w-[150px] h-[90%] flex flex-col items-center justify-between'>
                <FaGlobe className='text-[80px] text-gray-700'/>
                <p className='text-[20px]'>Custom Sites</p>  
            </div>
            <div className='  w-[150px] h-[90%] flex flex-col items-center justify-between'>
                <FaWordpressSimple className='text-[80px] text-gray-700'/>
                <p className='text-[20px]'>Basic Sites</p>  
            </div>
            <div className='  w-[150px] h-[90%] flex flex-col items-center justify-between'>
                <FaShoppingCart className='text-[80px] text-gray-700'/>
                <p className='text-[20px]'>E-Commerce</p>  
            </div>
            <div className='  w-[150px] h-[90%] flex flex-col items-center justify-between'>
                <FaMobileAlt className='text-[80px] text-gray-700'/>
                <p className='text-[20px]'>Mobile Apps</p>  
            </div>
            <div className='  w-[150px] h-[90%] flex flex-col items-center justify-between'>
                <MdOutlineScreenSearchDesktop className='text-[80px] text-gray-700'/>
                <p className='text-[20px]'>SEO</p>  
            </div>
            </div>
        </div>

    </div>
  )
}

export default WhatWeDo