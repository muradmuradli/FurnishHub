"use client";

import { setSidebar } from "@/redux/features/products/slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import {
	BsFillCartPlusFill,
	BsFillPersonCheckFill,
	BsFillPersonDashFill,
} from "react-icons/bs";

const CartButtons = () => {
	const { total_items } = useAppSelector((store) => store.cart);
	const dispatch = useAppDispatch();
	const { data: session } = useSession();

	const handleSidebar = () => {
		dispatch(setSidebar());
	};

	return (
		<div className="text-lg lg:text-2xl flex items-center gap-7">
			<Link
				onClick={handleSidebar}
				className="flex items-center gap-2"
				href="/cart"
			>
				Cart
				<span className="flex items-center relative">
					<BsFillCartPlusFill size="27" />
					<span className="absolute -top-3 -right-3 bg-red-400 h-7 w-7 flex items-center justify-center text-white text-xs rounded-full">
						{total_items}
					</span>
				</span>
			</Link>
			{session && session.user ? (
				<button
					onClick={async () => await signOut()}
					type="button"
					className="flex items-center gap-2"
				>
					Logout <BsFillPersonDashFill size="30" />
				</button>
			) : (
				<button
					onClick={async () => await signIn()}
					type="button"
					className="flex items-center gap-2"
				>
					Login <BsFillPersonCheckFill size="30" />
				</button>
			)}
		</div>
	);
};

export default CartButtons;
