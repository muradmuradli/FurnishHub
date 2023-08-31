"use client";

import CartContent from "@/components/CartContent";
import PageHero from "@/components/PageHero";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React from "react";

const Cart = () => {
	const { cart } = useAppSelector((store) => store.cart);
	if (cart.length < 1) {
		return (
			<div className="p-5 h-[28rem] lg:h-[31.2rem] flex justify-center items-center">
				<div className="flex flex-col items-center gap-3">
					<h1 className="text-2xl">Your cart is empty</h1>
					<Link
						className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition text-center uppercase"
						href={"/products"}
					>
						Back to products
					</Link>
				</div>
			</div>
		);
	}
	return (
		<div>
			<PageHero title="cart" />
			<div className="flex lg:px-[17rem] py-10">
				<CartContent />
			</div>
		</div>
	);
};

export default Cart;
