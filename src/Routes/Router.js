import { createBrowserRouter } from 'react-router-dom';
import Courses from '../Layouts/Courses/Courses';
import Main from '../Layouts/Main/Main';
import Private from '../Layouts/Private/Private';
import { loadAllCourses, loadCourseInformation } from '../Loader/loader';
import AllCourses from '../Pages/AllCourses/AllCourses';
import Blog from '../Pages/Blog/Blog';
import Checkout from '../Pages/Checkout/Checkout';
import CourseInformation from '../Pages/CourseInformation/CourseInformation';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import FAQ from '../Pages/FAQ/FAQ';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'home', element: <Home /> },
			{ path: 'login', element: <Login /> },
			{ path: 'register', element: <Register /> },
			{ path: 'blog', element: <Blog /> },
			{ path: 'faq', element: <FAQ /> },
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
						element: (
							<Private>
								<Checkout />
							</Private>
						),
					},
				],
			},
		],
	},
]);

export default router;
