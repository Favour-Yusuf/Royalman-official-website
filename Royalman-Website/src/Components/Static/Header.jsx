import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";
import { IoReorderTwo } from "react-icons/io5";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 25) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <header
      className={`flex  bg-white justify-between  px-7 md:px-20 lg:px-0 lg:justify-around items-center fixed top-0 left-0 w-full z-10 ${
        show ? "bg-black duration-700" : "bg:black duration-700"
      } `}
    >
      <div className="ml-4">
        <img src="https://res.cloudinary.com/decwhxo32/image/upload/v1723390784/RoyalmanLogo_vvjuvk.png" alt="Logo" className="h-[70px]" />
      </div>
      <div className=" w-[600px] h-[80%] justify-between items-center text-[20px] hidden lg:flex ">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link>Contact us</Link>
        <Link>Blog</Link>
      </div>
      <Link to="https://wa.link/ezfpw2">
        <button className="mr-4 h-9 w-44 rounded-lg bg-brandOne hidden md:block">
          Contact us
        </button>
      </Link>
      <div className="flex">
        <div className="flex justify-between items-center ">
          <div className="flex lg:hidden">
            <IoReorderTwo
              className="text-[40px] cursor-pointer"
              onClick={() => setMobileNav(true)}
            />
          </div>
        </div>
        <div className="hidden lg:flex "></div>
      </div>

      {/* MobileDesign */}
      <div
        className={
          mobileNav
            ? "fixed top-0 left-0 w-[100%]  h-screen bg-black/90 z-10 duration-700 overflow-y-scroll"
            : "fixed top-0 left-[-100%] w-[100%] h-screen bg-black/80 z-10 duration-700 overflow-y-scroll delay-200"
        }
      ></div>

      <div
        className={
          mobileNav
            ? "fixed top-0 left-0 w-[65%] md:w-[40%] h-screen bg-white z-10 duration-700 overflow-y-scroll delay-200 rounded-tr-3xl rounded-br-3xl"
            : "fixed top-0 left-[-100%] w-[65%] md:w-[40%] h-screen bg-white z-10 duration-700 overflow-y-scroll"
        }
      >
        <div>
          <MdCancel
            className="text-[30px] absolute right-6 w-5 top-6 cursor-pointer"
            onClick={() => setMobileNav(false)}
          />
        </div>

        <nav className=" h-full bg-card-color">
          <div className="flex justify-center items-center flex-col h-3/4">
            <ul className="flex flex-col px-1 py-4 text-black font-semibold mt-16">
              <Link to='/'>
                <li
                  onClick={() => setMobileNav(false)}
                  className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4  duration-500 "
                >
                  <span className="text-base md:text-xl   hover:text-brandOne font-normal leading-normal">
                    Home
                  </span>
                </li>
              </Link>
              <Link to='/about'>
                <li
                  onClick={() => setMobileNav(false)}
                  className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4  duration-500 "
                >
                  <span className="text-base md:text-xl   hover:text-brandOne font-normal leading-normal">
                    About us
                  </span>
                </li>
              </Link>
              <Link to='https://wa.link/ezfpw2' target="blank">
                <li
                  onClick={() => setMobileNav(false)}
                  className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4  duration-500 "
                >
                  <span className="text-base md:text-xl   hover:text-brandOne font-normal leading-normal">
                    Contact us
                  </span>
                </li>
              </Link>
              <Link to='#'>
              <li
                onClick={() => setMobileNav(false)}
                className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4  duration-500 "
              >
                <span className="text-base md:text-xl   hover:text-brandOne font-normal leading-normal">
                  Blog
                </span>
              </li>
              </Link>
              <li
                onClick={() => setMobileNav(false)}
                className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4  duration-500 "
              >
                <Link to="https://wa.link/ezfpw2">
                  <button className="mr-4 h-9 w-44 rounded-lg bg-brandOne">
                    Chat with us
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
