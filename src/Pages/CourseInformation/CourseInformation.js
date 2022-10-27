import React from 'react';
import { createRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import Pdf from 'react-to-pdf';

const ref = createRef();
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
		<div className="mr-4 relative pr-8 mt-8 lg:mt-0">
			<Pdf
				targetRef={ref}
				filename={`${courseDetails?.name}.pdf`}
				x={10}
				y={10}
				scale={0.7}
			>
				{({ toPdf }) => (
					<>
						<button
							className="text-lg font-medium px-3 py-2 rounded-md bg-blue-400  hidden lg:inline-block"
							onClick={toPdf}
						>
							Download
						</button>

						<button className="text-blue-600 absolute right-8">
							<FaFileDownload className="h-8 w-8" />
						</button>
					</>
				)}
			</Pdf>

			<div ref={ref} className="ml-8">
				<h1 className="text-2xl lg:text-4xl font-medium text-blue-500 mb-3 mr-8 lg:mr-0">
					{courseDetails?.name}
				</h1>
				<img
					src={courseDetails?.image}
					alt=""
					className="h-48 lg:h-96"
				/>
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
			</div>
			<Link
				to={`../checkout/${courseDetails.id}`}
				className="text-lg font-medium px-3 py-2 rounded-md bg-blue-400 text-white ml-8"
			>
				Get Premium Access
			</Link>
		</div>
	);
};

export default CourseInformation;
