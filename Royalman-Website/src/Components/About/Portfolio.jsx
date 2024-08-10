import React from 'react'
import ecoBin from "../../assets/png/ecoBin.png"
import LyfeCare from "../../assets/png/LyfeCare.png"
import EasyPay from "../../assets/png/EasyPay.png"

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