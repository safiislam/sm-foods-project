import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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
        //   autoplay={{
        //     delay: 3500,
        //     disableOnInteraction: false,
        //   }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div>
                <div>
                    <p className='mb-16 py-9 px-3 rounded-lg text-lg text-center bg-slate-100 shadow-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero similique molestiae laborum voluptates explicabo vel?</p>
                </div>
                <img className="w-[100px] h-[100px] rounded-full" src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=" alt="" />
                <p>Kim Jon</p>
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