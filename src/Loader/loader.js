export const loadAllCourses = async () => {
	try {
		const res = await fetch('http://localhost:5000/courses');
		const data = res.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const loadCourseInformation = async (id) => {
	try {
		const res = await fetch(`http://localhost:5000/course/${id}`);
		const data = await res.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error(error);
	}
};
