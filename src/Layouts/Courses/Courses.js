import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Courses = () => {
	const courses = useLoaderData();
	console.log(courses);
	return (
		<div className="grid grid-cols-1 lg:grid-cols-7 mt-8">
			<div className="lg:col-span-2">
				<Sidebar courses={courses} />
			</div>
			<div className="lg:col-span-5">
				<Outlet />
			</div>
		</div>
	);
};

export default Courses;
