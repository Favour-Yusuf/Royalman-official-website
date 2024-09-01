// FAQ.js
import React from 'react';
import { FaQuestionCircle, FaCheckCircle, FaClock, FaRegSmile, FaMobileAlt } from 'react-icons/fa';

const faqs = [
  {
    question: "What’s included in the packages?",
    answer: "Each package offers a range of features to fit different needs. The Essential package includes custom design and basic SEO, the Professional package adds enhanced SEO, blog, and social media integration, while the Premium package includes all Professional features plus advanced SEO, e-commerce functionality, and priority support. For detailed inclusions, please refer to our package descriptions above.",
    icon: <FaCheckCircle className="text-green-500 text-3xl mb-4" />
  },
  {
    question: "How long does it take to complete a website?",
    answer: "The timeline for completing a website depends on the package chosen. For the Essential package, it typically takes about 5 days. The Professional package takes around 7 days, while the Premium package is completed in approximately 14 days. We’ll provide a more specific timeline during your free consultation.",
    icon: <FaClock className="text-yellow-500 text-3xl mb-4" />
  },
  {
    question: "What happens if I’m not happy with the design?",
    answer: "We offer a 30-day money-back guarantee. If you’re not satisfied with the final website within 30 days of launch, just let us know and we’ll provide a full refund. Additionally, each package includes a certain number of revisions to ensure the design meets your expectations.",
    icon: <FaRegSmile className="text-blue-500 text-3xl mb-4" />
  },
  {
    question: "Do I need to provide my own content and images?",
    answer: "You will need to provide your own content (text, images, logo, etc.), but we offer help with creating SEO-driven text to optimize your website’s performance. We can also assist in sourcing additional images if needed. Our team will guide you through the process to ensure everything is effectively integrated.",
    icon: <FaQuestionCircle className="text-red-500 text-3xl mb-4" />
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Yes, all our websites are designed to be mobile-responsive. This means your site will look and function beautifully on all devices, including smartphones and tablets. We prioritize mobile optimization to ensure a great user experience across all platforms.",
    icon: <FaMobileAlt className="text-purple-500 text-3xl mb-4" />
  },
];

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex items-start">
            <div className="mr-4">
              {faq.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
