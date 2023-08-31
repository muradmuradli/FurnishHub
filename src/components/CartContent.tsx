import React from "react";
import CartColumns from "./CartColumns";
import { useAppSelector } from "@/redux/hooks";
import CartItem from "./CartItem";
import Link from "next/link";
import { clearCartAction } from "@/redux/features/cart/actions";
import CartTotal from "./CartTotal";

const CartContent = () => {
	const { cart } = useAppSelector((store) => store.cart);
	return (
		<div className="w-full px-4 lg:px-0">
			<CartColumns />
			<div className="flex flex-col gap-4">
				{cart.map((item: any) => {
					return <CartItem key={item.id} {...item} />;
				})}
			</div>
			<div className="border-b border-slate-300 w-full my-8"></div>
			<div className="flex gap-2 w-full lg:justify-between">
				<Link
					className="rounded-md text-center capitalize bg-blue-600 text-white w-6/12 p-1 lg:w-2/12"
					href={"/products"}
				>
					continue shopping
				</Link>
				<button
					className="rounded-md bg-slate-600 capitalize text-white w-6/12 p-1 lg:w-2/12"
					type="button"
					onClick={() => clearCartAction()}
				>
					clear cart
				</button>
			</div>
			<div className="border-b border-slate-300 w-full my-9"></div>
			<div className="lg:flex lg:justify-end">
				<CartTotal />
			</div>
		</div>
	);
};

export default CartContent;
