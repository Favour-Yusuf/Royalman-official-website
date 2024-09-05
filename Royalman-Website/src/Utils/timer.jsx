// Timer.js
import React, { useState, useEffect } from 'react';

const Timer = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(endTime) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index, array) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="mx-1 text-lg font-bold">
        {timeLeft[interval]} {interval}
      </span>
    );

    // Add a colon separator between time intervals, but not after the last one
    if (index < array.length - 1) {
      timerComponents.push(
        <span key={`separator-${interval}`} className="text-lg font-bold">
          :
        </span>
      );
    }
  });

  return (
    <div className='flex mt-4 mb-5'>
        <p className="text-base sm:text-lg text-white mb-4 sm:mb-6 text-center font-bold mr-3">
        Limited-Time Offer: Ends in
        </p>
      <div className=" bg-white text-red-500 p-2 rounded-sm ">
      {timerComponents.length ? timerComponents : <span className="text-red-500">Time's up!</span>}
      </div>
    </div>
  );
};

export default Timer;
