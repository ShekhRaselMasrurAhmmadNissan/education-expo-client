import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ courses }) => {
	return (
		<div className="ml-6 lg:sticky lg:top-[165px] bg-gray-300 p-8 rounded-xl mr-8">
			<h1 className="text-center text-4xl font-medium text-blue-400 mb-6">
				<Link to="/courses">All Courses</Link>
			</h1>
			<div className="ml-8">
				{courses.map((course) => (
					<li
						key={course.id}
						className="list-decimal mb-3 text-lg font-medium hover:text-blue-600"
					>
						<Link to={`course/${course.id}`}>{course.name}</Link>
					</li>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
