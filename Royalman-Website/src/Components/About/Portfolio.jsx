import React from 'react'
import ecoBin from "https://res.cloudinary.com/decwhxo32/image/upload/v1723390931/ecoBin_qez5vq.png"
import LyfeCare from "https://res.cloudinary.com/decwhxo32/image/upload/v1723390870/LyfeCare_bvec02.png"
import EasyPay from "https://res.cloudinary.com/decwhxo32/image/upload/v1723390979/EasyPay_xjqffq.png"

const Portfolio = () => {
  return (
    <div className='h-[70vh] w-[100%] flex items-center bg-portfolio bg-cover '>
        <div className='h-[250px] w-[400px] ml-8 bg-white shadow-xl rounded-xl  '>
            <img src={ecoBin} alt="" className=' w-full  ' />
        </div>
        <div className='h-[250px] w-[400px] ml-8 bg-white shadow-xl rounded-xl  '>
            <img src={LyfeCare} alt="" className=' w-full  ' />
        </div>
        <div className='h-[250px] w-[400px] ml-8 bg-white shadow-xl rounded-xl  '>
            <img src={EasyPay} alt="" className=' w-full  ' />
        </div>
    </div>
  )
}

export default Portfolio