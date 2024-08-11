import React from 'react';
import { FaTools } from "react-icons/fa";
import { ImCheckmark2 } from "react-icons/im";

const WebMaintenance = () => {
  return (
    <div className='h-auto min-h-screen w-full flex items-center justify-center bg-aboutbg p-4'>
      <div className='h-auto w-full max-w-lg shadow-2xl flex flex-col items-center rounded-2xl p-6'>
        <FaTools className='text-[70px] md:text-[90px] text-brandOne mb-4'/>
        <p className='text-[18px] md:text-[20px] font-bold text-center mb-2'>Monthly Site Maintenance and Management</p>
        <p className='text-[16px] md:text-[18px] mb-4 text-center'>Let us look after your site for you</p>
        <div className='h-[60px] md:h-[80px] w-full mb-6 border-brandTwo border-opacity-70 border-2 rounded-[40px] flex items-center justify-center text-[22px] md:text-[30px]'>
          N30k/Month
        </div>
        {['Themes/Plugins/Site Update', '24/7 Site Monitoring', 'Regular Backups'].map((text, index) => (
          <div key={index} className='w-full mb-6'>
            <p className='flex justify-between items-center text-[18px] md:text-[25px]'>
              {text}
              <ImCheckmark2 className='text-brandTwo ml-2 md:ml-10'/>
            </p>
            <hr className='h-[1px] bg-black mt-2'/>
          </div>
        ))}
        <button className='h-[50px] w-full md:w-[300px] bg-brandOne text-[18px] md:text-[20px] rounded-xl font-bold mb-6'>
          Chat with us
        </button>
      </div>
    </div>
  );
}

export default WebMaintenance;
