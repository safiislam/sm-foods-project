
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
            <p className='md:text-5xl text-3xl font-semibold md:mb-10 mb-6 text-center'>Our Happy Customers</p>
            <p className='md:w-[60%] w-[90%] mx-auto font-semibold mb-16 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor suscipit nemo voluptates quas adipisci accusantium facere delectus vero dignissimos doloribus.</p>
          <Swiper
        slidesPerView={2}
        spaceBetween={80}
        loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
            0: {  // when window width is >= 0px
                slidesPerView: 1,
                spaceBetween: 20
            },
            640: {  // when window width is >= 640px
                slidesPerView: 2,
                spaceBetween: 40
            },
            768: {  // when window width is >= 768px
                slidesPerView: 2,
                spaceBetween: 80
            }
        }}
      >
        <SwiperSlide>
        <div className="w-[90%] mx-auto md:w-full md:mx-0 bg-zinc-100 rounded-xl shadow-xl mb-16 hover:-translate-y-1 h-full duration-300 px-6 py-4">
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
                    <div className='flex gap-x-2 md:text-2xl text-yellow-400'>
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
        <div className=" w-[90%] mx-auto md:w-full md:mx-0 bg-zinc-100 rounded-xl shadow-xl mb-16 hover:-translate-y-1 h-full duration-300 px-6 py-4">
            <div className="mt-4">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                        <div className="mr-2">
                            
                            <img className="max-w-full h-[50px] rounded-full border" width="47" src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2016_19/1534611/160512-kim-jong-un-mn-1120.JPG" alt="" />
                        </div>
                        <div>
                            <h5 className="text-xl break-all font-medium">Kim jon un</h5>
                        </div>
                    </div>
                    <div className='flex gap-x-2 md:text-2xl text-yellow-400'>
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
        <div className=" w-[90%] mx-auto md:w-full md:mx-0 bg-zinc-100 rounded-xl shadow-xl mb-16 hover:-translate-y-1 h-full duration-300 px-6 py-4">
            <div className="mt-4">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                        <div className="mr-2">
                            
                            <img className="max-w-full h-[50px] rounded-full border" width="47" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjlxr0kGZUyK3Gc8Wz4Ew2Oslvs7uFO2eqoys0dZBFM5Z7uTbsJkY-9zHpoZIybY4oBw&usqp=CAU" alt="" />
                        </div>
                        <div>
                            <h5 className="text-xl break-all font-medium">Papon Da</h5>
                        </div>
                    </div>
                    <div className='flex gap-x-2 md:text-2xl text-yellow-400'>
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
        <div className=" w-[90%] mx-auto md:w-full md:mx-0 bg-zinc-100 rounded-xl shadow-xl mb-16 hover:-translate-y-1 h-full duration-300 px-6 py-4">
            <div className="mt-4">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                        <div className="mr-2">
                            
                            <img className="max-w-full h-[50px] rounded-full border" width="47" src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/323100/323155.png" alt="" />
                        </div>
                        <div>
                            <h5 className="text-xl break-all font-medium">Lord Shanto</h5>
                        </div>
                    </div>
                    <div className='flex gap-x-2 md:text-2xl text-yellow-400'>
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
        <div className=" w-[90%] mx-auto md:w-full md:mx-0 bg-zinc-100 rounded-xl shadow-xl mb-16 hover:-translate-y-1 h-full duration-300 px-6 py-4">
            <div className="mt-4">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                        <div className="mr-2">
                            
                            <img className="max-w-full h-[50px] rounded-full border" width="47" src="https://i.pinimg.com/736x/1c/32/87/1c328761cabc0700ea58ef00a35845d3.jpg" alt="" />
                        </div>
                        <div>
                            <h5 className="text-xl break-all font-medium">Katrin Watson</h5>
                        </div>
                    </div>
                    <div className='flex gap-x-2 md:text-2xl text-yellow-400'>
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
        <div className=" w-[90%] mx-auto md:w-full md:mx-0 bg-zinc-100 rounded-xl shadow-xl mb-16 hover:-translate-y-1 h-full duration-300 px-6 py-4">
            <div className="mt-4">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                        <div className="mr-2">
                            
                            <img className="max-w-full h-[50px] rounded-full border" width="47" src="https://lh3.googleusercontent.com/proxy/fDzBMad_F6MuY0oZc3RGlZa_Ull7ThFGRavtflCFLeqB2Rz7oE9hwd-1eN7hKg74YhIkOTRJzrPCCnQAgj8Jy6ROhl-K7sau" alt="" />
                        </div>
                        <div>
                            <h5 className="text-xl break-all font-medium">Alisha Mandi</h5>
                        </div>
                    </div>
                    <div className='flex gap-x-2 md:text-2xl text-yellow-400'>
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

      </Swiper>
        </div>
    );
};

export default HomeCustomerReview;