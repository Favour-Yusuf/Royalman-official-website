import React from 'react'
import OfferComponent from './OfferComponent'

const Offers = () => {
  return (
    <div className='h-[170vh] w-[100%] bg-brandTwo flex items-center justify-center '>
        <div className='h-[95%] w-[95%]  '>
            <p className='text-[50px] text-center font-bold text-white '>The best Offers</p>
            <p className='text-center text-[20px] to-gray-500 text-white '>Choose the ideal plan for what you need. We work with affordable prices for all types of websites.</p>
           <div className='h-[85%] w-[100%] mt-6 flex justify-between'>
            <OfferComponent/>
            <OfferComponent/>
            <OfferComponent/>
           </div>
        </div>
    </div>
  )
}

export default Offers