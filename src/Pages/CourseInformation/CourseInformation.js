import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

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
		<div className="mr-4">
			<div className="flex justify-between">
				<h1 className="text-4xl font-medium text-blue-500">
					{courseDetails?.name}
				</h1>
				<button className="text-lg font-medium px-3 py-2 rounded-md bg-blue-400 text-white">
					Download
				</button>
			</div>
		</div>
	);
};

export default CourseInformation;
