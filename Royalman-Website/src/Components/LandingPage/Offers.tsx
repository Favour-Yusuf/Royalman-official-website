import React from 'react'
import { MdBusinessCenter } from "react-icons/md";

const Offers = () => {
  return (
    <div className='h-[170vh] w-[100%] bg-brandTwo flex items-center justify-center '>
        <div className='h-[95%] w-[95%] bg-red-300 '>
            <p className='text-[50px] text-center font-bold '>The best Offers</p>
            <p className='text-center text-[20px] to-gray-500  '>Choose the ideal plan for what you need. We work with affordable prices for all types of websites.</p>
            <div className='h-[800px] w-[400px] bg-white rounded-lg '>
                <MdBusinessCenter className='text-[100px]'/>
            </div>
        </div>
    </div>
  )
}

export default Offers