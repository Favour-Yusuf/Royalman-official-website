import React from 'react';
import { FaHandSparkles, FaUsersCog, FaChartLine } from 'react-icons/fa'; // Importing icons

const RoyalmanDigitalConcept = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8 border border-gray-200">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        We’re Here to Make That Happen
      </h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        At Royalman Digital Concept, we specialize in creating high-impact, conversion-focused websites that elevate your brand, engage your audience, and drive measurable results.
      </p>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Our team of experienced designers and developers will work with you to build a custom website that not only looks great but also performs flawlessly, turning visitors into loyal customers.
      </p>
      <div className="flex flex-col sm:flex-row items-start justify-around mt-6">
        <div className="flex items-center space-x-3 mb-4 sm:mb-0">
          <FaHandSparkles className="text-brandOne text-[30px]" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Custom Design</h3>
            <p className="text-gray-600">We create visually stunning websites tailored to your brand's unique identity.</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 mb-4 sm:mb-0">
          <FaUsersCog className="text-brandOne text-[30px]" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">User Engagement</h3>
            <p className="text-gray-600">Our websites are designed to engage users and enhance their overall experience.</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaChartLine className="text-brandOne text-[30px]" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Measurable Results</h3>
            <p className="text-gray-600">We focus on delivering results that can be measured and optimized for better performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoyalmanDigitalConcept;
