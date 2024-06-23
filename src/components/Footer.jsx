import React from "react";
import PropTypes from "prop-types";
import { FaFacebook, FaTwitter, FaPinterest, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";



const sociaIcons = [
  {
    icon: <FaFacebook />,
    href: "#",
  },
  {
    icon: <FaTwitter />,
    href: "#",
  },
  {
    icon: <FaLinkedin />,
    href: "#",
  },
];

const QuickLinks = ({ qLink }) => (
  <li>
    <a href={qLink.href} className="text-gray-700 hover:text-gray-900 ">
      {qLink.value}
    </a>
  </li>
);
QuickLinks.propTypes = {
  qLink: PropTypes.object.isRequired,
};


const JobInfo = ({ job }) => (
  <li>
    <a href={job.href} className="text-gray-700 hover:text-gray-900 ">
      {job.value}
    </a>
  </li>
);
JobInfo.propTypes = {
  job: PropTypes.object.isRequired,
};

const ContactUs = ({ contact }) => (
  <li>
    <a href={contact.href} className="text-gray-700 hover:text-gray-900">
      {contact.value}
    </a>
  </li>
);
ContactUs.propTypes = {
  contact: PropTypes.object.isRequired,
};

const NavigationItem = ({ item }) => (
  <li>
    <a href={item.href} className="text-gray-700 hover:text-gray-900">
      {item.value}
    </a>
  </li>
);

NavigationItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const SocialItem = ({ social }) => (
  <li>
    <a
      href={social.href}
      className="border flex justify-center items-center rounded-full w-8 h-8 text-gray-700 hover:text-blue-500"
    >
      {social.icon}
    </a>
  </li>
);

SocialItem.propTypes = {
  social: PropTypes.object.isRequired,
};

const Footer = () => {
  return (
    <section className="bg-slate-100 text-black py-10">
      <div className="lg:w-[90%] mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-center sm:text-left ">
          <div className="lg:col-span-2 px-3 lg:px-0 lg:pr-10">
            <h2 className="font-bold text-lg">SM Foods</h2>
            <p>এসএম ফুডস-এ, আমাদের প্রতিটি কাজের মূলমন্ত্র হলো স্বাস্থ্য এবং স্থায়িত্বের প্রতিশ্রুতি। আমরা গর্বিত যে আমরা মানসম্পন্ন এবং নিরাপদ পণ্যগুলির একটি বৈচিত্র্যময় পরিসর সরবরাহ করতে পারি যা কেবলমাত্র আপনার শরীরকেই পুষ্টি দেয় না বরং পৃথিবীকে একটি স্বাস্থ্যকর  গ্রহে পরিণত করতে সহায়তা করে। এসএম ফুডস বিশুদ্ধ, প্রাকৃতিক উপাদানগুলির শক্তিতে বিশ্বাসী এবং সুস্থতার পরিসীমা বাড়াতে প্রতিশ্রুতিবদ্ধ।</p>
          </div>

          <div className="">
            <h5 className="font-semibold ">Quick Links</h5>
            <ul>
              <li className="mb-2">গ্রাহক সেবা</li>
              <li className="mb-2">রিটার্ন পলিসি</li>
              <li>রিফান্ড পলিসি</li>
            </ul>
          </div>
          
          <div className=" ">
            <h5 className="font-semibold ">Quick Help</h5>
            <ul>
              <li>Select</li>
              <li>Service</li>
              <li>Payment</li>
            </ul>
          </div>
          <div className=" lg:w-[120%]">
            <h5 className="font-semibold mb-2">Contact Us</h5>
            <div className=" ">
          <p className="lg:text-lg "><FaLocationDot className="lg:text-xl  inline-block" /> Nasirabad Properties Road 1, House-2 </p>
          <p className="lg:text-lg lg:ml-6 mb-3">Chittagong, Bangladesh.</p>
          <p className="lg:text-lg"><MdEmail className="lg:text-xl  inline-block" /> smfoods@gmail.com</p>
          <p className="lg:text-lg mt-3"><BiSolidPhoneCall className="lg:text-xl  inline-block" /> +88 01727103079</p>
        </div>
          </div>
        </div>
        <hr className="my-6" />
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left ">
          <div>
            <p className="mb-1">
              Copyright &copy; SMFoods, All rights reserved
            </p>
          </div>
          <div className="mt-1 lg:mt-0 ">
            <ul className="flex space-x-4 font-bold">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </ul>
          </div>
          <div className="flex space-x-2 mt-1 lg:mt-0 ">
            <ul className="flex space-x-2">
              {sociaIcons.map((social, i) => (
                <SocialItem social={social} key={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
