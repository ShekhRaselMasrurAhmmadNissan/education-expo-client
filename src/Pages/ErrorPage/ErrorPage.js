import React from 'react';
import Lottie from 'lottie-react';
import ErrorJSON from '../../assets/ErrorJSON.json';
import { Link, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
	const navigate = useNavigate();
	const handleGoBack = () => {
		navigate(-1);
	};
	return (
		<div>
			<Lottie
				animationData={ErrorJSON}
				className="h-[450px] w-[500px] mt-8 mx-auto"
			></Lottie>
			<h1 className="text-6xl font-bold text-red-700 text-center">
				Sorry, Page Not Found.
			</h1>
			<div className="flex items-center justify-center mt-8">
				<Link
					to="/home"
					className="mr-8 text-xl bg-blue-700 px-3 py-1 font-medium text-white rounded-md hover:scale-110 duration-300"
				>
					Back to Home
				</Link>
				<button
					className="text-xl bg-blue-700 px-3 py-1 font-medium text-white rounded-md hover:scale-110 duration-300"
					onClick={handleGoBack}
				>
					Go Back
				</button>
			</div>
		</div>
	);
};

export default ErrorPage;
