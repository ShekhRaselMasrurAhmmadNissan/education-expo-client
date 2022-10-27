import React from 'react';

const FAQ = () => {
	return (
		<div>
			<section className="bg-white text-black">
				<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
					<h2 className="text-2xl text-center font-semibold sm:text-4xl">
						Frequently Asked Questions
					</h2>
					<p className="mt-4 mb-8 text-lg">
						There are some information which the users most often
						asks us.
					</p>
					<div className="space-y-4">
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none  text-xl font-medium text-blue-600 cursor-pointer">
								How can we contact with you?
							</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-lg">
								You can contact with us by simply send us a Mail
								in{' '}
								<span className="cursor-pointer text-blue-600 underline">
									darkcastle895@gmail.com
								</span>{' '}
								address.
							</p>
						</details>
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none  text-xl font-medium text-blue-600 cursor-pointer">
								What is your office address?
							</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-lg">
								You can visit us at{' '}
								<span className="text-blue-600">
									Mirpur-11, Dhaka.
								</span>
							</p>
						</details>
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none  text-xl font-medium text-blue-600 cursor-pointer">
								Is the course fee refundable?
							</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-lg">
								It depends on the situations. In some condition
								we will consider refunding the course fee.
							</p>
						</details>
					</div>
				</div>
			</section>
		</div>
	);
};

export default FAQ;
