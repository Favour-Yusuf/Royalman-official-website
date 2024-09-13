import React from "react";
import { PopupButton } from "@typeform/embed-react";
import { FaCheckCircle } from "react-icons/fa"; // Import an icon from react-icons

const SuccessStory = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-lg mt-8 border border-gray-200">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
        Success Story: The Power of Effective Web Design in Boosting ROI
      </h2>
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
        Industry Example: How a Website Redesign Increased ROI by 130% for Jinx
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        In 2022, Jinx, a mid-sized e-commerce business, undertook a major
        website redesign to address declining sales and poor user engagement.
        The company partnered with a professional web design agency to create a
        more user-friendly, mobile-optimized site with faster loading times and
        a streamlined checkout process.
      </p>

      <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">
        Key Changes Implemented:
      </h4>
      <ul className="list-none mb-6 space-y-2">
        <li className="flex items-start">
          <FaCheckCircle className="text-brandOne mr-2 mt-1  " />
          <span>
            <span className="font-semibold">Modern, Clean Design:</span> A
            fresh, modern look that aligned with the brand's identity.
          </span>
        </li>
        <li className="flex items-start">
          <FaCheckCircle className="text-brandOne mr-2 mt-1 text-[18px] " />
          <span>
            <span className="font-semibold">Improved Mobile Experience:</span>{" "}
            Full mobile responsiveness to cater to the growing number of mobile
            users.
          </span>
        </li>
        <li className="flex items-start">
          <FaCheckCircle className="text-brandOne mr-2 mt-1 text-[20px] " />
          <span>
            <span className="font-semibold">
              Optimized Conversion Elements:
            </span>{" "}
            Clearer calls to action, simplified navigation, and an optimized
            checkout process.
          </span>
        </li>
        <li className="flex items-start">
          <FaCheckCircle className="text-brandOne mr-2 mt-1 " />
          <span>
            <span className="font-semibold">SEO Enhancements:</span> Improved
            page speed and on-page SEO, leading to better search engine
            rankings.
          </span>
        </li>
      </ul>

      <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">
        The Results:
      </h4>
      <ul className="list-none mb-6 space-y-2">
        <li className="flex items-start">
          <FaCheckCircle className="text-brandOne mr-2 mt-1 text-[25px] " />
          <span>
            <span className="font-semibold">130% Increase in ROI:</span> The
            redesign resulted in a 130% increase in ROI within six months,
            driven by higher conversion rates and increased sales.
          </span>
        </li>
        <li className="flex items-start">
          <FaCheckCircle className="text-brandOne mr-2 mt-1 " />
          <span>
            <span className="font-semibold">40% More Traffic:</span> Enhanced
            SEO and user experience led to a 40% increase in organic traffic.
          </span>
        </li>
        <li className="flex items-start">
          <FaCheckCircle className="text-brandOne mr-2 mt-1 text-[25px]" />
          <span>
            <span className="font-semibold">
              30% Increase in Customer Retention:
            </span>{" "}
            The new design fostered better engagement and trust, resulting in a
            30% increase in repeat customers.
          </span>
        </li>
      </ul>

      <p className="text-gray-600 mb-8 leading-relaxed">
        This example demonstrates how investing in a well-designed,
        conversion-focused website can significantly boost your business's ROI.
        Whether you're a startup or an established business, a strategic website
        redesign can enhance your online presence, attract more customers, and
        drive sales.
      </p>
      <PopupButton id="ZerjkUzb">
        <button className="bg-brandOne hover:bg-brandTwo text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300">
          Start Your Order
        </button>
      </PopupButton>
    </div>
  );
};

export default SuccessStory;
