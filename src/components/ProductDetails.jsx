import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { addToDb } from "../utils/setLocalStorage";

const ProductDetails = () => {
  const productDetails = useLoaderData();
  console.log(productDetails);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddtoCart = (product) => {
    addToDb(product.id)
  }
  // for stars
  const StarRating = ({ rating }) => {

    const fullStars = Math.floor(rating);

    const hasHalfStar = rating % 1 >= 0.5;

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    // array of star components
    const stars = [
      ...Array(fullStars).fill(<FaStar className="text-orange-400" />),
      hasHalfStar ? <FaStarHalfAlt className="text-orange-400" /> : null,
      ...Array(emptyStars).fill(<FaRegStar className="text-orange-400" />),
    ];

    return (
      <div className="flex items-center  gap-x-1 lg:text-2xl text-xl mb-8">
        {stars.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* <p className="text-center text-2xl font-semibold">Product Details</p> */}

      <div className=" lg:w-[80%] mx-auto mt-4 lg:mt-10 mb-10 lg:flex justify-evenly items-center">
        <div className="w-[70%] mx-auto lg:mx-0 lg:w-[35%] ">
          <img
            className="w-full"
            src={productDetails.Image}
            alt="Product image"
          />
        </div>

        <div className=" lg:w-[50%] px-6 lg:px-0 mt-6 lg:mt-0 ">
          <p className="lg:text-4xl text-2xl font-semibold mb-5">
            {productDetails.name}
          </p>
          <p className="lg:text-xl text-lg font-semibold mb-4">
            Quantity : {productDetails.quantity}
          </p>
          <p className="lg:text-xl text-lg font-semibold">
            In Stock :
            <span
              className={
                productDetails.status === "Available"
                  ? "text-green-600 ml-2"
                  : "text-red-600 ml-2"
              }
            >
              {productDetails.status}
            </span>
          </p>
          <div className="flex items-center gap-x-5">
            <p className="lg:text-3xl text-2xl font-semibold my-6">
              Tk {productDetails.price} ৳
            </p>
            <del className="lg:text-2xl text-xl text-gray-400">
              Tk {productDetails.discountPrice}
            </del>
          </div>
          {/* <p className="my-3 flex items-center gap-3">
            <span>
              <FaStar className="text-orange-500" />
            </span>{" "}
            {productDetails.rating}
          </p> */}

          <div className="flex gap-x-2">
            <StarRating rating={productDetails.rating} />
            <span className="lg:text-lg font-semibold ">({productDetails.rating})</span>
          </div>

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
                <p className="font-semibold mr-4">Tk <span className="text-2xl">{productDetails.price}</span></p>
              </div>

              {/*  */}

              <div className="max-w-md mx-auto mt-3 p-6 bg-white rounded-md shadow-md ">
                <form>
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
                      placeholder="Enter Your Full Name"
                      className="w-full p-2 border rounded-md focus:outline-none focus:border-orange-400"
                      // onChange={(e) => setProductName(e.target.value)}
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
                      placeholder="Enter Your Delivery Location."
                      className="w-full p-2 border rounded-md focus:outline-none focus:border-orange-400"
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
                      id="quantity"
                      placeholder="Enter Phone number"
                      className="no-arrows w-full p-2 border rounded-md focus:outline-none focus:border-orange-400"
                      required
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-6 lg:px-12 py-2 rounded-md
                text-white  font-bold lg:text-lg text-base bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500 mr-5"
                    >
                      Confirm Order
                    </button>
                  </div>
                </form>
              </div>
              {/*  */}
              <div className="modal-action absolute top-0 right-5">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button
                    type="submit"
                    className="px-3 py-1 rounded-full bg-slate-300 shadow-xl text-black hover:text-white border-2 hover:bg-slate-900 focus:outline-none focus:shadow-outline-blue font-bold active:bg-orange-500"
                  >
                    X
                  </button>
                </form>
              </div>
            </div>
          </dialog>

          {/*  */}

          <button
            onClick={() => handleAddtoCart(productDetails)}
            className="px-4 lg:px-12 py-3 rounded-md
                text-white  font-bold lg:text-lg text-base bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500 mr-5"
          >
            Add to Cart
          </button>
          <hr className="mt-5 mb-3" />

          {/* see more or less */}
          <div className="py-4">
            <p className="text-lg font-semibold">Description</p>
            <p className="text-gray-700 inline">
              {isExpanded
                ? productDetails.description
                : `${productDetails.description.slice(0, 200)}...`}
            </p>
            <button
              onClick={toggleExpansion}
              className="font-bold text-orange-500 hover:text-orange-600 focus:outline-none ml-1"
            >
              {isExpanded ? "See less" : "See more"}
            </button>
          </div>
        </div>
      </div>

      {/* section for every product */}
      <div className=" bg-gray-100 lg:flex justify-evenly py-8 text-center mb-1">
        <div className=" lg:flex items-center gap-x-4 py-10 px-3 ">
          <div className="w-[100px] mx-auto lg:mx-0 mb-3 lg:mb-0">
            <img
              className="rounded-full w-full"
              src="https://img.freepik.com/free-vector/cash-payment-concept-illustration_114360-3320.jpg?t=st=1717058911~exp=1717062511~hmac=2dd39ba50f2d6047a1de116b053e34a4a834e3d519a859aab8c25f98d6057101&w=826"
              alt="Paymant picture"
            />
          </div>
          <div>
            <p className="font-semibold mb-1">নিরাপদ পেমেন্ট</p>
            <p>বিভিন্ন পেমেন্ট পদ্ধতি থেকে বেছে নিন</p>
          </div>
        </div>

        <div className=" lg:flex items-center gap-x-4 py-10 px-3">
          <div className="w-[100px]  mx-auto lg:mx-0 mb-3 lg:mb-0">
            <img
              className="rounded-full w-full"
              src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?t=st=1717062905~exp=1717066505~hmac=4486ebf5858860e3edefa1a839d12bb164b03637f97b9b509059f6450833e475&w=826"
              alt="Paymant picture"
            />
          </div>
          <div>
            <p className="font-semibold mb-1">ডেলিভারি</p>
            <p>৩-৫ দিনের মধ্যে আপনার পণ্য পৌছে যাবে</p>
          </div>
        </div>

        <div className=" lg:flex items-center gap-x-4 py-10 px-3">
          <div className="w-[100px] mx-auto lg:mx-0 mb-3 lg:mb-0">
            <img
              className="rounded-full w-full"
              src="https://img.freepik.com/premium-vector/100-organic-food-product-sticker-certified-label_236275-45.jpg?ga=GA1.1.377660834.1717058610&semt=sph"
              alt="Paymant picture"
            />
          </div>
          <div>
            <p className="font-semibold mb-1 ">১০০% ন্যাচারাল</p>
            <p>প্রাকৃতিক উপাদান ব্যবহার করতে আমরা প্রতিশ্রুতিবদ্ধ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
