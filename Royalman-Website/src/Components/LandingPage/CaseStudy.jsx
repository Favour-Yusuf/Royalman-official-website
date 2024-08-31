// SuccessStory.js
import React from 'react';
import { Link } from 'react-router-dom';

const SuccessStory = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
        Success Story: The Power of Effective Web Design in Boosting ROI
      </h2>
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
        Industry Example: How a Website Redesign Increased ROI by 130% for XYZ Company
      </h3>
      <p className="text-gray-600 mb-4">
        In 2022, XYZ Company, a mid-sized e-commerce business, undertook a major website redesign to address declining sales and poor user engagement. The company partnered with a professional web design agency to create a more user-friendly, mobile-optimized site with faster loading times and a streamlined checkout process.
      </p>
      
      <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Key Changes Implemented:</h4>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        <li><span className="font-semibold">Modern, Clean Design:</span> A fresh, modern look that aligned with the brand's identity.</li>
        <li><span className="font-semibold">Improved Mobile Experience:</span> Full mobile responsiveness to cater to the growing number of mobile users.</li>
        <li><span className="font-semibold">Optimized Conversion Elements:</span> Clearer calls to action, simplified navigation, and an optimized checkout process.</li>
        <li><span className="font-semibold">SEO Enhancements:</span> Improved page speed and on-page SEO, leading to better search engine rankings.</li>
      </ul>

      <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">The Results:</h4>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        <li><span className="font-semibold">130% Increase in ROI:</span> The redesign resulted in a 130% increase in ROI within six months, driven by higher conversion rates and increased sales.</li>
        <li><span className="font-semibold">40% More Traffic:</span> Enhanced SEO and user experience led to a 40% increase in organic traffic.</li>
        <li><span className="font-semibold">30% Increase in Customer Retention:</span> The new design fostered better engagement and trust, resulting in a 30% increase in repeat customers.</li>
      </ul>

      <p className="text-gray-600 mb-6">
        This example demonstrates how investing in a well-designed, conversion-focused website can significantly boost your business's ROI. Whether you're a startup or an established business, a strategic website redesign can enhance your online presence, attract more customers, and drive sales.
      </p>
            <Link to="https://wa.link/ezfpw2">
            <button className="bg-brandOne hover:bg-brandTwo text-white font-bold py-2 px-4 rounded transition duration-300">
        Start Your Order
      </button>
            </Link>
     
    </div>
  );
};

export default SuccessStory;
