import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ courses }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	return (
		<div className="ml-6 lg:sticky lg:top-[165px] bg-gray-300 p-2 lg:p-8 rounded-xl mr-8 flex justify-between lg:flex-col">
			<h1 className="lg:text-center text-xl lg:text-4xl font-medium text-blue-400 mb-6">
				<Link to="/courses">All Courses</Link>
			</h1>
			<div className="ml-8 hidden lg:block">
				{courses.map((course) => (
					<li
						key={course.id}
						className="list-decimal mb-3 text-lg font-medium hover:text-blue-600"
					>
						<Link to={`course/${course.id}`}>{course.name}</Link>
					</li>
				))}
			</div>
			<div className="lg:hidden">
				<button
					aria-label="Open Menu"
					title="Open Menu"
					className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
					onClick={() => setIsSidebarOpen(true)}
				>
					<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
						/>
						<path
							fill="currentColor"
							d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
						/>
						<path
							fill="currentColor"
							d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
						/>
					</svg>
				</button>
				{isSidebarOpen && (
					<div className="bg-gray-200 absolute top-10 left-0 w-full mt-[150px] z-10">
						<div className="p-5 border rounded shadow-sm">
							<div className="flex items-center justify-between mb-4 relative">
								<div className="absolute right-10 top-10">
									<button
										aria-label="Close Menu"
										title="Close Menu"
										className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
										onClick={() => setIsSidebarOpen(false)}
									>
										<svg
											className="w-5 text-gray-600"
											viewBox="0 0 24 24"
										>
											<path
												fill="currentColor"
												d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
											/>
										</svg>
									</button>
								</div>
							</div>
							<nav className="mt-16">
								<ul className="space-y-4">
									{courses.map((course) => (
										<li
											key={course.id}
											className="list-decimal mb-3 text-lg font-medium hover:text-blue-600"
										>
											<Link
												to={`course/${course.id}`}
												onClick={() =>
													setIsSidebarOpen(false)
												}
											>
												{course.name}
											</Link>
										</li>
									))}
								</ul>
							</nav>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Sidebar;
