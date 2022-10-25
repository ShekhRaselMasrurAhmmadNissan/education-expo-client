import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../../Components/Course/Course';

const AllCourses = () => {
	const courses = useLoaderData();
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
			{courses.map((course) => (
				<Course key={course.id} course={course} />
			))}
		</div>
	);
};

export default AllCourses;
