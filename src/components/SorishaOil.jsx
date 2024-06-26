import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addToDb } from "../utils/setLocalStorage";
import Swal from "sweetalert2";

const SorishaOil = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("ProductData.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter((product) => product.category === 'Oil');
        setProducts(filteredData);
      })
    //   .catch((error) => console.error('Error fetching data:', error));
  }, []);


  const handleAddToCart = (product) => {
    console.log(product);
    addToDb(product?.id)
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product Added to Cart",
      showConfirmButton: false,
      timer: 1000
    });
  }


  return (
    <div>
      <p className=" text-center font-bold md:text-4xl text-xl mt-3  w-full bg-gradient-to-r from-orange-500 to-yellow-200 py-12 text-white uppercase">
        Mustard oil / দেশি সরিষার তেল
      </p>

      {/* product details */}
      <div className="w-[90%] mx-auto gap-4 grid md:grid-cols-2 lg:grid-cols-3 lg:mt-8 max-w-7xl  lg:ps-8 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="card card-compact lg:w-80 bg-base-100 shadow-lg shadow-orange-100 hover:shadow-xl my-12 ">
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
                <div className=" flex justify-between font-bold items-center pt-2">
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

                <div className="flex justify-between items-center gap-10 mt-2 mb-3 ">
                  <>
                    {/* safi */}
                    {/* {`/toys/${_id}`} */}
                    <Link to={``}>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="px-4 py-2 rounded-md
                text-white  font-bold text-base bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500 ">
                        Add To Cart
                      </button>
                    </Link>
                  </>

                  <div className="">
                    <p className=" text-right  font-semibold mb-1">
                      Tk <span className="text-2xl">{product.price} ৳</span>
                    </p>
                    <del className="text-center text-gray-500 text-lg">
                      Tk {product.discountPrice}
                    </del>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SorishaOil;
