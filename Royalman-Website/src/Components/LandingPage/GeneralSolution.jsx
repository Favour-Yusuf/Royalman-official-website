import React from 'react';
import { FaLaptopCode, FaRocket, FaUsers } from 'react-icons/fa'; // Importing icons

const HighPerformingWebsite = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8 border border-gray-200">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        The Power of a High-Performing Website
      </h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Imagine having a website that works for you 24/7, turning visitors into loyal customers and driving continuous growth. 
        A strategically designed, user-friendly website is essential for building trust, enhancing user experience, and maximizing conversions.
      </p>
      <p className="text-gray-600 mb-6 leading-relaxed">
        By optimizing your website’s design, content, and functionality, you can elevate your brand’s online presence, increase organic traffic, and significantly improve your ROI.
      </p>
      <div className="flex flex-col sm:flex-row items-start justify-around mt-6">
        <div className="flex items-center space-x-3 mb-4 sm:mb-0">
          <FaLaptopCode className="text-brandOne text-[40px]" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">User-Friendly Design</h3>
            <p className="text-gray-600">An intuitive design enhances user experience, making it easier for visitors to navigate and take action.</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 mb-4 sm:mb-0">
          <FaRocket className="text-brandOne text-[40px]" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Increased Conversions</h3>
            <p className="text-gray-600">Optimized functionality boosts conversion rates by guiding visitors smoothly through their journey.</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaUsers className="text-brandOne text-[40px]" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Brand Trust</h3>
            <p className="text-gray-600">A professional website builds credibility and trust, encouraging more visitors to engage with your brand.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighPerformingWebsite;
