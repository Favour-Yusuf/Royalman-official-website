import React from 'react'
import OfferComponent from './OfferProps'

const Offers = () => {
  return (
    <div className='h-[170vh] w-[100%] bg-brandTwo flex items-center justify-center '>
        <div className='h-[95%] w-[95%]  '>
            <p className='text-[50px] text-center font-bold text-white '>The best Offers</p>
            <p className='text-center text-[20px] to-gray-500 text-white '>Choose the ideal plan for what you need. We work with affordable prices for all types of websites.</p>
           <div className='h-[85%] w-[100%] mt-6 flex justify-between'>
            <OfferComponent Image='' Offer='Essential Package' Price='$150/₦150K' B1='Professional website' B2='User friendly website' B3='Secured Website' B4='Fully Responsive Website' B5='Free hosting' />
            <OfferComponent Image='' Offer='Growth Package' Price='$200/₦200K' B1='Professional website' B2='User friendly website' B3='Secured Website' B4='Fully Responsive website' B5='Free hosting' B6='One month of free SEO' B7='Optimized Content for your website' />
            <OfferComponent Image='' Offer='Premium Package' Price='$400/₦400K' B1='Professional website' B2='User friendly website' B3='Secured Website' B4='Fully Responsive website' B5='Free hosting' B6='One month of free SEO' B7='Optimized Content for your website' B8='Improved website Speed' B9='Implemented multiple support options' B10='Landing pages with clear compelling CTAs'  />
            
           </div>
        </div>
    </div>
  )
}

export default Offers