import React from "react";

const CartColumns = () => {
	const elements = [
		{ id: 1, text: "item" },
		{ id: 2, text: "price" },
		{ id: 3, text: "quantity" },
		{ id: 4, text: "subtotal" },
	];

	return (
		<div className="hidden lg:flex flex-col lg:mb-5 text-lg tracking-widest text-slate-500 justify-between w-full">
			<div className="w-full flex">
				{elements.map((element) => {
					return (
						<span
							className="capitalize w-3/12 flex justify-center"
							key={element.id}
						>
							{element.text}
						</span>
					);
				})}
			</div>
			<div className="border-b border-slate-300 w-full my-5"></div>
		</div>
	);
};

export default CartColumns;
