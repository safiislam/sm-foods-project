import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";

const Contact = () => {
  return (
    <div>
      <div className="text-center mt-16 mb-10">
        <h1 className="text-3xl lg:text-5xl font-bold animate-fade-up">Contact Us</h1>
        <p className="text-lg text-gray-500 pt-3  lg:w-[45%] w-[95%] m-auto ">
          From Seed to Success, We're Here to Help. To make the future brighter and more connected, let's work together to bring out the best in your company.

        </p>
      </div>

      <div className=" lg:w-[90%] mx-auto flex justify-between items-center lg:mb-20">
      <div className="w-[40%]">
          <img
            src="https://i.ibb.co/k9ybqq6/flat-man-illustration-customer-support-23-2148889244.jpg"
            alt=""
          />
      </div>

      <div className="md:w-1/2  px-3 md:px-0">
          <div className="text-2xl font-bold mb-6 text-center md:text-left ">-- Get In Touch --</div>
          <form action="#" className="w-full ">
            <div className="flex flex-wrap -mx-2 mb-6">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full h-12 border border-gray-300 rounded px-4 focus:outline-none focus:border-orange-400 transition duration-300"
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full h-12 border border-gray-300 rounded px-4 focus:outline-none focus:border-orange-400 transition duration-300"
                />
              </div>
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full h-12 border border-gray-300 rounded px-4 focus:outline-none  focus:border-orange-400 transition duration-300"
              />
            </div>
            <div className="mb-6">
              <textarea
                cols="30"
                rows="10"
                placeholder="Write your Message..."
                required
                className="w-full h-32 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-400  transition duration-300"
              ></textarea>
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="group mt-2  border border-orange-400 hover:border-none relative h-12 w-44 overflow-hidden rounded-ss-xl rounded-ee-xl font-bold bg-slate-50 text-lg shadow-md hover:shadow-lg"
              >
                <div className="absolute inset-0 w-3 bg-gradient-to-r from-orange-500 to-yellow-300 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Send Message
                </span>
              </button>
            </div>
          </form>
        </div>

      </div>


      {/* Address part */}
      <div className=" lg:w-[90%] md:w-[95%] mx-auto flex flex-col md:flex-row justify-between my-16 items-center">
        
      <div className=" lg:ml-20">
          <p className="lg:text-4xl font-semibold mb-7"> Our Office Address</p>
          <p className="lg:text-xl "><FaLocationDot className="lg:text-4xl text-orange-400 inline-block" /> Nasirabad Properties Road 1, House-2 </p>
          <p className="lg:text-xl lg:ml-10 mb-6">Chittagong, Bangladesh.</p>
          <p className="lg:text-xl"><MdEmail className="lg:text-4xl text-orange-400 inline-block" /> smfoods@gmail.com</p>
          <p className="lg:text-xl mt-6"><BiSolidPhoneCall className="lg:text-4xl text-orange-400 inline-block" /> +88 01727103079</p>
        </div>

        <div className="lg:w-[50%] md:w-[60%] w-[92%] lg:h-[280px] md:h-[230px]  mt-5 md:mt-0">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.4512217194696!2d91.8140612695338!3d22.360994938988757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd88d0af07d61%3A0xbbf9590c4e77a64d!2sRoad%20No.%201%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1714885505967!5m2!1sen!2sbd"
           
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" 
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
