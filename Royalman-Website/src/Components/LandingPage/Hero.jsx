import React from "react";
import Timer from "../../Utils/timer";
import { PopupButton } from "@typeform/embed-react";

const Hero = () => {
  const endTime = "2024-09-27T23:59:59"; // Set the end time for the countdown
  return (
    <div className="w-full mb-5">
      <div className="relative lg:h-[105vh] h-[75vh] w-full bg-hero bg-cover bg-center flex items-center justify-center pb-20 pt-32 lg:pt-48">
        {/* Darker Overlay for More Text Visibility */}
        <div className="absolute inset-0 bg-black opacity-85"></div>

        {/* Main Content */}
        <div className="relative flex flex-col items-center justify-center p-4 text-center space-y-4 z-10">
          {/* Call to Action for Business Owners */}
          <p className="w-full max-w-lg lg:max-w-2xl text-brandOne font-bold lg:text-xl text-sm lg:leading-7 animate-pulse">
            Attention Business Owners!
          </p>

          {/* Main Heading */}
          <p className="w-full max-w-lg lg:max-w-2xl text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold leading-tight mb-6 text">
            Get a Custom Fit-Website that puts you ahead Of Your Competitors,
            Designed With Precision To Reflect Your Unique Brand.
          </p>

          {/* Timer Component */}
          <div className="flex justify-center mb-4">
            <Timer endTime={endTime} />
          </div>

          {/* Subheading with Emphasis on Limited-Time Offer */}
          <p className="w-full max-w-lg lg:max-w-2xl text-white lg:text-lg text-sm lg:leading-7 mt-6">
            Our custom fit website delivers seamless user experience and
            superior performance to drive conversion.
          </p>

          {/* Call to Action Button */}
          <PopupButton id="ZerjkUzb">
            <button className="h-11 mt-8 px-6 text-white hover:bg-brandTwo font-bold rounded-lg bg-brandOne transition duration-300 ease-in-out transform hover:scale-105 shadow-lg z-10">
              Start Your Order
            </button>
          </PopupButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
