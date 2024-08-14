import React from "react";
import {
  FaGlobe,
  FaWordpressSimple,
  FaShoppingCart,
  FaMobileAlt,
} from "react-icons/fa";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

const WhatWeDo = () => {
  return (
    <div className=" w-[100%] flex items-center justify-center">
      <div className="h-[100%] w-[90%]  flex items-center jsutify-center flex-col">
        <p className="text-center lg:text-[45px] text-[20px] font-bold text-gray-700 mb-4 ">
          We can create any kind of website
        </p>
        <div className="h-[70%]  w-[85%]  flex justify-between flex-wrap lg:flex">
          <div className="  w-[120px] lg-[150px] h-[100px] flex  mr-4  flex-col items-center  ">
            <FaGlobe className="text-[40px] lg:text-[80px] text-gray-700" />
            <p className="text-[20px] lg:text-[20px]">Custom Sites</p>
          </div>
          <div className="  w-[120px] lg-[150px] h-[100px]  flex mr-4 flex-col items-center  ">
            <FaWordpressSimple className="text-[40px] lg:text-[80px] text-gray-700" />
            <p className="text-[20px]">Basic Sites</p>
          </div>
          <div className="  w-[120px] lg-[150px] h-[100px]  flex mr-4 flex-col items-center  ">
            <FaShoppingCart className="text-[40px] lg:text-[80px] text-gray-700" />
            <p className="text-[20px]">E-Commerce</p>
          </div>
          <div className="  w-[120px] lg-[150px] h-[100px]  flex mr-4 flex-col items-center  ">
            <FaMobileAlt className="text-[40px] lg:text-[80px] text-gray-700" />
            <p className="text-[20px]">Mobile Apps</p>
          </div>
          {/* <div className="  w-[100px] lg-[150px] h-[100px] bg-red-500 flex mr-4 flex-col items-center justify-between ">
            <MdOutlineScreenSearchDesktop className="text-[40px] lg:text-[80px] text-gray-700" />
            <p className="text-[20px]">SEO</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
