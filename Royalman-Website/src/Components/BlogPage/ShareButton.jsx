import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaWhatsapp, FaReddit } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from 'react-icons/bs';

const ShareButton = ({ url, title }) => {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title)}%20${encodeURIComponent(url)}`,
    instagram: `https://www.instagram.com/`,
    reddit: `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  };

  return (
    <div className="relative inline-block">
      <button onClick={toggleShareOptions} className="bg-brandOne hover:bg-brandTwo text-white p-2 w-[150px] rounded-full">
        Share
      </button>
      {showShareOptions && (
        <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg p-2">
          <a href={shareUrls.facebook} target="_blank" rel="noopener noreferrer" className="block p-2">
            <FaFacebook size={20} color='#0965FE' />
          </a>
          <a href={shareUrls.twitter} target="_blank" rel="noopener noreferrer" className="block p-2">
            <FaXTwitter size={20}  />
          </a>
          <a href={shareUrls.linkedin} target="_blank" rel="noopener noreferrer" className="block p-2">
            <FaLinkedin size={20} color='#0277B5' />
          </a>
          <a href={shareUrls.whatsapp} target="_blank" rel="noopener noreferrer" className="block p-2">
            <FaWhatsapp size={20} color='#24D366' />
          </a>
          <a href={shareUrls.instagram} target="_blank" rel="noopener noreferrer" className="block p-2">
            <BsInstagram size={20} color='#A732AA' />
          </a>
          <a href={shareUrls.reddit} target="_blank" rel="noopener noreferrer" className="block p-2">
            <FaReddit size={20} color='#FF5701' />
          </a>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
