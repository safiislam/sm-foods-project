import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white sticky top-0 z-20">
      <div className="navbar   w-[90%] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-xl">
          <li>
            <Link to="/">All Category</Link>
          </li>
          <li>
            <Link to="/about">Honey</Link>
          </li>
          <li>
            <Link to="/">Sarisha Oil</Link>
          </li>
          <li>
            <Link to="/Contact">Gawa Ghee</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/" className="bg-orange-500 hover:bg-red-700 px-6 lg:py-3 py-2 rounded-md text-white font-medium shadow-md">Get In Touch</Link>
      </div>
    </div>
    </div>
  );
};

export default Header;
