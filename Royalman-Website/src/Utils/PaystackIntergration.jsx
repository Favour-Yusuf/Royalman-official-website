import React from "react";
import { PaystackButton } from "react-paystack";

const PaystackIntegration = () => {
  const publicKey = "pk_test_7c6be2b639ced1e29a4ba8228028d8ff9e684e21";  // Replace with your Paystack public key
  const amount = 10000; // Amount in kobo (10000 kobo = 100 Naira)
  const email = "user@example.com";  // Customer's email address
  const reference = new Date().getTime().toString();  // Unique transaction reference

  const onSuccess = (reference) => {
    // This is triggered after payment is successful
    console.log(reference);
    alert("Payment Successful!");
  };

  const onClose = () => {
    // This is triggered when the payment modal is closed
    alert("Payment Closed");
  };

  return (
    <div>
      <h1>Pay with Paystack</h1>
      <PaystackButton
        publicKey={publicKey}
        amount={amount}
        email={email}
        reference={reference}
        onSuccess={onSuccess}
        onClose={onClose}
        text="Pay Now"
        className="paystack-button"
      />
    </div>
  );
};

export default PaystackIntegration;
