import React from 'react';
import { FcOk } from "react-icons/fc";

const About = () => {
  return (
    <div className='relative '>
      <div className='bg-orange-100 rounded-b-[780px] pt-4 md:pt-0'>
      <div className=' lg:mt-5 md:w-[85%] mx-auto md:pb-[350px] pb-[450px] md:mb-[450px] mb-[300px]'>
      <div className=' px-3 md:px-0 md:flex gap-6 items-center justify-between'>
      <div className=' md:w-[50%]'>
        <p className='md:text-5xl text-3xl mt-10 md:mt-0 font-semibold mb-3'>OUR STORY</p>
        <p className='md:text-lg font-semibold mb-6 md:mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus aspernatur praesentium non doloremque impedit nihil officia qui ducimus dolorum laudantium, cupiditate possimus beatae incidunt accusamus quia! Fugit, commodi cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, autem!</p>
      </div>

      <img src="https://media.istockphoto.com/id/492025669/photo/group-of-business-people-holding-placards-forming-about-us.jpg?s=612x612&w=0&k=20&c=lgZYkFUmIIPgmjE9m5nHI_6PMJ-6M38lkPfiHpYZmzs=" alt="Our Story" />
      </div>

      <div className='mt-10 flex flex-col-reverse md:flex-row gap-10 items-center justify-between px-3 md:px-0'>
      <img className=' md:w-[50%]' src="https://www.nicepng.com/png/detail/251-2515621_our-mission-mission-png.png" alt="Our Story" />

      <div className=' md:w-[50%]'>
        <p className='md:text-5xl text-3xl font-semibold mb-3'>OUR MISSION</p>
        <p className='md:text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus aspernatur praesentium non doloremque impedit nihil officia qui ducimus dolorum laudantium, cupiditate possimus beatae incidunt accusamus quia! Fugit, commodi cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, autem!</p>
      </div>
      </div>

      </div>
      </div>

{/* Our values */}
      <div className=' w-[80%] md:w-[30%] bg-slate-50 absolute top-[75%] md:left-[35%] left-[10%] px-8 py-10 rounded-lg shadow-xl'>
          <p className='md:text-5xl text-3xl mb-9 text-center font-semibold'>Our Values</p>

          <div>
            <p className='flex  gap-3 md:text-lg font-semibold md:mb-12 mb-5'><FcOk size={40}className='' />  We ensure that all our products meet the highest standards of quality and purity.</p>
            <p className='flex  gap-3 md:text-lg font-semibold md:mb-12 mb-5'><FcOk size={40} className='text-3xl' />  We are committed to environmentally-friendly practices and sustainable sourcing.</p>
            <p className='flex  gap-3 md:text-lg font-semibold md:mb-12 mb-5'><FcOk size={60}className='text-3xl' />  Customer satisfaction is our priority. We strive to offer excellent customer service and a seamless shopping experience.</p>
            <p className='flex  gap-3 md:text-lg font-semibold'><FcOk size={35}className='text-3xl' />  We believe in being open and honest about our products and practices.</p>
          </div>
      </div>
    </div>
  );
};

export default About;