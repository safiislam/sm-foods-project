import React from "react";
import HomeCategory from "./HomeCategory";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Home.css";


import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HomeCustomerReview from "./HomeCustomerReview";
import HomeProduct from "./HomeProduct";

const Home = () => {
  return (
    <div>
      {/* Home Slider */}
      <section className=" w-[90%] mx-auto z-0  md:mt-1">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className=" ">
            <div className=" w-[90%] md:mt-32 mt-10 mx-auto h-full md:flex items-center gap-4">
              <div>
              <h2 className="text-3xl font-bold md:text-[70px] leading-none mb-6 font-serif">
                SM FOODS
              </h2>
              <p className="text-[22px] leading-normal opacity-80 ">
                This is a factor in the economy of a nation, and the
                administration takes the major choices. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur a provident sapiente porro culpa illum quidem, nobis suscipit quasi hic unde quod nesciunt. Sequi itaque quas ipsam magni ea placeat? Lorem ipsum dolor sit amet consectetur adipisicing elit!
              </p>
              <div>
              <button className="px-8 rounded-ss-xl rounded-ee-xl py-3  mt-10 text-white  font-bold text-base bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-yellow-500 hover:to-orange-500 shadow-xl">
                    Shop Now
                  </button>
              </div>
              </div>
              <img className="md:w-[50%] mt-16 md:mt-0" src="https://i.ibb.co/fnHVtV7/Whats-App-Image-2024-06-25-at-2-41-29-AM.jpg" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className=" md:flex justify-evenly items-center md:py-24 py-6 bg-gray-5">
              <img
                src="https://basshopbd.com/wp-content/uploads/2022/09/d25822560b58a13c05c54e98d042399b_1000x1000.png"
                alt="Mustard Oil"
                className="md:w-[440px] w-[90%] mx-auto md:mx-0 "/>

              {/* Middle Section: Product Image and Key Benefits */}
              <div className=" w-[90%] mx-auto md:mx-0 mt-10 md:mt-0 w md:w-[45%] max-w-4xl flex flex-col md:flex-row md:items-center bg-gray-50 shadow-md rounded-lg overflow-hidden mb-8 relative">
                <div className="py-8 md:pl-10 pl-4 ">
                  <p className="md:text-5xl text-3xl font-bold text-yellow-500 md:mb-10 mb-6">
                    দেশি সরিষার তেল
                  </p>
                  <p className="text-xl md:text-3xl font-bold text-yellow-800 mb-6">
                    100% Pure Mustard Oil
                  </p>
                  <ul className="text-lg text-gray-700">
                    <li className="mb-2 font-semibold">✅ Cold-Pressed</li>
                    <li className="mb-2 font-semibold">✅ Rich in Omega-3</li>
                    <li className="mb-2 font-semibold">✅ Non-GMO</li>
                    <li className="mb-2 font-semibold">✅ Organic</li>
                  </ul>

                  <button className="px-8 rounded-ss-xl rounded-ee-xl py-3  mt-6 text-white  font-bold text-base bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-yellow-400 hover:to-orange-600">
                    Shop Now
                  </button>
                </div>

                <img
                  className="md:w-[160px] hidden md:block absolute  md:right-20 md:bottom-16 "
                  src="https://i.ibb.co/3c8MnPc/SM-Foods-logo-removebg-preview.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" md:flex justify-evenly items-center md:py-24 py-6 bg-gray-5">
              <img
                src="https://www.harniva.com/assets/backend/admin/plugins/source/hakkimizda/kalitelibal.png"
                alt="Mustard Oil"
                className="md:w-[440px] w-[90%] mx-auto md:mx-0 rounded-x shadow-m"
              />

              {/* Middle Section: Product Image and Key Benefits */}
              <div className=" w-[90%] mx-auto md:mx-0 mt-10 md:mt-0 w md:w-[45%] max-w-4xl flex flex-col md:flex-row md:items-center bg-gray-50 shadow-md rounded-lg overflow-hidden mb-8 relative">
                <div className="py-8 md:pl-10 pl-4 ">
                  <p className="md:text-5xl text-3xl font-bold text-yellow-500 md:mb-10 mb-6">
                    Honey / মধু
                  </p>
                  <p className="text-xl md:text-3xl font-bold text-yellow-800 mb-6">
                    100% Pure Outhantic Honey
                  </p>
                  <ul className="text-lg text-gray-700">
                    <li className="mb-2 font-semibold">✅ Cold-Pressed</li>
                    <li className="mb-2 font-semibold">✅ Rich in Omega-3</li>
                    <li className="mb-2 font-semibold">✅ Non-GMO</li>
                    <li className="mb-2 font-semibold">✅ Organic</li>
                  </ul>

                  <button className="px-8 rounded-ss-xl rounded-ee-xl py-3  mt-6 text-white  font-bold text-base bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500">
                    Shop Now
                  </button>
                </div>
                <img
                  className="md:w-[160px] hidden md:block absolute  md:right-20 md:bottom-16 "
                  src="https://i.ibb.co/3c8MnPc/SM-Foods-logo-removebg-preview.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" md:flex justify-evenly items-center md:py-24 py-6 bg-gray-5">
              <img
                src="https://media.e-valy.com/cms/products/images/f4b3265d-df5e-4835-add4-0cd2654235d3"
                alt="Mustard Oil"
                className="md:w-[440px] w-[90%] mx-auto md:mx-0 "
              />

              {/* Middle Section: Product Image and Key Benefits */}
              <div className=" w-[90%] mx-auto md:mx-0 mt-10 md:mt-0 w md:w-[45%] max-w-4xl flex flex-col md:flex-row md:items-center bg-gray-50 shadow-md rounded-lg overflow-hidden mb-8 relative">
                <div className="py-8 md:pl-10 pl-4 ">
                  <p className="md:text-5xl text-3xl font-bold text-yellow-500 md:mb-10 mb-6">
                    গাওয়া ঘি / Gawa Ghee
                  </p>
                  <p className="text-xl md:text-3xl font-bold text-yellow-800 mb-6">
                    100% Pure Gawa Ghee
                  </p>
                  <ul className="text-lg text-gray-700">
                    <li className="mb-2 font-semibold">✅ Cold-Pressed</li>
                    <li className="mb-2 font-semibold">✅ Rich in Omega-3</li>
                    <li className="mb-2 font-semibold">✅ Non-GMO</li>
                    <li className="mb-2 font-semibold">✅ Organic</li>
                  </ul>

                  <button className="px-8 rounded-ss-xl rounded-ee-xl py-3  mt-6 text-white  font-bold text-base bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-yellow-400 hover:to-orange-500">
                    Shop Now
                  </button>
                </div>

                <img
                  className="md:w-[160px] hidden md:block absolute  md:right-20 md:bottom-16 "
                  src="https://i.ibb.co/3c8MnPc/SM-Foods-logo-removebg-preview.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Product category in Home */}
      <section>
        <HomeCategory></HomeCategory>
      </section>

      {/* Our Popular Product */}
      <section>
        <HomeProduct></HomeProduct>
      </section>

      {/* Customer review */}
      <section>
        <HomeCustomerReview></HomeCustomerReview>
      </section>
    </div>
  );
};

export default Home;
