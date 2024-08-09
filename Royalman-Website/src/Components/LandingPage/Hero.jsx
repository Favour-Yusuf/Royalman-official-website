import React from 'react'


const Hero = () => {
  return (
    <div className="w-[100%]">
        <div className=" relative h-[100vh] w-[100%] bg-hero bg-cover">
            <div className="h-[100%] w-[100%] absolute bg-black bg-opacity-55 flex items-center justify-center flex-col">
                <p className=' text-white text-[70px] font-bold text-center leading-tight'>Transforming Ideas into <br /> Digital Realities</p>
                <p className='text-white text-[25px] text-center w-[46%]'>Expert Web Design, App Development, E-commerce, SEO, Google My Business and Business Consultation Services</p>
                    <button className='h-11 mt-10 font-bold w-80 rounded-lg bg-brandOne'>Get a Free Consultation</button>
            </div>
        </div>
    </div>
  )
}

export default Hero