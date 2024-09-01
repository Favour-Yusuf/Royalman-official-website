// MoneyBackGuarantee.js
import React from 'react';
import { Link } from 'react-router-dom';

const MoneyBackGuarantee = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-brandOne mb-4">
        100% Satisfaction Guaranteed — Or Your Money Back!
      </h2>
      <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">
        We’re Confident You’ll Love Your New Website, But If You’re Not Completely Satisfied…
      </h3>
      <p className="text-gray-700 text-center mb-8">
        We stand by our work and want you to feel absolutely confident in your decision to work with us. That's why we offer a 30-day money-back guarantee. If, for any reason, you’re not completely satisfied with your new website within 30 days of launch, let us know and we’ll refund your investment—no questions asked.
      </p>
      <div className="text-center">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">
          Experience the Difference Risk-Free!
        </h4>
        <Link to="https://calendly.com/royalmanglobalenterprise/free_consultation" target='blank'>
        <button className="bg-brandOne hover:bg-brandTwo text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300">
          Start Your Risk-Free Project
        </button>
        </Link>
      </div>
    </div>
  );
};

export default MoneyBackGuarantee;
