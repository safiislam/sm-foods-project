import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const productDetails = useLoaderData();
  console.log(productDetails);
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
          <p className="lg:text-4xl font-semibold mb-5">{productDetails.name}</p>
            <p className="text-xl font-semibold mb-4">Quantity : {productDetails.quantity}</p>
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
          <div>
            <p className="text-3xl font-semibold my-6">Tk {productDetails.price} ৳</p>
          </div>
          <p className="my-3 flex items-center gap-3"><span><FaStar className="text-orange-500"/></span> {productDetails.rating}</p>
          <button
            className="px-4 lg:px-12 py-2 rounded-md
                text-white  font-bold lg:text-lg text-base bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500 mr-5">
            Buy Now
          </button>
          <button
            className="px-4 lg:px-10 py-2 rounded-md
                text-white  font-bold lg:text-lg text-base bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500">
            Add to Cart
          </button>
          <hr className="mt-5 mb-3" />
          <p>Description</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
