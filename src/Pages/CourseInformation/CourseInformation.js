import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const CourseInformation = () => {
	const [courseDetails, setCourseDetails] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const loadCourseDetails = async () => {
			try {
				const res = await fetch(`http://localhost:5000/course/${id}`);
				const data = await res.json();
				console.log(data);
				setCourseDetails(data);
			} catch (error) {
				console.error(error);
			}
		};
		loadCourseDetails();
	}, [id]);

	return (
		<div className="mr-4 relative pr-8">
			<button className="text-lg font-medium px-3 py-2 rounded-md bg-blue-400 text-white absolute right-8">
				Download
			</button>
			<div>
				<h1 className="text-4xl font-medium text-blue-500 mb-3">
					{courseDetails?.name}
				</h1>
				<img src={courseDetails?.image} alt="" className="h-96" />
				<h2 className="text-2xl font-medium mt-2">
					Instructor:{' '}
					<span className="text-blue-600">
						{courseDetails?.instructor}
					</span>
				</h2>
				<div className="md:flex md:justify-between md:mr-40 mt-2 text-lg font-medium text-blue-700">
					<p>Duration: {courseDetails?.duration}</p>
					<p>Price: ${courseDetails?.price}</p>
				</div>

				<p className="text-lg font-medium mt-2 mb-4">
					{courseDetails?.details}
				</p>

				<Link
					to={`/checkout/${courseDetails.id}`}
					className="text-lg font-medium px-3 py-2 rounded-md bg-blue-400 text-white"
				>
					Get Premium Access
				</Link>
			</div>
		</div>
	);
};

export default CourseInformation;
