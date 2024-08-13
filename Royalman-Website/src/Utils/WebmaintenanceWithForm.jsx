import React from 'react';
import PackageForm from './PackageForm';
import { PaystackButton } from 'react-paystack';

const WebMaintenanceWithForm = () => {
  const publicKey = "your-public-key-here";
  const packagePrice = 30000; // Full price in Naira
  const paymentAmount = packagePrice * 0.7 * 100; // 70% of the package price in kobo (Naira * 100)

  const onSubmitForm = (formData) => {
    const reference = new Date().getTime().toString();

    const onSuccess = (reference) => {
      alert("Payment Successful!");
      sendEmailNotification(formData, reference);
    };

    const onClose = () => {
      alert("Payment Closed");
    };

    const paystackConfig = {
      publicKey,
      amount: paymentAmount,
      email: formData.email,
      reference,
      onSuccess,
      onClose,
    };

    const sendEmailNotification = (formData, reference) => {
      const emailData = {
        to: "royalmanglobalenterprise@gmail.com",
        subject: "New Package Purchase",
        text: `
          Name: ${formData.name}
          Email: ${formData.email}
          Payment Reference: ${reference}
        `,
      };

      // Replace with actual email sending implementation (e.g., using a backend API)
      console.log("Email data:", emailData);
    };

    return <PaystackButton {...paystackConfig} text="Pay 70%" />;
  };

  return (
    <div className=" h-auto min-h-screen w-full flex items-center justify-center p-4">
      <div className=" lg:h-[400px] h-auto w-full max-w-lg shadow-2xl flex flex-col items-center rounded-2xl p-6">
        <h2 className="text-[22px] md:text-[30px] font-bold mb-4">Purchase Package</h2>
        <PackageForm onSubmit={onSubmitForm} packagePrice={packagePrice} />
      </div>
    </div>
  );
};

export default WebMaintenanceWithForm;
