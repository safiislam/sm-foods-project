import React from "react";
import HomeCategory from "./HomeCategory";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <div>
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
            <div className="w-[80%] mt-32 mx-auto h-full">
              <h2 className="text-3xl font-bold md:text-[70px] leading-none mb-6 font-serif">
                SM FOODS
              </h2>
              <p className="text-[22px] leading-normal opacity-80">
                This is a factor in the economy of a nation, and the
                administration takes the major choices.
              </p>
              <div>
                <a
                  href="#!"
                  className="bg-white dark:bg-slate-900 text-indigo-900 dark:text-white shadow-xl rounded py-3 px-8 text-xl mt-6 md:mt-12 inline-block "
                >
                  Order Now
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" flex justify-evenly items-center md:py-10 bg-slate-100">
              <img
                src="https://basshopbd.com/wp-content/uploads/2022/09/d25822560b58a13c05c54e98d042399b_1000x1000.png"
                alt="Mustard Oil"
                className="w-[500px] rounded-xl shadow-lg"
              />

              {/* Middle Section: Product Image and Key Benefits */}
              <div className=" w-[45%] max-w-4xl flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden mb-8">
                <div className="md:py-8 pl-10 ">
                  <p className="text-5xl font-bold text-yellow-500 mb-10">
                    দেশি সরিষার তেল
                  </p>
                  <p className="text-3xl font-bold text-yellow-800 mb-6">
                    100% Pure Mustard Oil
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
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
		  <div className=" flex justify-evenly items-center md:py-10 bg-slate-100">
              <img
                src="https://www.harniva.com/assets/backend/admin/plugins/source/hakkimizda/kalitelibal.png"
                alt="Mustard Oil"
                className="w-[500px] rounded-xl shadow-lg"
              />

              {/* Middle Section: Product Image and Key Benefits */}
              <div className=" w-[45%] max-w-4xl flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden mb-8">
                <div className="md:py-8 pl-10 ">
                  <p className="text-5xl font-bold text-yellow-500 mb-10">
				  Honey / মধু
                  </p>
                  <p className="text-3xl font-bold text-yellow-800 mb-6">
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
              </div>
        	</div>
          </SwiperSlide>

          <SwiperSlide>
		  <div className=" flex justify-evenly items-center md:py-10 bg-slate-100">
              <img
                src="https://media.e-valy.com/cms/products/images/f4b3265d-df5e-4835-add4-0cd2654235d3"
                alt="Ghee"
                className="w-[500px] rounded-xl shadow-lg"
              />

              {/* Middle Section: Product Image and Key Benefits */}
              <div className=" w-[45%] max-w-4xl flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden mb-8">
                <div className="md:py-8 pl-10 ">
                  <p className="text-5xl font-bold text-yellow-500 mb-10">
				  গাওয়া ঘি / Gawa Ghee
                  </p>
                  <p className="text-3xl font-bold text-yellow-800 mb-6">
                    100% Pure Gawa Ghee
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
              </div>
        	</div>
            {/* <img
              className="w-[400px]"
              src="https://i.ibb.co/CsNtTfM/Untitleddesign-86-removebg-preview.png"
              alt=""
            /> */}
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Product category in Home */}
      <section>
        <HomeCategory></HomeCategory>
      </section>
    </div>
  );
};

export default Home;
