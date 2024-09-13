import React from 'react';
import { FaRegCheckCircle, FaMobileAlt, FaChartLine, FaShoppingCart } from 'react-icons/fa';
import { PopupButton } from '@typeform/embed-react';

const packages = [
  {
    title: "Essential",
    subtitle: "Perfect for Small Businesses or Startups",
    price: "$500",
    features: [
      "Custom Website Design",
      "Mobile Optimization",
      "Basic SEO Setup",
      "Contact Form Integration",
      "1 Round of Revisions",
      "30-Day Money-Back Guarantee"
    ],
    idealFor: "Establishing a professional online presence",
    buttonText: "Choose Essential",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    icon: <FaMobileAlt className="text-blue-500 text-3xl mb-4" />,
    typeformId: "ZerjkUzb" // Add your Typeform ID here
  },
  {
    title: "Professional",
    subtitle: "Ideal for Growing Businesses Looking to Expand Online",
    price: "$700",
    features: [
      "All features in Essential",
      "Enhanced SEO and Analytics Integration",
      "Custom Graphics and Imagery",
      "2 Rounds of Revisions",
      "Blog Integration",
      "Social Media Integration",
      "30-Day Money-Back Guarantee"
    ],
    idealFor: "Increased engagement and visibility",
    buttonText: "Choose Professional",
    buttonColor: "bg-green-500 hover:bg-green-600",
    icon: <FaChartLine className="text-green-500 text-3xl mb-4" />,
    typeformId: "ZerjkUzb" // Add your Typeform ID here
  },
  {
    title: "Premium",
    subtitle: "The Ultimate Solution for Businesses Ready to Maximize Online Impact",
    price: "$1000",
    features: [
      "All features in Professional",
      "Advanced SEO and Performance Optimization",
      "E-Commerce Functionality (if needed)",
      "Unlimited Revisions",
      "Priority Support",
      "60-Day Post-Launch Support",
      "30-Day Money-Back Guarantee"
    ],
    idealFor: "Businesses aiming for top-tier performance and growth",
    buttonText: "Choose Premium",
    buttonColor: "bg-red-500 hover:bg-red-600",
    icon: <FaShoppingCart className="text-red-500 text-3xl mb-4" />,
    typeformId: "ZerjkUzb" // Add your Typeform ID here
  },
];

const Packages = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Find the Perfect Package for Your Business—Transform Your Website Today!
      </h2>
      <h3 className="text-xl font-semibold text-center text-gray-600 mb-8">
        We offer three tailored packages to meet your specific needs. Each package includes everything you need for a high-performing website, with options to fit different goals and budgets.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            {pkg.icon}
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
            <h4 className="text-lg font-semibold text-gray-600 mb-4">{pkg.subtitle}</h4>
            <p className="text-xl font-bold text-gray-800 mb-4">{pkg.price}</p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {pkg.features.map((feature, i) => (
                <li key={i} className="mb-2 flex items-center">
                  <FaRegCheckCircle className="text-gray-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 mb-4">{pkg.idealFor}</p>

            {/* PopupButton for Typeform */}
            <PopupButton  id="ZerjkUzb">
            <button
              className={`${pkg.buttonColor} text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300`}
            >
              {pkg.buttonText}
            </button>
            </PopupButton>
           
            
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">
          Ready to Elevate Your Online Presence? Choose the Package That’s Right for You and Get Started Today.
        </h4>
       <PopupButton id="ZerjkUzb" >
       <button className="bg-brandOne hover:bg-brandTwo text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300">
            Start Your Order
          </button>
       </PopupButton>
          
       
      </div>
    </div>
  );
};

export default Packages;
