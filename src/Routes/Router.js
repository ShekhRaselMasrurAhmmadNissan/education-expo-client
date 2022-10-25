import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'home', element: <Home /> },
		],
	},
]);

export default router;
