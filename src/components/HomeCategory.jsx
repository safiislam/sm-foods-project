import React from "react";
import { Link } from "react-router-dom";



const HomeCategory = () => {
  return (
    <section className=" py-14 md:py-20 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
      {/* <div className="absolute top-0 left-0 rotate">
				<img
				className="w-[220px] opacity-25"
					src="https://c8.alamy.com/comp/2BX5KEN/pouring-oil-for-cooking-in-a-bottle-isolated-on-white-background-2BX5KEN.jpg"
					alt=""
				/>
			</div> */}

      <div className="container px-4 mx-auto relative">
        <p className="text-[32px] md:text-5xl leading-tight font-bold text-center mb-8 ">
          Top Category
        </p>

        <p className=' md:w-[50%] w-[90%] mx-auto mb-20 text-center text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor suscipit nemo voluptates quas adipisci accusantium facere delectus vero dignissimos doloribus.</p>

        <div className="relative ">
          <div className="grid grid-cols-12 md:gap-x-16 ">
			{/* category */}
            <div className=" col-span-12 sm:col-span-6 md:col-span-4 my-12">
              <Link to="/sorishaOil"
                
                className=" bg-white dark:bg-slate-800 shadow-xl relative flex items-end justify-center min-h-[160px] rounded-t-[90px] rounded-b-[15px] border dark:border-slate-700 "
              > 
                <div className=" absolute -top-[75px] left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 shadow border dark:border-slate-700 rounded-full flex justify-center items-center h-40 w-40">
                  <img src="https://greenmartbd.net/storage/upload/product/phT3W2MDVDODfNv1lZ62K8qedUEAIHbtD5ouqvM5.png" alt="tel ar picture" className="w-20" />
                </div>
                <h4 className="text-2xl font-medium mb-5">MUSTARD OIL / সরিষার তেল</h4>
              </Link>
            </div>

			<div className=" col-span-12 sm:col-span-6 md:col-span-4 my-12">
              <Link to="/honey"
                href="#!"
                className="bg-white dark:bg-slate-800 shadow-xl relative flex items-end justify-center min-h-[160px] rounded-t-[90px] rounded-b-[15px] border dark:border-slate-700 "
              >
                <div className=" absolute -top-[75px] left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 shadow border dark:border-slate-700 rounded-full flex justify-center items-center h-40 w-40">
                  <img src="https://www.harniva.com/assets/backend/admin/plugins/source/hakkimizda/kalitelibal.png" alt="" className="w-20" />
                </div>
                <h4 className="text-2xl font-medium mb-5 ">HONEY / মধু</h4>
              </Link>
            </div>

			<div className=" col-span-12 sm:col-span-6 md:col-span-4 my-12">
              <Link to="/ghee"
                href="#!"
                className="bg-white dark:bg-slate-800 shadow-xl relative flex items-end justify-center min-h-[160px] rounded-t-[90px] rounded-b-[15px] border dark:border-slate-700 "
              >
                <div className=" absolute -top-[75px] left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 shadow border dark:border-slate-700 rounded-full flex justify-center items-center h-40 w-40">
                  <img src="https://media.e-valy.com/cms/products/images/f4b3265d-df5e-4835-add4-0cd2654235d3" alt="" className="w-20" />
                </div>
                <h4 className="text-2xl font-medium mb-5">GHEE / ঘি</h4>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCategory;
