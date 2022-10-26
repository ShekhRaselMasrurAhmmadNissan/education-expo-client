import { createBrowserRouter } from 'react-router-dom';
import Courses from '../Layouts/Courses/Courses';
import Main from '../Layouts/Main/Main';
import { loadAllCourses, loadCourseInformation } from '../Loader/loader';
import AllCourses from '../Pages/AllCourses/AllCourses';
import Checkout from '../Pages/Checkout/Checkout';
import CourseInformation from '../Pages/CourseInformation/CourseInformation';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'home', element: <Home /> },
			{ path: 'login', element: <Login /> },
			{
				path: 'courses',
				element: <Courses />,
				loader: loadAllCourses,
				children: [
					{
						index: true,
						element: <AllCourses />,
						loader: loadAllCourses,
					},
					{
						path: 'course/:id',
						element: <CourseInformation />,
					},
					{
						path: 'checkout/:id',
						element: <Checkout />,
					},
				],
			},
		],
	},
]);

export default router;
