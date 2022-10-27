import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Checkout = () => {
	const [courseDetails, setCourseDetails] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const loadCourseDetails = async () => {
			try {
				const res = await fetch(
					`https://b610-lerning-platform-server-side-shekhraselmasrurahmmadnissan.vercel.app/course/${id}`
				);
				const data = await res.json();
				console.log(data);
				setCourseDetails(data);
			} catch (error) {
				console.error(error);
			}
		};
		loadCourseDetails();
	}, [id]);

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const firstName = form.firstName.value;
		const lastName = form.lastName.value;

		form.reset();

		Swal.fire(
			`Thank You ${firstName} ${lastName}`,
			`for purchasing the ${courseDetails?.name} course`,
			'success'
		);
	};
	return (
		<div className="mb-10 lg:mb-0 mx-2 lg:mx-0">
			<h1 className="text-2xl lg:text-4xl font-medium mb-6">
				You have decided to enroll in{' '}
				<span className="text-blue-600">{courseDetails?.name}</span>{' '}
				course.
			</h1>
			<p className="text-lg">
				Please fill up the form below and Click{' '}
				<kbd className="bg-gray-300 p-2 rounded-xl">Accept</kbd> to
				purchase the course.
			</p>
			<form
				className=" mt-4 mr-4 px-8 py-4 border-2 rounded-lg"
				onSubmit={handleSubmit}
			>
				<div className="grid grid-cols-6 gap-4">
					<div className="col-span-full sm:col-span-3">
						<label
							htmlFor="firstName"
							className="text-md font-medium"
						>
							First name
						</label>
						<input
							id="firstName"
							type="text"
							placeholder="First Name"
							className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 border-gray-300 text-gray-900 outline-none px-3 py-1"
							required
						/>
					</div>
					<div className="col-span-full sm:col-span-3">
						<label
							htmlFor="lastName"
							className="text-md font-medium"
						>
							Last name
						</label>
						<input
							id="lastName"
							type="text"
							placeholder="Last name"
							className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 border-gray-300 text-gray-900 outline-none px-3 py-1"
							required
						/>
					</div>
					<div className="col-span-full sm:col-span-3">
						<label htmlFor="email" className="text-md font-medium">
							Email
						</label>
						<input
							id="email"
							type="email"
							placeholder="Email"
							className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 border-gray-300 text-gray-900 outline-none px-3 py-1"
							required
						/>
					</div>
				</div>

				<button
					type="submit"
					className="text-white text-xl font-medium px-2 py-1 rounded-lg bg-blue-600 mt-6"
				>
					Accept the Course
				</button>
			</form>
		</div>
	);
};

export default Checkout;
