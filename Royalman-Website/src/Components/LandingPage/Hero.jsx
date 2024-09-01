import React from "react";
import { Link } from "react-router-dom";
import Timer from "../../Utils/timer";

const Hero = () => {
  const endTime = "2024-09-10T23:59:59"; // Set the end time for the countdown
  return (
    <div className="w-[100%] mb-5 ">
      <div className=" relative lg:h-[100vh] h-[65vh] w-[100%] bg-hero bg-cover pb-20">
        <div className="h-[100%] w-[100%] absolute bg-black bg-opacity-75 flex flex-col items-center justify-center">
          <p className="sm:w-[500px] lg:text-[20px] lg:w-[700px]  sm:text-[33px] text-[18px] text-white text-center leading-relaxed">
            Attention Business Owners
          </p>
          <p className="sm:w-[500px] text-white lg:text-[50px] lg:w-[700px]  sm:text-[33px] text-3xl  font-bold text-center leading-[55px]">
            Boost Your ROI with a High-Converting Website in Just 30 Days
          </p>
          <Timer endTime={endTime} />
          <p className="sm:w-[500px] lg:text-[20px] lg:w-[700px]  sm:text-[33px] text-[18px] text-white text-center leading-relaxed">
            Don't miss out. Get a custom website designed to maximize
            conversions, attract customers, and grow your business's ROI—all in
            just 30 days.
          </p>
          <Link to="https://calendly.com/royalmanglobalenterprise/free_consultation" target="blank">
            <button className="h-11 mt-10 text-white hover:bg-brandTwo font-bold w-[150px] rounded-lg bg-brandOne">
              start your order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
