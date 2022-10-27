import React from 'react';

const Blog = () => {
	return (
		<div className="mt-8">
			<div className="flex flex-col divide-y px-8 lg:px-12 xl:px-32 divide-gray-300">
				<details>
					<summary className="py-2 outline-none cursor-pointer text-xl font-medium text-blue-600">
						What is CORS?
					</summary>
					<div className="px-4 pb-4 text-lg">
						<p>
							CORS stands for Cross Origin Resource Sharing. This
							is an HTTP Header based mechanism that allows a
							server to indicate any origins (domain, scheme, or
							port) other than its own from which a browser should
							permit loading resources. With this mechanism the
							browser takes the decision of whether the domain
							should access the server or not.
						</p>
					</div>
				</details>
				<details>
					<summary className="py-2 outline-none cursor-pointer text-xl font-medium text-blue-600">
						Why are we using firebase? What other options do we have
						to implement authentication?
					</summary>
					<div className="px-4 pb-4 text-lg">
						<p>
							Firebase Authentication provides backend services,
							easy-to-use SDKs, and ready-made UI libraries to
							authenticate users to your app. It supports
							authentication using passwords, phone numbers,
							popular federated identity providers like Google,
							Facebook and Twitter, and more. However, The most
							important thing is that Firebase is managed by
							google which makes it more secured than others.
							<br />
							There are some other options to authenticate a user.
							Like Pin, Pattern etc. Biometric authentication is
							on of the options too. In the process of Biometrics
							there are Finger print scanner, Retina Scanner,
							Voice activation and many more.
						</p>
					</div>
				</details>
				<details>
					<summary className="py-2 outline-none cursor-pointer text-xl font-medium text-blue-600">
						How does the private route works?
					</summary>
					<div className="px-4 pb-4 space-y-2 text-lg">
						<p>
							In the process of making a website and securing the
							data of the website, we have to restrict some of the
							data or pages. Which only an authorized user can
							access. Those routes are called Private/Protected
							Routes.
							<br />
							If an unauthorized user try to access the content of
							the Private routes then the user will be redirected
							to the Login page. From where the user must have to
							login first to access those content.
						</p>
					</div>
				</details>
				<details>
					<summary className="py-2 outline-none cursor-pointer text-xl font-medium text-blue-600">
						What is Node JS and How Does Node JS works?
					</summary>
					<div className="px-4 pb-4 space-y-2 text-lg">
						<p>
							Node.js is an open-source, cross-platform, back-end
							JavaScript runtime environment. It runs on the V8
							engine and executes JavaScript code outside a web
							browser by converting the JS code into machine code.
							It is highly scalable, lightweight, fast, and
							data-intensive.
							<br />
							Node is a single threaded server. When a new request
							coming in is one kind of event. The server starts
							processing it and when there is a blocking IO
							operation, it does not wait until it completes and
							instead registers a callback function. The server
							then immediately starts to process another event .
							When the IO operation is finished, that is another
							kind of event, and the server will process it by
							executing the callback as soon as it has time.
						</p>
					</div>
				</details>
			</div>
		</div>
	);
};

export default Blog;
