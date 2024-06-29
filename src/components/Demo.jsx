// // Show from the top of the page
// import { useLocation } from "react-router-dom";
// import { resolveConfig } from "vite";
// const {pathname} = useLocation();

//   useEffect(() => {
//     window.scroll(0,0);
//   }, [pathname]);



<Link to={`/productDetails/${product.id}`}>
              <figure>
                <img
                  className="h-[250px] w-[80%] p-4 rounded-3xl "
                  src={product.Image}
                  alt="Product name"
                />
              </figure>
              <div className="card-body ">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <div className=" flex justify-between font-bold items-center py-2 mb-2">
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

                <div className="flex justify-between items-center gap-10 mt-3 mb-5 ">
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