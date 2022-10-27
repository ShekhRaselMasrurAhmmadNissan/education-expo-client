export const loadAllCourses = async () => {
	try {
		const res = await fetch(
			'https://b610-lerning-platform-server-side-shekhraselmasrurahmmadnissan.vercel.app/courses'
		);
		const data = res.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const loadCourseInformation = async (id) => {
	try {
		const res = await fetch(
			`https://b610-lerning-platform-server-side-shekhraselmasrurahmmadnissan.vercel.app/course/${id}`
		);
		const data = await res.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error(error);
	}
};
