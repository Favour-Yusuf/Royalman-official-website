import React from "react";

const ConfirmationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-6">
          Your consultation has been successfully scheduled. We look forward to speaking with you!
        </p>
        <button
          className="bg-brandOne text-white py-2 px-4 rounded-md hover:to-brandTwo transition-colors"
          onClick={() => window.location.href = '/'} // Redirect to home or another page
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
