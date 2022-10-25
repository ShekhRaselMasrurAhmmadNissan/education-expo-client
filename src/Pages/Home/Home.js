import React from 'react';
import Lottie from 'lottie-react';

import CourseIntro from '../../assets/CourseIntro.json';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<section className="bg-gray-100 text-gray-800">
				<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
					<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
						<h1 className="text-5xl font-bold leading-none sm:text-6xl">
							<span className="text-blue-600">
								Education Expo
							</span>
							<br />
							Learning Has No Limit
						</h1>
						<p className="mt-6 mb-8 text-lg sm:mb-12">
							<span className="text-blue-600">
								Education expo
							</span>{' '}
							is a online course platform from where students can
							choose their favorite courses to enroll.
							<br className="hidden md:inline lg:hidden" />
							They can also contact us through mail and other
							information to suggest us their preferences and we
							will try to fullfil their demand.
						</p>
						<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
							<Link
								to="/courses"
								className="px-8 py-3 text-lg font-semibold rounded bg-blue-600 text-gray-50"
							>
								Get Started
							</Link>
							<Link
								to="/faq"
								className="px-8 py-3 text-lg font-semibold border rounded border-gray-800"
							>
								Learn More
							</Link>
						</div>
					</div>
					<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
						<Lottie animationData={CourseIntro}></Lottie>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
