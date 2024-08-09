import React from 'react'
import { FaTools } from "react-icons/fa";
import { ImCheckmark2 } from "react-icons/im";

const WebMaintenance = () => {
  return (
    <div className='h-[100vh] w-[100%] flex items-center justify-center  '>
        <div className='h-[98%] w-[90%] shadow-2xl flex flex-col items-center '>
            <FaTools className='text-[90px] text-brandOne'/>
            <p className='text-[30px] font-bold'>Monthly Site Maintenance and Management</p>
            <p className='text-[25px] mb-4 '>Let us look after your site for you</p>
            <div className='h-[80px] w-[80%] mb-7 border-brandTwo  border-opacity-70 border-2 rounded-[40px] flex items-center justify-center text-[30px] '>N30k/Month</div>
                <div className='h-[40px] w-[80%] mb-10 '>
                    <p className='flex text-[25px] justify-between'>Themes/Plugins/Site Update<ImCheckmark2 className='ml-10 text-brandTwo'/> </p>
                    <hr className='h-[2px] bg-black mt-4'/>
                </div>
                <div className='h-[40px] w-[80%] mb-10 '>
                    <p className='flex text-[25px] justify-between'>Themes/Plugins/Site Update<ImCheckmark2 className='ml-10 text-brandTwo'/> </p>
                    <hr className='h-[2px] bg-black mt-4'/>
                </div>
                <div className='h-[40px] w-[80%] mb-10 '>
                    <p className='flex text-[25px] justify-between'>Themes/Plugins/Site Update<ImCheckmark2 className='ml-10 text-brandTwo'/> </p>
                    <hr className='h-[2px] bg-black mt-4'/>
                </div>
                <button className='h-[50px] w-[300px] bg-brandOne text-[20px] rounded-xl font-bold'>Chat with us</button>
        </div>
    </div>
  )
}

export default WebMaintenance