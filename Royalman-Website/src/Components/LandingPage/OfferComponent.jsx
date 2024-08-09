import React from 'react'
import { MdBusinessCenter } from "react-icons/md";
import { ImCheckmark2 } from "react-icons/im";

const OfferComponent = () => {
  return (
    <div className='h-[800px] w-[380px] bg-white rounded-lg flex items-center flex-col'>
                <MdBusinessCenter className='text-[150px] text-brandOne '/>
                <p className='text-[40px]'>Business Website</p>
                <div className='h-[80px] w-[300px] mb-7 border-brandTwo  border-opacity-70 border-2 rounded-[40px] flex items-center justify-center text-[30px] '>$99.99/N150k</div>
                <div className='h-[40px] w-[300px] mb-10 '>
                    <p className='flex items-center justify-center text-[25px]'>Professional Design <ImCheckmark2 className='ml-10 text-brandTwo'/> </p>
                    <hr className='h-[2px] bg-black mt-4'/>
                </div>
                <div className='h-[40px] w-[300px] mb-10 '>
                    <p className='flex items-center justify-center text-[25px]'>Professional Design <ImCheckmark2 className='ml-10 text-brandTwo'/> </p>
                    <hr className='h-[2px] bg-black mt-4'/>
                </div>
                <div className='h-[40px] w-[300px] mb-10 '>
                    <p className='flex items-center justify-center text-[25px]'>Professional Design <ImCheckmark2 className='ml-10 text-brandTwo'/> </p>
                    <hr className='h-[2px] bg-black mt-4'/>
                </div>
                <div className='h-[40px] w-[300px] mb-10 '>
                    <p className='flex items-center justify-center text-[25px]'>Professional Design <ImCheckmark2 className='ml-10 text-brandTwo'/> </p>
                    <hr className='h-[2px] bg-black mt-4'/>
                </div>
                <div className='h-[40px] w-[300px] mb-10 '>
                    <p className='flex items-center justify-center text-[25px]'>Professional Design <ImCheckmark2 className='ml-10 text-brandTwo'/> </p>
                    <hr className='h-[2px] bg-black mt-4'/>
                </div>
                <button className='h-[50px] w-[300px] bg-brandOne text-[20px] rounded-xl font-bold'>
                    Chat with us
                </button>

            </div>
  )
}

export default OfferComponent