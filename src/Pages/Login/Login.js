import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
	const [error, setError] = useState('');
	const { login } = useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		login(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				form.reset();
				setError('');
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.error(error);
				setError(error.message);
			});
	};

	return (
		<div>
			<div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl bg-gray-200 text-gray-800 mt-8">
				<h1 className="text-2xl font-bold text-center">Login</h1>
				<form
					onSubmit={handleSubmit}
					action=""
					className="space-y-6 ng-untouched ng-pristine ng-valid"
				>
					<div className="space-y-1 text-sm">
						<label htmlFor="email" className="block text-gray-600">
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email"
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
						<div className="flex justify-end text-xs text-gray-600">
							<a rel="noopener noreferrer" href="#">
								Forgot Password?
							</a>
						</div>
					</div>

					{error && (
						<p className="text-md font-medium text-red-500">
							{error}
						</p>
					)}

					<button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-blue-600">
						Sign in
					</button>
				</form>
				<SocialMedia />
				<p className="text-xs text-center sm:px-6 text-gray-600">
					Don't have an account?
					<Link to="/register" className="underline text-gray-800">
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
