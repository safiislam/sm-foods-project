
// // Show from the top of the page
// import { useLocation } from "react-router-dom";
// import { resolveConfig } from "vite";
// const {pathname} = useLocation();

//   useEffect(() => {
//     window.scroll(0,0);
//   }, [pathname]);

import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductDetails = () => {
  const productDetails = useLoaderData();
  console.log(productDetails);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  

  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    address: "",
    productName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    // Reset form fields
    setFormData({
      name: "",
      contactNumber: "",
      address: "",
    });
  };

  return (
    <div>
      
        <div className=" lg:w-[50%] px-6 lg:px-0 mt-6 lg:mt-0 ">
          
          {/* Buy Now Button */}
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="px-6 lg:px-12 py-3 rounded-md
                text-white  font-bold lg:text-lg text-base bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500 mr-5"
          >
            Buy Now
          </button>

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg text-center mt-4 w-[70%] lg:w-[90%] mx-auto ">
                অর্ডার করতে আপনার তথ্য প্রদান করুন
              </h3>

              <div className=" bg-slate-100 mt-8 mb-5 flex justify-between items-center lg:mr-[6px]">
                <div className=" flex items-center lg:text-lg lg:font-semibold">
                  <div className="w-[100px]">
                    <img className="w-full" src={productDetails.Image} alt="" />
                  </div>

                  <div className="pl-4">
                    <p>{productDetails.name}</p>
                    <p>{productDetails.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold mr-4">
                  Tk <span className="text-2xl">{productDetails.price}</span>
                </p>
              </div>

              {/*  */}

              <div className="max-w-md mx-auto mt-3 p-6 bg-white rounded-md shadow-md ">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="Name"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Full Name"
                      className="w-full p-2 border rounded-md focus:outline-none focus:border-orange-400"
                      // onChange={(e) => setProductName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="quantity"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="number"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      placeholder="Enter Phone number"
                      className="no-arrows w-full p-2 border rounded-md focus:outline-none focus:border-orange-400"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="Address"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter Your Delivery Location."
                      className="w-full p-2 border rounded-md focus:outline-none focus:border-orange-400"
                      required
                    />
                  </div>

{/* I want to get this p tag data when prom submit */}
                  <p>{productDetails.name}</p>

                  <div className="text-center">
                    <button
                      type="submit"
                      value="Send"
                      className="px-6 lg:px-12 py-2 rounded-md
                text-white  font-bold lg:text-lg text-base bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500 mr-5"
                    >
                      Confirm Order
                    </button>
                  </div>
                </form>
              </div>
        
            </div>
          </dialog>

          
          
        </div>
      
    </div>
  );
};

export default ProductDetails;
