import React from 'react';
import HomeCategory from './HomeCategory';


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
            <section className=" ezy__header11 light py-24 md:py-44 bg-white dark:bg-[#0b1727] text-indigo-900 dark:text-white relative  overflow-hidden  z-0">
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




		<HomeCategory></HomeCategory>
		
        </div>
    );
};

export default Home;