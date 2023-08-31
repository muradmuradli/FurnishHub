import React from "react";

const Footer = () => {
	return (
		<div className="h-32 bg-slate-800 flex flex-col items-center justify-center text-white text-lg font-light">
			<div className="flex items-center gap-1">
				<h5>&copy; {new Date().getFullYear()}</h5>
				<span>FurnishHub</span>
			</div>
			<span>All Rights Reserved</span>
		</div>
	);
};

export default Footer;
