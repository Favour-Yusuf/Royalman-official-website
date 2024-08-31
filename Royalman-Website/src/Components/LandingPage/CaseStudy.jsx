// SuccessStory.js
import React from 'react';

const SuccessStory = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 sm:p-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
        Success Story: The Power of Effective Web Design in Boosting ROI
      </h2>

      <div className="max-w-3xl">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
          Industry Example: How a Website Redesign Increased ROI by 130% for XYZ Company
        </h3>

        <p className="text-base sm:text-lg text-gray-600 mb-4">
          In 2022, XYZ Company, a mid-sized e-commerce business, undertook a major website redesign to address declining sales and poor user engagement. The company partnered with a professional web design agency to create a more user-friendly, mobile-optimized site with faster loading times and a streamlined checkout process.
        </p>

        <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Key Changes Implemented:</h4>
        <ul className="list-disc list-inside text-base sm:text-lg text-gray-600 mb-4">
          <li>Modern, Clean Design: A fresh, modern look that aligned with the brand's identity.</li>
          <li>Improved Mobile Experience: Full mobile responsiveness to cater to the growing number of mobile users.</li>
          <li>Optimized Conversion Elements: Clearer calls to action, simplified navigation, and an optimized checkout process.</li>
          <li>SEO Enhancements: Improved page speed and on-page SEO, leading to better search engine rankings.</li>
        </ul>

        <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">The Results:</h4>
        <ul className="list-disc list-inside text-base sm:text-lg text-gray-600 mb-6">
          <li><strong>130% Increase in ROI:</strong> The redesign resulted in a 130% increase in ROI within six months, driven by higher conversion rates and increased sales.</li>
          <li><strong>40% More Traffic:</strong> Enhanced SEO and user experience led to a 40% increase in organic traffic.</li>
          <li><strong>30% Increase in Customer Retention:</strong> The new design fostered better engagement and trust, resulting in a 30% increase in repeat customers.</li>
        </ul>

        <p className="text-base sm:text-lg text-gray-600 mb-6">
          This example demonstrates how investing in a well-designed, conversion-focused website can significantly boost your business's ROI. Whether you're a startup or an established business, a strategic website redesign can enhance your online presence, attract more customers, and drive sales.
        </p>

        <div className="flex justify-center">
          <button className="bg-brandOne hover:bg-brandTwo text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300">
            Start Your Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
