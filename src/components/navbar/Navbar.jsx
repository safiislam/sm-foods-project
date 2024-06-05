import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";
import { IoCart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Company" },
    { id: 3, text: "Product" },
    { id: 4, text: "About" },
    { id: 5, text: "Contact" },
  ];
  return (
    <div className="flex  justify-between w-[100%]  lg:max-w-[90%] mx-auto  px-5 md:px-0 py-4 md:py-4 text-black sticky top-0 z-20 bg-white ">
      {/* Logo */}

      <Link to="/" className="hidden md:flex cursor-pointer">
        <img
          className="w-[50px] rounded-full"
          src="https://i.ibb.co/4S75tm6/SM-Foods-logo.jpg"
          alt=""
        />
        <h1 className=" font-Dancing  md:text-3xl text-xl  font-bold px-3 flex justify-center items-center text-orange-500 ">
          SM FooD
        </h1>
      </Link>

      <div className="flex items-end gap-4 lg:text-lg">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-7 font-semibold">
          <Link to="/" className=" nav_a rounded-xl  cursor-pointer">Home</Link>
          <Link to="/allProduct" className=" nav_a rounded-xl  cursor-pointer">All Product</Link>
          <Link to="" className=" nav_a rounded-xl  cursor-pointer">Sarisha Oil</Link>
          <Link to="" className=" nav_a rounded-xl  cursor-pointer">Gawa Ghee</Link>
        </ul>
        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>
      <div className="flex items-end gap-4 ">
        <div className="relative cursor-pointer ">
          <span className="bg-orange-400 absolute px-[6px] rounded-full text-sm font-bold -top-3 left-5 text-white">
            0
          </span>
          <p className="font-bold flex  items-center text-black -mt-1">
            {" "}
            <IoCart size={30} />
          </p>
        </div>
        <div>
          <p className=" font-bold cursor-pointer flex justify-center items-center  text-black  mb-1">
            {" "}
            <FaUser size={24} />
          </p>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden right-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 right-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold font-Dancing text-orange-500 m-4 ">
          SM Foods
        </h1>

        {/* Mobile Navigation Items */}

          <li className="p-4 border-b rounded-xl text-white  duration-300  cursor-pointer border-gray-600">
            <Link to="/">Home</Link>
          </li>

      </ul>
    </div>
  );
};

export default Navbar;
