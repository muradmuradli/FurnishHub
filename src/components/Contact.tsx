import React from "react";

const Contact = () => {
	return (
		<div className="h-[30rem] flex gap-5 items-center justify-center">
			<div className="flex flex-col gap-4 w-6/12 pl-[10rem] pr-2">
				<h1 className="text-3xl font-bold tracking-wider text-slate-700">
					Join our newsletter and get 20% off
				</h1>
				<span className="text-sm text-slate-600 tracking-widest">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas eos
					ipsum ullam sequi voluptatem maxime rerum architecto. Rerum, minus
					voluptate!
				</span>
			</div>
			<div className="w-6/12">
				<div className="border border-slate-500 flex justify-between w-[30rem] rounded-sm">
					<input
						className="pl-3 focus:outline-none"
						type="text"
						placeholder="Enter email"
					/>
					<button className="bg-blue-500 hover:bg-blue-600 transition text-white p-2">
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
};

export default Contact;
