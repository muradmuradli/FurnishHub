"use client";

import { useAppSelector } from "@/redux/hooks";
import React from "react";
import Loading from "./Loading";
import Error from "./Error";
import Product from "./Product";
import Link from "next/link";

const FeaturedProducts = () => {
	const {
		products_loading: loading,
		products_error: error,
		featured_products: featured,
	} = useAppSelector((store) => store.products);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <Error />;
	}

	return (
		<div className="flex flex-col items-center gap-2 bg-slate-100 p-4 pb-10">
			<div className="flex flex-col mt-9 justify-center items-center">
				<h2 className="text-3xl font-bold">Featured Products</h2>
				<div className="h-[5px] w-32 mt-3 bg-blue-600"></div>
			</div>
			<div className="mt-5 flex flex-col lg:flex-row lg:gap-8 lg:justify-center">
				{featured.slice(0, 3).map((product: any) => {
					return <Product key={product.id} {...product} />;
				})}
			</div>
			<Link
				href={"/products"}
				className="bg-blue-500 text-white rounded-sm py-2 px-4 uppercase tracking-widest hover:bg-blue-600 transition mt-5"
			>
				All Products
			</Link>
		</div>
	);
};

export default FeaturedProducts;
