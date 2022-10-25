export const loadAllCourses = async () => {
	try {
		const res = await fetch('http://localhost:5000/courses');
		const data = res.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};
