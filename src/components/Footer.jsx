import React from "react";
import PropTypes from "prop-types";
import { FaFacebook, FaTwitter, FaPinterest, FaLinkedin } from "react-icons/fa";

const quickLinks = [
  { value: "Home", href: "#!" },
  { value: "About Us", href: "#!" },
  { value: "Services", href: "#!" },
];


const jobInfo = [
  { value: "Select", href: "#!" },
  { value: "Service", href: "#!" },
  { value: "Payment", href: "#!" },
];

const contactUs = [
  {
    value: "Chittagong, Bangladesh",
    href: "#!",
  },
  {
    value: "contact@easyfrontend.com",
    href: "#!",
  },
  {
    value: "+880 174212452",
    href: "#!",
  },
];

const navigations = [
  {
    value: "Home",
    href: "#!",
  },
  {
    value: "About",
    href: "#!",
  },
  {
    value: "Contact",
    href: "#!",
  },
];

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
    icon: <FaPinterest />,
    href: "#",
  },
  {
    icon: <FaLinkedin />,
    href: "#",
  },
];

const QuickLinks = ({ qLink }) => (
  <li>
    <a href={qLink.href} className="text-gray-700 hover:text-gray-900">
      {qLink.value}
    </a>
  </li>
);
QuickLinks.propTypes = {
  qLink: PropTypes.object.isRequired,
};


const JobInfo = ({ job }) => (
  <li>
    <a href={job.href} className="text-gray-700 hover:text-gray-900">
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
    <section className="bg-slate-100 text-gray-700 py-10 ">
      <div className="lg:w-[90%] mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center sm:text-left">
          <div>
            <h2 className="font-bold text-lg">SM Foods</h2>
          </div>
          <div>
            <h5 className="font-semibold">Quick Links</h5>
            <ul>
              {quickLinks.map((qLink, i) => (
                <QuickLinks qLink={qLink} key={i} />
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold">Job Info</h5>
            <ul>
              {jobInfo.map((job, i) => (
                <JobInfo job={job} key={i} />
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Contact Us</h5>
            <ul>
              {contactUs.map((contact, i) => (
                <ContactUs contact={contact} key={i} />
              ))}
            </ul>
          </div>
        </div>
        <hr className="my-6" />
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          <div>
            <p className="mb-1">
              Copyright &copy; Easy Frontend, All rights reserved
            </p>
          </div>
          <div className="mt-1 lg:mt-0">
            <ul className="flex space-x-4">
              {navigations.map((item, i) => (
                <NavigationItem item={item} key={i} />
              ))}
            </ul>
          </div>
          <div className="flex space-x-2 mt-1 lg:mt-0">
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
