// // Show from the top of the page
// import { useLocation } from "react-router-dom";
// import { resolveConfig } from "vite";
// const {pathname} = useLocation();

//   useEffect(() => {
//     window.scroll(0,0);
//   }, [pathname]);



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { Pagination, Autoplay } from 'swiper/modules';

const HomeCustomerReview = () => {
    return (
        <div className=' md:w-[85%] mx-auto mb-20'>
            <p className='text-5xl font-semibold mb-12 text-center'>Our Happy Customers</p>
          <Swiper
        slidesPerView={2}
        spaceBetween={80}
        loop={true}
        //   centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className=" bg-slate-50 rounded-xl shadow-xl mb-16 hover:-translate-y-1 h-full duration-300 px-6 py-4">
            <div className="mt-4">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                        <div className="mr-2">
                            
                            <img className="max-w-full h-auto rounded-full border" width="47" src="https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg" alt="" />
                        </div>
                        <div>
                            <h5 className="text-xl break-all font-medium">Elon Musk </h5>
                        </div>
                    </div>
                    <div className='flex gap-x-2 text-2xl text-yellow-400'>
                    <FaStar  />
                    <FaStar  />
                    <FaStar  />
                    <FaStar  />
                    <FaRegStarHalfStroke/>
                    </div>
                </div>
                <p className="leading-[1.8] opacity-80 mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique necessitatibus est deserunt laboriosam soluta unde corrupti tempora praesentium. Minus voluptatem, ducimus dolor ab repudiandae necessitatibus enim! Quasi nulla aliquam sunt.</p>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className=" bg-slate-100 rounded-xl shadow-xl mb-16 hover:-translate-y-1 h-full duration-300 px-6 py-4">
            <div className="mt-4">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                        <div className="mr-2">
                            
                            <img className="max-w-full h-auto rounded-full border" width="47" src="https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg" alt="" />
                        </div>
                        <div>
                            <h5 className="text-xl break-all font-medium">Kim Jon Wwn </h5>
                        </div>
                    </div>
                    <div className='flex gap-x-2 text-2xl text-yellow-400'>
                    <FaStar  />
                    <FaStar  />
                    <FaStar  />
                    <FaStar  />
                    <FaRegStarHalfStroke/>
                    </div>
                </div>
                <p className="leading-[1.8] opacity-80 mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique necessitatibus est deserunt laboriosam soluta unde corrupti tempora praesentium. Minus voluptatem, ducimus dolor ab repudiandae necessitatibus enim! Quasi nulla aliquam sunt.</p>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
                <div>
                    <p className=' py-9 px-3 rounded-lg text-lg text-center bg-slate-100 shadow-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero similique molestiae laborum voluptates explicabo vel?</p>
                </div>
                <img className="w-[80px] rounded-full" src="" alt="" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
                <div>
                    <p className=' py-9 px-3 rounded-lg text-lg text-center bg-slate-100 shadow-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero similique molestiae laborum voluptates explicabo vel?</p>
                </div>
                <img className="w-[80px] rounded-full" src="" alt="" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
                <div>
                    <p className=' py-9 px-3 rounded-lg text-lg text-center bg-slate-100 shadow-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero similique molestiae laborum voluptates explicabo vel?</p>
                </div>
                <img className="w-[80px] rounded-full" src="" alt="" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
                <div>
                    <p className=' py-9 px-3 rounded-lg text-lg text-center bg-slate-100 shadow-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero similique molestiae laborum voluptates explicabo vel?</p>
                </div>
                <img className="w-[80px] rounded-full" src="" alt="" />
            </div>
        </SwiperSlide>

      </Swiper>
        </div>
    );
};

export default HomeCustomerReview;