"use client";

import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import AmountButtons from "./AmountButtons";
import Link from "next/link";
import { store } from "@/redux/store";
import { addToCart } from "@/redux/features/cart/slice";
import { addToCartAction } from "@/redux/features/cart/actions";

interface AddToCartProps {
	product: any;
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
	const { id, stock, colors } = product;

	const [mainColor, setMainColor] = useState(colors[0]);
	const [amount, setAmount] = useState(1);

	const increase = () => {
		setAmount((oldAmount) => {
			let tempAmount = oldAmount + 1;
			if (tempAmount > stock) {
				tempAmount = stock;
			}
			return tempAmount;
		});
	};

	const decrease = () => {
		setAmount((oldAmount) => {
			let tempAmount = oldAmount - 1;
			if (tempAmount < 1) {
				tempAmount = 1;
			}
			return tempAmount;
		});
	};

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-7">
				<span className="text-sm font-bold tracking-wide capitalize lg:text-lg">
					colors:{" "}
				</span>
				<div className="flex items-center gap-2">
					{colors.map((color: string, index: number) => {
						return (
							<button
								style={{ backgroundColor: color }}
								className={`h-6 w-6 rounded-full flex items-center justify-center`}
								key={index}
								onClick={() => setMainColor(color)}
							>
								{mainColor === color ? (
									<AiOutlineCheck className="text-white" />
								) : null}
							</button>
						);
					})}
				</div>
			</div>
			<div className="mt-4 flex flex-col lg:justify-between lg:flex-row items-start gap-4">
				<AmountButtons
					amount={amount}
					increase={increase}
					decrease={decrease}
				/>
				<Link
					onClick={() =>
						addToCartAction({ id, color: mainColor, amount, product })
					}
					className="bg-blue-500 py-1 px-4 uppercase tracking-wide font-light text-white rounded-md"
					href={"/cart"}
				>
					add to cart
				</Link>
			</div>
		</div>
	);
};

export default AddToCart;
