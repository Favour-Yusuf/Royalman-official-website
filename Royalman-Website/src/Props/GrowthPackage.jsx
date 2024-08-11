import React from "react";
import { MdBusinessCenter } from "react-icons/md";
import { ImCheckmark2 } from "react-icons/im";
import { PaystackButton } from "react-paystack";

const GrowthPackage = (props) => {
  const publicKey = "pk_test_7c6be2b639ced1e29a4ba8228028d8ff9e684e21"; // Replace with your actual Paystack public key
  const amount = parseInt(props.Price.replace(/[^0-9]/g, "")) * 100000; // Convert price to kobo
  const email = "favouryusuf45@gmail.com"; // Replace with customer's email, this could be passed as a prop
  const reference = new Date().getTime().toString(); // Unique transaction reference

  const onSuccess = (reference) => {
    // Implement what happens after payment is successful
    console.log(reference);
    alert("Payment Successful!");
  };

  const onClose = () => {
    // Implement what happens when the payment is closed
    alert("Payment Closed");
  };

  return (
    <div className="h-auto w-[380px] bg-white rounded-lg flex items-center flex-col p-6 mb-5">
      <MdBusinessCenter className="text-[100px] text-brandOne mb-4" />
      <p className="text-[28px] font-semibold mb-4">{props.Offer}</p>
      <div className="h-[60px] w-full mb-6 border-brandTwo border-opacity-70 border-2 rounded-[40px] flex items-center justify-center text-[24px] font-medium">
        {props.Price}
      </div>
      {[props.B1, props.B2, props.B3, props.B4, props.B5, props.B6, props.B7].map(
        (benefit, index) =>
          benefit && (
            <div key={index} className="h-auto w-full mb-3">
              <p className="flex items-center justify-between text-[18px]">
                {benefit} <ImCheckmark2 className="text-brandTwo ml-4" />
              </p>
              <hr className="h-[1px] bg-gray-300 mt-2" />
            </div>
          )
      )}
      <PaystackButton
        className='h-[45px] md:h-[50px] w-full bg-brandOne text-[16px] md:text-[18px] rounded-xl font-bold mt-4 md:mt-6 flex items-center justify-center'
        publicKey={publicKey}
        amount={amount}
        email={email}
        reference={reference}
        onSuccess={onSuccess}
        onClose={onClose}
        text="Get this package"
      />
    </div>
  );
};

export default GrowthPackage;
