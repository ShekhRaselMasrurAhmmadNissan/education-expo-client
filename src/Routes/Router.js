import { createBrowserRouter } from 'react-router-dom';
import Courses from '../Layouts/Courses/Courses';
import Main from '../Layouts/Main/Main';
import { loadAllCourses, loadCourseInformation } from '../Loader/loader';
import AllCourses from '../Pages/AllCourses/AllCourses';
import CourseInformation from '../Pages/CourseInformation/CourseInformation';
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
						loader: ({ params }) => {
							loadCourseInformation(params.id);
						},
					},
				],
			},
		],
	},
]);

export default router;
