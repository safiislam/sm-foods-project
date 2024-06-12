import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addToDb } from "../utils/setLocalStorage";

const Honey = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("ProductData.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter(
          (product) => product.category === "Honey"
        );
        setProducts(filteredData);
      });
    //   .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleAddToCart = (product) => {
    console.log(product);
    addToDb(product?.id)
  }

  return (
    <div>
      <p className=" text-center lg:font-bold lg:text-4xl mt-3  w-full bg-gradient-to-r from-orange-500 to-yellow-200 py-12 text-white uppercase">
        Honey / মধু
      </p>

      {/* product details */}
      <div className="w-[90%] mx-auto gap- py-10 grid md:grid-cols-2 lg:grid-cols-4 lg:ps-4 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="card card-compact lg:w-80 bg-base-100 shadow-lg shadow-orange-100 hover:shadow-xl my-12 "
          >
            <Link to={`/productDetails/${product.id}`}>
              <figure>
                <img
                  className="h-[250px] w-[80%] p-4 rounded-3xl "
                  src={product.Image}
                  alt="Product name"
                />
              </figure>
              <div className="card-body">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <div className=" flex justify-between font-bold items-center">
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

                <div className="flex justify-between items-center gap-10 mt-3 mb-5">
                  <>
                    {/* {`/toys/${_id}`} */}
                    <Link to={``}>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="px-4 py-2 rounded-md
                text-white  font-bold text-base bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500 ..."
                      >
                        Add To Cart
                      </button>
                    </Link>
                  </>

                  <p className=" text-right  font-semibold">
                    Tk <span className="text-xl">{product.price} ৳</span>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Honey;
