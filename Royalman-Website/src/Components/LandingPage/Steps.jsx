// ProcessSteps.js
import React from "react";
import {
  FaCalendarAlt,
  FaMoneyCheckAlt,
  FaFileUpload,
  FaRegEdit,
  FaRocket,
} from "react-icons/fa";
import { PopupButton } from "@typeform/embed-react";

const steps = [
  {
    step: "Step 1: Book Your Free 10-Minute Consultation",
    description:
      "Schedule a quick one-on-one call with our team to discuss your needs and goals. We’ll provide expert guidance and outline the best way forward.",
    icon: <FaCalendarAlt className="text-blue-500 text-3xl mb-2" />,
  },
  {
    step: "Step 2: Secure Your Project with a 70% Deposit",
    description:
      "Once we’ve agreed on the plan, make a 70% upfront payment to kickstart the project.",
    icon: <FaMoneyCheckAlt className="text-green-500 text-3xl mb-2" />,
  },
  {
    step: "Step 3: Share Your Assets",
    description:
      "Easily send us your logo, images, and any other content you’d like to use. We can help source any additional materials needed.",
    icon: <FaFileUpload className="text-yellow-500 text-3xl mb-2" />,
  },
  {
    step: "Step 4: Review and Provide Feedback",
    description:
      "Receive the first draft of your website and provide feedback. We’ll make the necessary adjustments to ensure it meets your expectations.",
    icon: <FaRegEdit className="text-purple-500 text-3xl mb-2" />,
  },
  {
    step: "Step 5: Approve, Pay, and Launch",
    description:
      "Approve the final design, complete the remaining 30% payment, and we’ll handle the hosting and launch, so you can start seeing results immediately!",
    icon: <FaRocket className="text-red-500 text-3xl mb-2" />,
  },
];

const ProcessSteps = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Ready to Transform Your Website Without the Hassle?
      </h2>
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row items-start bg-white shadow-lg rounded-lg p-6 mb-6"
        >
          <div className="flex-shrink-0">{step.icon}</div>
          <div className="ml-0 sm:ml-4 mt-2 sm:mt-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.step}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </div>
      ))}
      <div className="text-center mt-8">
        <PopupButton id="ZerjkUzb">
          <button className="bg-brandOne hover:bg-brandTwo text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
            Book Your Free Consultation
          </button>
        </PopupButton>
      </div>
    </div>
  );
};

export default ProcessSteps;
