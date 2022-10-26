import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
	const [error, setError] = useState('');

	const navigate = useNavigate();

	const { createUser, updateUserProfile } = useContext(AuthContext);

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const userName = form.userName.value;
		const photoURL = form.photoURL.value;
		const email = form.email.value;
		const password = form.password.value;

		createUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				form.reset();
				setError('');
				navigate('/');
				handleUpdateProfile(userName, photoURL);
			})
			.catch((error) => {
				console.error(error);
				setError(error.message);
			});
	};

	const handleUpdateProfile = (userName, photoURL) => {
		const profile = { displayName: userName, photoURL: photoURL };
		updateUserProfile(profile)
			.then(() => {})
			.catch((error) => {
				console.error(error);
				setError(error.message);
			});
	};

	return (
		<div>
			<div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl bg-gray-200 text-gray-800 mt-8">
				<h1 className="text-2xl font-bold text-center">Sign UP</h1>
				<form
					action=""
					className="space-y-6 ng-untouched ng-pristine ng-valid"
					onSubmit={handleSubmit}
				>
					<div className="space-y-1 text-sm">
						<label
							htmlFor="userName"
							className="block text-gray-600"
						>
							Full Name
						</label>
						<input
							type="text"
							name="userName"
							id="userName"
							placeholder="Full Name"
							className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600"
							required
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label
							htmlFor="photoURL"
							className="block text-gray-600"
						>
							Picture
						</label>
						<input
							type="text"
							name="photoURL"
							id="photoURL"
							placeholder="Photo URL"
							className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600"
							required
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="email" className="block text-gray-600">
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Username"
							className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600"
							required
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label
							htmlFor="password"
							className="block text-gray-600"
						>
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600"
							required
						/>
					</div>

					{error && (
						<p className="text-md font-medium text-red-500">
							{error}
						</p>
					)}
					<button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-blue-600">
						Sign UP
					</button>
				</form>
				<SocialMedia />
				<p className="text-xs text-center sm:px-6 text-gray-600">
					Already have an account?
					<Link to="/login" className="underline text-gray-800">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
