import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className="w-[100%] mb-5 ">
        <div className=" relative lg:h-[100vh] h-[65vh] w-[100%] bg-hero lg:bg-cover  bg-center bg-no-repeat">
            <div className="h-[100%] w-[100%] absolute bg-black bg-opacity-85 flex flex-col items-center justify-center">
                <p className='sm:w-[500px] text-white lg:text-[50px] lg:w-[700px]  sm:text-[33px] text-3xl  font-bold text-center leading-relaxed'>Transforming Ideas into <br /> Digital Realities</p>
                <p className='sm:w-[500px] lg:text-[20px] lg:w-[700px]  sm:text-[33px] text-[18px] text-white text-center leading-relaxed'>Expert Web Design, App Development, E-commerce, SEO, Google My Business and Business Consultation Services</p>
                    <Link to='https://wa.link/ezfpw2' target='blank'><button className='h-11 mt-10 font-bold w-80 rounded-lg bg-brandOne'>Get a Free Consultation</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Hero