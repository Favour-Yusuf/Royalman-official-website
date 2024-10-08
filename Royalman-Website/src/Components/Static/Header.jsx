import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex justify-between items-center fixed top-0 left-0 w-full z-20 transition-all duration-700 px-5 md:px-10 lg:px-20 ${
        show ? "bg-white text-black shadow-lg" : "bg-transparent text-white"
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="https://res.cloudinary.com/decwhxo32/image/upload/v1723390784/RoyalmanLogo_vvjuvk.png"
          alt="Logo"
          className="h-[40px] md:h-[50px] lg:h-[60px]"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-8 text-lg  font-bold">
        <Link to="/" className="hover:text-brandOne transition duration-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-brandOne transition duration-300">
          About us
        </Link>
        <Link to="https://wa.link/ezfpw2" className="hover:text-brandOne transition duration-300">
          Contact us
        </Link>
        <Link to="/blog" className="hover:text-brandOne transition duration-300">
          Blog
        </Link>
      </nav>

      {/* Free Quote Button */}
      <Link to="https://calendly.com/royalmanglobalenterprise/free_consultation" target="_blank">
        <button className="hidden lg:block h-9 w-36 lg:w-44 rounded-lg bg-brandOne font-bold text-white hover:bg-brandTwo transition duration-300">
          Free Quote
        </button>
      </Link>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden flex items-center">
        <HiMenuAlt2 
          className="text-3xl cursor-pointer text-brandOne"
          onClick={() => setMobileNav(true)}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-30 transition-transform transform ${
          mobileNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className={`fixed top-0 left-0 w-[65%] md:w-[50%] lg:w-[40%] h-full bg-white z-40 transition-transform transform ${
            mobileNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Icon */}
          <div className="flex justify-end p-4">
            <MdCancel
              className="text-2xl cursor-pointer text-brandOne"
              onClick={() => setMobileNav(false)}
            />
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col items-center text-black space-y-6 mt-8 text-lg">
            <Link
              to="/"
              onClick={() => setMobileNav(false)}
              className="hover:text-brandOne transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileNav(false)}
              className="hover:text-brandOne transition duration-300"
            >
              About us
            </Link>
            <Link
              to="https://wa.link/ezfpw2"
              onClick={() => setMobileNav(false)}
              className="hover:text-brandOne transition duration-300"
            >
              Contact us
            </Link>
            <Link
              to="/blog"
              onClick={() => setMobileNav(false)}
              className="hover:text-brandOne transition duration-300"
            >
              Blog
            </Link>
            <Link to="https://calendly.com/royalmanglobalenterprise/free_consultation" target="_blank">
              <button className="h-9 w-36 md:w-44 rounded-lg bg-brandOne text-white hover:bg-brandTwo transition duration-300">
                Free Quote
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
