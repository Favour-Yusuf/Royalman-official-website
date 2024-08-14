import React from "react";
import { MdBusinessCenter } from "react-icons/md";
import { ImCheckmark2 } from "react-icons/im";
import { Link } from "react-router-dom";


const GrowthPackage = (props) => {
  


  return (
    <div className="h-auto w-[380px] bg-white rounded-lg flex items-center flex-col p-6 mb-5">
      <MdBusinessCenter className="text-[100px] text-brandOne mb-4" />
      <p className="text-[28px] font-semibold mb-4">{props.Offer}</p>
      <div className="h-[60px] w-full mb-6 border-brandTwo border-opacity-70 border-2 rounded-[40px] flex items-center justify-center text-[24px] font-medium">
        {props.Price}
      </div>
      {[props.B1, props.B2, props.B3, props.B4, props.B5, props.B6, props.B7].map(
        (benefit, index) =>
          benefit && (
            <div key={index} className="h-auto w-full mb-3">
              <p className="flex items-center justify-between text-[18px]">
                {benefit} <ImCheckmark2 className="text-brandTwo ml-4" />
              </p>
              <hr className="h-[1px] bg-gray-300 mt-2" />
            </div>
          )
      )}
     <Link to='https://wa.link/ezfpw2'>
     <button
        className='h-[45px] md:h-[50px] w-[300px] bg-brandOne text-[16px] md:text-[18px] rounded-xl font-bold mt-4 md:mt-6 flex items-center justify-center'
        
      >Get this package</button>
     </Link>
    </div>
  );
};

export default GrowthPackage;
