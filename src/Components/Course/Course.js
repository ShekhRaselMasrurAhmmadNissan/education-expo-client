import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
	const { id, name, duration, price, image, ratings, review } = course;
	return (
		<div>
			<div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800">
				<div className="space-y-4">
					<div className="space-y-2">
						<img
							src={image}
							alt=""
							className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
						/>
					</div>
					<div className="space-y-2 mb-2">
						<h3 className="text-2xl font-semibold text-blue-600">
							{name}
						</h3>
						<div className="leading-snug text-gray-600 text-lg lg:flex justify-between font-medium">
							<p>
								Duration:{' '}
								<span className="text-blue-700">
									{duration}
								</span>
							</p>
							<p>
								Price:{' '}
								<span className="text-blue-700">${price}</span>
							</p>
							<div className="flex justify-between">
								<p className="flex items-center gap-x-2">
									<FaStar className="text-yellow-500" />
									<span className="text-blue-700">
										{ratings}
									</span>
								</p>
								<p className="flex items-center gap-x-2 lg:ml-4">
									<FaEye />
									<span className="text-blue-700">
										{ratings}
									</span>
								</p>
							</div>
						</div>
					</div>
					<Link
						to={`course/${id}`}
						type="button"
						className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-600 text-gray-50"
					>
						View Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Course;
