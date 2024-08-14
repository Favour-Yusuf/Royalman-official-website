import React from 'react';

const Portfolio = () => {
  return (
    <div className='w-full h-auto flex flex-col lg:flex-row items-center justify-center bg-portfolio bg-cover p-4'>
      <p className='text-[30px] font-bold lg:hidden'>Our portfolio</p>
      <div className='h-[200px] lg:h-[250px] w-full lg:w-[400px] mb-6 lg:mb-0 lg:ml-8 bg-white shadow-xl rounded-xl'>
        <img
          src='https://res.cloudinary.com/decwhxo32/image/upload/v1723390931/ecoBin_qez5vq.png'
          alt='EcoBin'
          className='h-full w-full rounded-xl object-contain'
        />
      </div>
      <div className='h-[200px] lg:h-[250px] w-full lg:w-[400px] mb-6 lg:mb-0 lg:ml-8 bg-white shadow-xl rounded-xl'>
        <img
          src='https://res.cloudinary.com/decwhxo32/image/upload/v1723390870/LyfeCare_bvec02.png'
          alt='LyfeCare'
          className='h-full w-full rounded-xl object-contain'
        />
      </div>
      <div className='h-[200px] lg:h-[250px] w-full lg:w-[400px] lg:ml-8 bg-white shadow-xl rounded-xl'>
        <img
          src='https://res.cloudinary.com/decwhxo32/image/upload/v1723390979/EasyPay_xjqffq.png'
          alt='EasyPay'
          className='h-full w-full rounded-xl object-contain'
        />
      </div>
    </div>
  );
};

export default Portfolio;
