import { countCartTotalsAction } from "@/redux/features/cart/actions";
import { useAppSelector } from "@/redux/hooks";
import { formatPrice } from "@/utils/helpers";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";

const CartTotal = () => {
	const { total_amount, shipping_fee } = useAppSelector((store) => store.cart);
	const { data: session } = useSession();

	useEffect(() => {
		countCartTotalsAction();
	});
	return (
		<div className="w-full lg:w-4/12 lg:border lg:border-slate-300 lg:rounded-md lg:p-5">
			<article className="capitalize text-[15px]">
				<div className="w-full flex justify-between">
					<span className="font-bold text-slate-600">subtotal : </span>
					<span>{formatPrice(total_amount)}</span>
				</div>
				<div className="w-full flex justify-between mt-1">
					<span className="font-bold text-slate-600">shipping fee : </span>
					{formatPrice(shipping_fee)}
				</div>
				<div className="border-b border-slate-300 w-full my-9"></div>
				<div className="w-full flex justify-center gap-5 text-xl">
					<span className="font-bold text-slate-700">order total:</span>{" "}
					{formatPrice(total_amount + shipping_fee)}
				</div>
			</article>
			<div className="border-b border-slate-300 w-full my-9"></div>

			<div className="w-full flex justify-center">
				{session?.user ? (
					<Link
						className="capitalize bg-green-700 text-white rounded-md p-2"
						href={"/checkout"}
					>
						proceed to checkout
					</Link>
				) : (
					<button
						className="w-full bg-blue-600 text-white p-2 rounded-md uppercase"
						onClick={() => signIn()}
					>
						Login
					</button>
				)}
			</div>
		</div>
	);
};

export default CartTotal;
