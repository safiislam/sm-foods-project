import React from 'react';


const HeroHeaderShape = () => (
	<svg
		className="absolute right-0 top-0 text-gray-50 dark:text-slate-600 dark:text-opacity-30 -z-10"
		width="686"
		height="630"
		viewBox="0 0 686 630"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<ellipse
			cx="403.5"
			cy="231.894"
			rx="403.5"
			ry="397.98"
			fill="currentColor"
		/>
	</svg>
);

const Home = () => {
    return (
        <div>
            <section className="ezy__header11 light py-24 md:py-44 bg-white dark:bg-[#0b1727] text-indigo-900 dark:text-white relative  overflow-hidden  z-0">
			<HeroHeaderShape />

			<div className="container px-4 mx-auto relative">
				<div className="grid grid-cols-12 gap-6">
					<div className="col-span-12 lg:col-span-6 xl:col-span-5 xl:pr-12 text-center lg:text-start">
						<div className="flex flex-col justify-center h-full">
							<h2 className="text-3xl font-bold md:text-[70px] leading-none mb-6">
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
									Order Now{" "}
									{/* <FontAwesomeIcon icon={faArrowRight} className="ml-2" /> */}
								</a>
							</div>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-6 xl:col-span-5 text-center lg:text-start">
						<img
							src="https://5.imimg.com/data5/DA/NK/MY-17465016/mustard-seed-oil-500x500.jpg"
							alt=""
							className="rounded max-w-full h-full mt-4"
						/>
					</div>
				</div>
			</div>
		</section>




		{/* section for every product */}
        <div className=' bg-gray-100 lg:flex justify-evenly py-8 text-center mb-1'>
            <div className=' lg:flex items-center gap-x-4 py-10 px-3 '>
                <div className='w-[100px] mx-auto lg:mx-0 mb-3 lg:mb-0'>
                    <img className='rounded-full w-full' src="https://img.freepik.com/free-vector/cash-payment-concept-illustration_114360-3320.jpg?t=st=1717058911~exp=1717062511~hmac=2dd39ba50f2d6047a1de116b053e34a4a834e3d519a859aab8c25f98d6057101&w=826" alt="Paymant picture" />
                </div>
                <div>
                    <p className='font-semibold mb-1'>নিরাপদ পেমেন্ট</p>
                    <p>বিভিন্ন পেমেন্ট পদ্ধতি থেকে বেছে নিন</p>
                </div>
            </div>

            <div className=' lg:flex items-center gap-x-4 py-10 px-3'>
                <div className='w-[100px]  mx-auto lg:mx-0 mb-3 lg:mb-0'>
                    <img className='rounded-full w-full' src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?t=st=1717062905~exp=1717066505~hmac=4486ebf5858860e3edefa1a839d12bb164b03637f97b9b509059f6450833e475&w=826" alt="Paymant picture" />
                </div>
                <div>
                    <p className='font-semibold mb-1'>ডেলিভারি</p>
                    <p>৩-৫ দিনের মধ্যে আপনার পণ্য পৌছে যাবে</p>
                </div>
            </div>

            <div className=' lg:flex items-center gap-x-4 py-10 px-3'>
                <div className='w-[100px] mx-auto lg:mx-0 mb-3 lg:mb-0'>
                    <img className='rounded-full w-full' src="https://img.freepik.com/premium-vector/100-organic-food-product-sticker-certified-label_236275-45.jpg?ga=GA1.1.377660834.1717058610&semt=sph" alt="Paymant picture" />
                </div>
                <div>
                    <p className='font-semibold mb-1 '>১০০% ন্যাচারাল</p>
                    <p>প্রাকৃতিক উপাদান ব্যবহার করতে আমরা প্রতিশ্রুতিবদ্ধ</p>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Home;