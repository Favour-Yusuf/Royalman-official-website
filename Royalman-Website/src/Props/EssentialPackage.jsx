import React from 'react';
import { MdBusinessCenter } from "react-icons/md";
import { ImCheckmark2 } from "react-icons/im";

const EssentialPackage = (props) => {
  return (
    <div className='h-auto w-full max-w-[380px] bg-white rounded-lg flex items-center flex-col p-4 md:p-6 mb-5'>
      <MdBusinessCenter className='text-[80px] md:text-[100px] text-brandOne mb-4' />
      <p className='text-[24px] md:text-[28px] font-semibold mb-4'>{props.Offer}</p>
      <div className='h-[50px] md:h-[60px] w-full mb-4 md:mb-6 border-brandTwo border-opacity-70 border-2 rounded-[40px] flex items-center justify-center text-[20px] md:text-[24px] font-medium'>
        {props.Price}
      </div>
      {[props.B1, props.B2, props.B3, props.B4, props.B5].map(
        (benefit, index) =>
          benefit && (
            <div key={index} className='h-auto w-full mb-2 md:mb-3'>
              <p className='flex items-center justify-between text-[16px] md:text-[18px]'>
                {benefit} <ImCheckmark2 className='text-brandTwo ml-4' />
              </p>
              <hr className='h-[1px] bg-gray-300 mt-2' />
            </div>
          )
      )}
      <button className='h-[45px] md:h-[50px] w-full bg-brandOne text-[16px] md:text-[18px] rounded-xl font-bold mt-4 md:mt-6'>
        Chat with us
      </button>
    </div>
  );
};

export default EssentialPackage;
