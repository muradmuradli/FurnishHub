"use client";

import PageHero from "@/components/PageHero";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import StripeCheckout from "@/components/StripeCheckout";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";

const Checkout = () => {
	const router = useRouter();
	const { data: session } = useSession();
	const { cart } = useAppSelector((store) => store.cart);

	return (
		<div>
			<PageHero title="Checkout" />
			{/* {/* <h1>Checkout Here</h1> */}
			{cart.length < 1 ? (
				<div>
					<h1>your cart is empty</h1>
					<Link href="/products">Products</Link>
				</div>
			) : (
				<StripeCheckout />
			)}
		</div>
	);
};

export default Checkout;
