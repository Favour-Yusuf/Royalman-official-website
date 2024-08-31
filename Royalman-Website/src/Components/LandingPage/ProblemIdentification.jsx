// FrustrationsList.js
import React from 'react';

const FrustrationsList = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-2xl w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
          We Know It’s Frustrating When You Have:
        </h2>

        <ul className="space-y-4">
          <li className="text-base sm:text-lg text-gray-700 flex items-start">
            <span className="font-bold text-brandTwo">Low Conversion Rates:</span> 
            <span className="ml-2">You’re getting traffic, but not enough customers are taking action.</span>
          </li>
          <li className="text-base sm:text-lg text-gray-700 flex items-start">
            <span className="font-bold text-brandTwo">Outdated Website Design:</span> 
            <span className="ml-2">Your website looks unprofessional and doesn’t reflect your brand’s true value.</span>
          </li>
          <li className="text-base sm:text-lg text-gray-700 flex items-start">
            <span className="font-bold text-brandTwo">Poor User Experience:</span> 
            <span className="ml-2">Your site is slow, hard to navigate, or not optimized for mobile users.</span>
          </li>
          <li className="text-base sm:text-lg text-gray-700 flex items-start">
            <span className="font-bold text-brandTwo">Lack of SEO and Visibility:</span> 
            <span className="ml-2">You’re missing out on organic traffic because your website isn’t optimized for search engines.</span>
          </li>
          <li className="text-base sm:text-lg text-gray-700 flex items-start">
            <span className="font-bold text-brandTwo">High Bounce Rates:</span> 
            <span className="ml-2">Visitors leave your site before taking any meaningful action.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FrustrationsList;
