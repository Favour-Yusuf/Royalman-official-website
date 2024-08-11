import React from 'react'
import { MdBusinessCenter } from "react-icons/md";
import { ImCheckmark2 } from "react-icons/im";

const OfferComponent = (props) => {
  return (
    <div className='h-[800px] w-[380px] bg-white rounded-lg flex items-center flex-col'>
                <MdBusinessCenter className='text-[150px] text-brandOne '/>
                <p className='text-[40px]'>{props.Offer}</p>
                <div className='h-[80px] w-[300px] mb-7 border-brandTwo  border-opacity-70 border-2 rounded-[40px] flex items-center justify-center text-[30px] '>{props.Price}</div>
                <div className='h-[40px] w-[300px] mb-10 '>
                    <p className='flex items-center justify-between text-[20px]'>{props.B1} <ImCheckmark2 className='ml-10 text-brandTwo'/> </p>
                    <hr className='h-[2px] bg-black mt-4'/>
                </div>
                <div className='h-[40px] w-[300px] mb-10 '>
                    <p className='flex items-center justify-between text-[20px]'>{props.B2} <ImCheckmark2 className='ml-10 text-brandTwo'/> </p>
                    <hr className='h-[2px] bg-black mt-4'/>
                </div>
                <div className='h-[40px] w-[300px] mb-10 '>
                    <p className='flex items-center justify-between text-[20px]'>{props.B3} <ImCheckmark2 className='ml-10 text-brandTwo'/> </p>
                    <hr className='h-[2px] bg-black mt-4'/>
                </div>
                <div className='h-[40px] w-[300px] mb-10 '>
                    <p className='flex items-center justify-between text-[20px]'>{props.B4}<ImCheckmark2 className='ml-10 text-brandTwo'/> </p>
                    <hr className='h-[2px] bg-black mt-4'/>
                </div>
                <div className='h-[40px] w-[300px] mb-10 '>
                    <p className='flex items-center justify-between text-[20px]'>{props.B5}<ImCheckmark2 className='ml-10 text-brandTwo'/> </p>
                    <hr className='h-[2px] bg-black mt-4'/>
                </div>
                <div className='h-[40px] w-[300px] mb-10 '>
                    <p className='flex items-center justify-between text-[20px]'>{props.B6}<ImCheckmark2 className='ml-10 text-brandTwo'/> </p>
                    <hr className='h-[2px] bg-black mt-4'/>
                </div>
                <div className='h-[40px] w-[300px] mb-10 '>
                    <p className='flex items-center justify-between text-[20px]'>{props.B7}<ImCheckmark2 className='ml-10 text-brandTwo'/> </p>
                    <hr className='h-[2px] bg-black mt-4'/>
                </div>
                <button className='h-[50px] w-[300px] bg-brandOne text-[20px] rounded-xl font-bold'>
                    Chat with us
                </button>

            </div>
  )
}

export default OfferComponent