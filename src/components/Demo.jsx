// // Show from the top of the page
// import { useLocation } from "react-router-dom";
// import { resolveConfig } from "vite";
// const {pathname} = useLocation();

//   useEffect(() => {
//     window.scroll(0,0);
//   }, [pathname]);


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
              
            </div>
          </SwiperSlide>

          <SwiperSlide>
            Slid 1
          </SwiperSlide>

          <SwiperSlide>
            Slide 2
          </SwiperSlide>

          <SwiperSlide>
            Slide 4
          </SwiperSlide>
   </Swiper>