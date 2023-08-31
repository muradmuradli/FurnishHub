import Link from "next/link";
import React from "react";

const PageNotFound = () => {
	return (
		<div className="h-96 flex flex-col gap-2 justify-center items-center">
			<h1>Page Not Found</h1>
			<Link className="bg-blue-500 text-white p-2 rounded-md" href="/">
				Back Home
			</Link>
		</div>
	);
};

export default PageNotFound;
