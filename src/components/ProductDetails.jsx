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
      <div className="flex items-center  gap-x-1 text-2xl mb-8">
        {stars.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
    );
  };

  return (
    <div>
      <p className="text-center text-2xl font-semibold">Product Details</p>

      <div className=" lg:w-[80%] mx-auto mt-4 mb-10 flex justify-between items-center">
        <div className="lg:w-[35%] ">
          <img
            className="w-full"
            src={productDetails.Image}
            alt="Product image"
          />
        </div>

        <div className=" lg:w-[50%]">
          <p className="lg:text-4xl font-semibold mb-5">
            {productDetails.name}
          </p>
          <p className="text-xl font-semibold mb-4">
            Quantity : {productDetails.quantity}
          </p>
          <p className="text-xl font-semibold">
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
            <p className="text-3xl font-semibold my-6">
              Tk {productDetails.price} ৳
            </p>
            <del className="text-2xl text-gray-400">
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
          <span className="text-lg font-semibold">({productDetails.rating})</span>
          </div>
          <button
            className="px-4 lg:px-12 py-3 rounded-md
                text-white  font-bold lg:text-lg text-base bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500 mr-5"
          >
            Buy Now
          </button>
          <button
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
