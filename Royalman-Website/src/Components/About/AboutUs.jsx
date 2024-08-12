import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row justify-between items-center bg-aboutbg bg-cover p-4 lg:p-0">
      <div className="h-[300px] w-full lg:w-[400px] mb-6 lg:mb-0 rounded-xl">
        <img
          src="https://res.cloudinary.com/decwhxo32/image/upload/v1723391067/AboutUs_wtcnk3.webp"
          alt="About Us"
          className="h-full w-full rounded-xl object-cover"
        />
      </div>
      <div className="h-auto w-full lg:w-[400px] bg-white shadow-2xl rounded-xl flex flex-col items-center justify-center p-6">
        <p className="text-[18px] font-bold text-brandTwo mb-4 text-center">
          About Royalman Digital Concept
        </p>
        <p className="text-center text-[16px] lg:text-[18px]">
          At Royalman Digital Agency, we empower businesses with a dominant,
          scalable, and secure online presence that drives growth, customer
          satisfaction, and long-term success. Our team of experts brings
          together creativity and technical know-how to deliver exceptional
          results.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
