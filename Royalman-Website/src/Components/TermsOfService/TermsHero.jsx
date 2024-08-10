import React from 'react'

const TermsHero = () => {
  return (
    <div className="w-[100%]">
        <div className=" relative h-[100vh] w-[100%] bg-terms bg-cover">
            <div className="h-[100%] w-[100%] absolute bg-black bg-opacity-60 flex items-center justify-center flex-col">
                <p className=' text-white text-[70px] font-bold text-center leading-tight'>Terms and Conditions of Service</p>
              
                    {/* <button className='h-11 mt-10 font-bold w-80 rounded-lg bg-brandOne'>Get a Free Consultation</button> */}
            </div>
        </div>
    </div>
  )
}

export default TermsHero