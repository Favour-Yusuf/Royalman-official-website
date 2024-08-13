import React, { useState } from 'react';

const PackageForm = ({ packagePrice }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [additionalInfo, setAdditionalInfo] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!agreedToTerms) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    // Calculate amount to be paid (70% of package price)
    const amount = (packagePrice * 0.7) * 100; // Convert to cents

    // Send data to backend
    const response = await fetch('/api/prepare-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, additionalInfo, amount }),
    });

    const data = await response.json();
    if (data.url) {
      window.location.href = data.url; // Redirect to payment gateway
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}  className='flex flex-col justify-between h-[200px]'>
      <input className='h-[30px] w-[70%]'
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input className='h-[30px] w-[70%] border-brandOne border-solid boredr-2 '
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {/* <textarea
        placeholder="Additional Information"
        value={additionalInfo}
        onChange={(e) => setAdditionalInfo(e.target.value)}
      /> */}
      <label>
        <input
          type="checkbox"
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
        />
        I agree to the terms and conditions
      </label>
      <button type="submit">Pay for Package</button>
    </form>
  );
};

export default PackageForm;
