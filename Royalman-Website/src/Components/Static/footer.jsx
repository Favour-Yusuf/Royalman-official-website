import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="relative h-[150vh] lg:h-[80vh] w-full bg-footer bg-cover">
        <div className="h-full w-full absolute flex-wrap bg-black bg-opacity-85 flex lg:justify-between items-center justify-center">
          <div className="h-[400px] lg:h-[60%] w-[300px] flex flex-col items-center justify-between">
            <div>
              <img
                src="https://res.cloudinary.com/decwhxo32/image/upload/v1723390784/RoyalmanLogo_vvjuvk.png"
                alt="Royalman Logo"
                className="h-[100px]"
              />
            </div>
            <p className="text-center text-[22px] text-white mb-5">
              Quality and Affordable Web Development For You.
            </p>
            <p className="text-white text-[18px] mb-6">
              Contact Us And Let's Get Started
            </p>
            <div className="h-[80px] w-[80%] flex text-[25px] justify-between items-center text-brandOne">
              <Link to="https://wa.link/ezfpw2" target="blank">
                <FaWhatsapp />
              </Link>
              <Link to="https://www.facebook.com/profile.php?id=61563814688772" target="blank">
                <FaFacebookF />
              </Link>
              <Link to="https://www.linkedin.com/in/royalman-digital-concept-885514322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank">
                <FaLinkedin />
              </Link>
              <Link to="https://www.instagram.com/royalmandigital/" target="blank">
                <FaInstagram />
              </Link>
              <Link to="https://twitter.com/royalmanglobal" target="blank">
                <FaXTwitter />
              </Link>
            </div>
            <Link to="/termsofservice" className="text-[18px] text-brandOne hover:text-brandTwo mt-7">
              Term of Service
            </Link>
            <Link to="/privacypolicy" className="text-brandOne hover:text-brandTwo">
                Privacy Policy
            </Link>
          </div>
          <div className="h-[250px] lg:h-[60%] w-[300px] flex flex-col items-center justify-between">
            <p className="text-[20px] text-white">Get in Touch</p>
            <p className="flex items-center text-white w-[58%] justify-between">
              <FaPhoneAlt className="text-brandOne text-[35px] mr-3" />
              +234 902 990 3813
              +234 805 377 4667
            </p>
            <p className="flex items-center w-full text-white justify-between">
              <MdEmail className="text-brandOne" />
              royalmanglobalenterprise@gmail.com
            </p>
            <p className="flex items-center w-[70%] text-white justify-between">
              <FaWhatsapp className="text-brandOne" />
              Message us on Whatsapp
            </p>
            <button className="flex items-center justify-center h-[40px] w-[180px] bg-brandOne font-bold">
              <IoPeopleOutline className="text-brandTwo mr-4 text-[25px]" />
              Refer & Earn
            </button>
          </div>
          <div className="lg:h-[60%] h-[250px] w-[300px] flex flex-col items-center">
            <p className="text-[30px] text-center leading-8 mb-7 text-white">
              Subscribe to Our Newsletter
            </p>
            <label htmlFor="email" className="text-white">
              Email address:
            </label>
            <input
              type="email"
              placeholder="Your email address"
              className="h-[40px] w-[80%] rounded-xl outline-none pl-5"
            />
            <button className="h-[40px] w-[150px] bg-brandOne mt-7 rounded-xl text-[20px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-950 text-white py-4 text-center">
        <p className="text-[16px] lg:text-[18px]">
          © 2024 Royalman Digital Concept. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
