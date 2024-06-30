import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const HomeProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("ProductData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <p className="md:text-5xl  text-3xl font-semibold md:mb-5 mb-6 text-center">
        Our Popular Products
      </p>
      <p className="md:w-[50%] w-[90%] mx-auto mb-16 text-center text-slate-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor suscipit
        nemo voluptates quas adipisci accusantium facere delectus vero
        dignissimos doloribus.
      </p>

      {/* product Item */}

      <div className=" w-[90%] mx-auto gap-x-4 grid md:grid-cols-2 lg:grid-cols-3 lg:mt-8 max-w-7xl  lg:ps-8 ">
        {products.slice(0, 6).map((product) => (
          <div
            key={product.id}
            className=" card card-compact lg:w-80 bg-base-100 shadow-lg shadow-orange-100 hover:shadow-xl mt-12 mb-20 border group"
          >
            <Link to={`/productDetails/${product.id}`}>
              <figure>
                <img
                  className="h-[230px] w-[70%] p-4 rounded-3xl transition duration-300 ease-in-out group-hover:scale-110"
                  src={product.Image}
                  alt="Product name"
                />
              </figure>
              <div className="card-body  bg-gray-100 rounded-b-xl ">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <div className=" flex justify-between font-bold items-center py-2">
                  <p>Quantity: {product.quantity} </p>

                  <p className="font-bold">
                    <span
                      className={
                        product.status === "Available"
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {product.status}
                    </span>
                  </p>

                  <div className="flex items-center gap-1 text-lg">
                    <FaStar className="text-orange-500"></FaStar>
                    <p> {product.rating}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className=" font-bold">
                    Tk <span className="text-2xl">{product.price} ৳</span>
                  </p>
                  <del className=" text-gray-500 text-xl">
                    Tk {product.discountPrice}
                  </del>
                </div>
              </div>
            </Link>
          </div>
        ))}

        
      </div>

      <div className=" text-center mb-20">
        <Link to="/allProduct"
          className=" md:px-16 px-12 py-3 rounded-md
                text-white md:text-xl font-bold  bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500 "
        >
          Show ALL 
        </Link>
        </div>
    </div>
  );
};

export default HomeProduct;
