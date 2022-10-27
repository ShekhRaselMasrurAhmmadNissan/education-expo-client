import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSun, FaMoon, FaUserAlt } from 'react-icons/fa';

import navbarLogo from '../../assets/navbarLogo.png';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLight, setIsLight] = useState(true);

	const { user, logout } = useContext(AuthContext);

	const handleLogout = () => {
		logout()
			.then(() => {
				toast.success('Successfully Logged out.');
			})
			.catch((error) => console.error(error));
	};

	return (
		<>
			<div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:shadow-lg md:px-24 lg:px-4 sticky bg-white top-0 z-50">
				<div className="relative flex items-center justify-between">
					<div className="flex items-center">
						<Link
							to="/"
							title="Education Expo"
							className="inline-flex items-center mr-8"
						>
							<img src={navbarLogo} alt="" className="" />
						</Link>
						<ul className="flex lg:text-xl items-center hidden space-x-8 lg:flex">
							<li>
								<NavLink
									to="home"
									title="Home"
									className={({ isActive }) =>
										isActive
											? 'font-medium tracking-wide transition-colors duration-200 text-blue-600 border-b-2 py-1 px-2 border-blue-700'
											: 'font-medium tracking-wide transition-colors duration-200 hover:text-blue-400'
									}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="courses"
									title="Courses"
									className={({ isActive }) =>
										isActive
											? 'font-medium tracking-wide transition-colors duration-200 text-blue-600 border-b-2 py-1 px-2 border-blue-700'
											: 'font-medium tracking-wide transition-colors duration-200 hover:text-blue-400'
									}
								>
									Courses
								</NavLink>
							</li>
							<li>
								<NavLink
									to="faq"
									title="FAQ"
									className={({ isActive }) =>
										isActive
											? 'font-medium tracking-wide transition-colors duration-200 text-blue-600 border-b-2 py-1 px-2 border-blue-700'
											: 'font-medium tracking-wide transition-colors duration-200 hover:text-blue-400'
									}
								>
									FAQ
								</NavLink>
							</li>
							<li>
								<NavLink
									to="blog"
									title="Blog"
									className={({ isActive }) =>
										isActive
											? 'font-medium tracking-wide transition-colors duration-200 text-blue-600 border-b-2 py-1 px-2 border-blue-700'
											: 'font-medium tracking-wide transition-colors duration-200 hover:text-blue-400'
									}
								>
									Blog
								</NavLink>
							</li>
						</ul>
					</div>
					<ul className="flex items-center hidden space-x-8 lg:flex">
						{user && user?.uid ? (
							<>
								<li className="cursor-pointer">
									{user?.photoURL ? (
										<img
											src={user.photoURL}
											alt=""
											className="h-12 w-12 rounded-full"
											title={user.displayName}
										/>
									) : (
										<FaUserAlt
											className="h-12 w-12 rounded-full"
											title={user.displayName}
										/>
									)}
								</li>
								<li>
									<button
										className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-blue-500 transition duration-200 rounded shadow-md text-lg"
										aria-label="Log Out"
										title="Sign up"
										onClick={handleLogout}
									>
										Log Out
									</button>
								</li>
							</>
						) : (
							<>
								<li>
									<Link
										to="/login"
										title="Sign in"
										className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-blue-500 transition duration-200 rounded shadow-md text-lg"
									>
										Sign in
									</Link>
								</li>
								<li>
									<Link
										to="/register"
										className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-blue-500 transition duration-200 rounded shadow-md text-lg"
										aria-label="Sign up"
										title="Sign up"
									>
										Sign up
									</Link>
								</li>
							</>
						)}
						<li>
							<button
								className="text-3xl"
								onClick={() => {
									setIsLight(!isLight);
								}}
							>
								{isLight ? (
									<>
										<FaSun />
										<span className="hidden lg:inline text-sm">
											Light
										</span>
									</>
								) : (
									<>
										<FaMoon />
										<span className="hidden lg:inline text-sm">
											Dark
										</span>
									</>
								)}
							</button>
						</li>
					</ul>
					<button
						className="text-3xl lg:hidden"
						onClick={() => {
							setIsLight(!isLight);
						}}
					>
						{isLight ? (
							<>
								<FaSun />
								<span className="hidden lg:inline text-sm">
									Light
								</span>
							</>
						) : (
							<>
								<FaMoon />
								<span className="hidden lg:inline text-sm">
									Dark
								</span>
							</>
						)}
					</button>
					<div className="lg:hidden">
						<button
							aria-label="Open Menu"
							title="Open Menu"
							className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
							onClick={() => setIsMenuOpen(true)}
						>
							<svg
								className="w-5 text-gray-600"
								viewBox="0 0 24 24"
							>
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
						{isMenuOpen && (
							<div className="absolute top-0 left-0 w-full">
								<div className="p-5 bg-white border rounded shadow-sm">
									<div className="flex items-center justify-between mb-4relative">
										<div className="absolute top-4 right-10">
											<button
												aria-label="Close Menu"
												title="Close Menu"
												className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
												onClick={() =>
													setIsMenuOpen(false)
												}
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
									<nav className="mt-6">
										<ul className="space-y-4">
											<li>
												<Link
													to="home"
													aria-label="Home"
													title="Home"
													className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
													onClick={() => {
														setIsMenuOpen(false);
													}}
												>
													Home
												</Link>
											</li>
											<li>
												<Link
													to="courses"
													aria-label="Courses"
													title="Courses"
													className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
													onClick={() => {
														setIsMenuOpen(false);
													}}
												>
													Courses
												</Link>
											</li>
											<li>
												<Link
													to="faq"
													aria-label="FAQ"
													title="FAQ"
													className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
													onClick={() => {
														setIsMenuOpen(false);
													}}
												>
													FAQ
												</Link>
											</li>
											<li>
												<Link
													to="blog"
													aria-label="Blog"
													title="Blog"
													className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
													onClick={() => {
														setIsMenuOpen(false);
													}}
												>
													Blog
												</Link>
											</li>
											{user && user?.uid ? (
												<>
													<li
														className="flex items-center gap-x-2"
														onClick={() => {
															setIsMenuOpen(
																false
															);
														}}
													>
														{user?.photoURL ? (
															<img
																src={
																	user.photoURL
																}
																alt=""
																className="h-8 w-8 rounded-full"
																title={
																	user.displayName
																}
															/>
														) : (
															<FaUserAlt
																className="h-8 w-8 rounded-full"
																title={
																	user.displayName
																}
															/>
														)}
														{user?.displayName}
													</li>
													<li
														onClick={() => {
															setIsMenuOpen(
																false
															);
														}}
													>
														<button
															className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-blue-500 transition duration-200 rounded shadow-md text-lg"
															aria-label="Log Out"
															title="Sign up"
															onClick={
																handleLogout
															}
														>
															Log Out
														</button>
													</li>
												</>
											) : (
												<>
													<li
														onClick={() => {
															setIsMenuOpen(
																false
															);
														}}
													>
														<Link
															to="login"
															aria-label="Sign in"
															title="Sign in"
															className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
														>
															Sign in
														</Link>
													</li>
													<li
														onClick={() => {
															setIsMenuOpen(
																false
															);
														}}
													>
														<Link
															to="register"
															className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
															aria-label="Sign up"
															title="Sign up"
														>
															Sign up
														</Link>
													</li>
												</>
											)}
										</ul>
									</nav>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
