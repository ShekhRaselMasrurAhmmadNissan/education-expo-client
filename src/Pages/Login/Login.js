import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';

const Login = () => {
	return (
		<div>
			<div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl bg-gray-200 text-gray-800 mt-8">
				<h1 className="text-2xl font-bold text-center">Login</h1>
				<form
					novalidate=""
					action=""
					className="space-y-6 ng-untouched ng-pristine ng-valid"
				>
					<div className="space-y-1 text-sm">
						<label
							htmlFor="username"
							className="block text-gray-600"
						>
							Username
						</label>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Username"
							className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600"
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
						/>
						<div className="flex justify-end text-xs text-gray-600">
							<a rel="noopener noreferrer" href="#">
								Forgot Password?
							</a>
						</div>
					</div>
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
