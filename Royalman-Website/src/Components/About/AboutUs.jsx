import React from "react";

const AboutUs = () => {
  return (
    <div className="w-[100%] h-[70vh] flex justify-between items-center bg-aboutbg bg-cover">
      <div className="h-[80%] w-[400px]  ml-6 rounded-xl">
        <img src='https://res.cloudinary.com/decwhxo32/image/upload/v1723391067/AboutUs_wtcnk3.webp' alt="" className="h-[100%] w-[100%] rounded-xl" />
      </div>
      <div className="h-[80%] w-[400px] bg-white shadow-2xl mr-8 rounded-xl flex flex-col items-center justify-center">
        <p className="text-[20px] font-bold text-brandTwo mb-5">About Royalman Digital Concept</p>
        <p className="text-center text-[18px]">
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
