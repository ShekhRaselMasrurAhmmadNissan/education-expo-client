import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Private = ({ children }) => {
	const { user, loading } = useContext(AuthContext);

	const location = useLocation();

	if (loading) {
		return (
			<CircleLoader
				color="#0cc5a0"
				loading
				size={100}
				speedMultiplier={1}
				className="mx-auto lg:mt-40"
			/>
		);
	}

	if (!user) {
		return (
			<Navigate to="/login" state={{ from: location }} replace></Navigate>
		);
	}

	return children;
};

export default Private;
