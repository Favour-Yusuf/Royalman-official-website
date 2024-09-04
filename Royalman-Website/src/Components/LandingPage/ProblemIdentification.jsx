import React from 'react';
import { FaArrowRight, FaDesktop, FaMobileAlt, FaSearch, FaExclamationCircle } from 'react-icons/fa'; // Import icons

const FrustrationsList = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-2xl w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          We Know It’s Frustrating When You Have:
        </h2>

        <ul className="space-y-4">
          <li className="text-base sm:text-lg text-gray-700 flex items-start space-x-3">
            <FaArrowRight className="text-brandTwo lg:text-balance text-[30px] " />
            <span><span className="font-bold text-gray-800">Low Conversion Rates:</span> You’re getting traffic, but not enough customers are taking action.</span>
          </li>
          <li className="text-base sm:text-lg text-gray-700 flex items-start space-x-3">
            <FaDesktop className="text-brandTwo lg:text-balance  text-[45px]" />
            <span><span className="font-bold text-gray-800">Outdated Website Design:</span> Your website looks unprofessional and doesn’t reflect your brand’s true value.</span>
          </li>
          <li className="text-base sm:text-lg text-gray-700 flex items-start space-x-3">
            <FaMobileAlt className="text-brandTwo lg:text-balance text-[30px] " />
            <span><span className="font-bold text-gray-800">Poor User Experience:</span> Your site is slow, hard to navigate, or not optimized for mobile users.</span>
          </li>
          <li className="text-base sm:text-lg text-gray-700 flex items-start space-x-3">
            <FaSearch className="text-brandTwo lg:text-balance text-[40px] " />
            <span><span className="font-bold text-gray-800">Lack of SEO and Visibility:</span> You’re missing out on organic traffic because your website isn’t optimized for search engines.</span>
          </li>
          <li className="text-base sm:text-lg text-gray-700 flex items-start space-x-3">
            <FaExclamationCircle className="text-brandTwo lg:text-balance text-[30px] " />
            <span><span className="font-bold text-gray-800">High Bounce Rates:</span> Visitors leave your site before taking any meaningful action.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FrustrationsList;
