import React from "react";
import { MoonLoader } from "react-spinners";

const Loading = () => {
	return (
		<div className="h-screen flex justify-center items-center">
			<MoonLoader size={50} />
		</div>
	);
};

export default Loading;
