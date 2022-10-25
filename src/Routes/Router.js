import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
	{ path: '/', element: <Main />, errorElement: <ErrorPage /> },
]);

export default router;
