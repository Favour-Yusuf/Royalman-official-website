import React from 'react';
import { FaDollarSign, FaRegSmile, FaRegLightbulb, FaExclamationTriangle, FaTachometerAlt } from 'react-icons/fa'; // Import icons

const Consequences = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-lg mt-8 border border-gray-200">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        What Happens If You Don’t Act Now…
      </h2>
      <ul className="space-y-4">
        <li className="flex items-start space-x-3 text-gray-700">
          <FaDollarSign className="text-brandOne text-[25px]" />
          <span><strong className="font-semibold">Lost Revenue:</strong> Every day your website underperforms, you’re leaving money on the table.</span>
        </li>
        <li className="flex items-start space-x-3 text-gray-700">
          <FaRegSmile className="text-brandOne text-[40px]" />
          <span><strong className="font-semibold">Damaged Brand Reputation:</strong> An outdated or poorly designed site can turn potential customers away and harm your brand’s image.</span>
        </li>
        <li className="flex items-start space-x-3 text-gray-700">
          <FaRegLightbulb className="text-brandOne text-[40px] " />
          <span><strong className="font-semibold">Missed Growth Opportunities:</strong> Without a strong online presence, you’ll miss out on new leads, sales, and market expansion.</span>
        </li>
        <li className="flex items-start space-x-3 text-gray-700">
          <FaExclamationTriangle className="text-brandOne text-[50px]" />
          <span><strong className="font-semibold">Increased Customer Frustration:</strong> A poor user experience leads to frustrated visitors who are likely to leave and not return.</span>
        </li>
        <li className="flex items-start space-x-3 text-gray-700">
          <FaTachometerAlt className="text-brandOne text-[50px]" />
          <span><strong className="font-semibold">Falling Behind Competitors:</strong> Competitors with better websites will attract more customers and gain a competitive edge.</span>
        </li>
      </ul>
    </div>
  );
};

export default Consequences;
