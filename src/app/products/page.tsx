"use client";

import Filters from "@/components/Filters";
import PageHero from "@/components/PageHero";
import ProductList from "@/components/ProductList";
import Sort from "@/components/Sort";
import { loadAllProducts } from "@/redux/features/filters/slice";
import { useAppSelector } from "@/redux/hooks";
import { store } from "@/redux/store";
import React, { useEffect } from "react";

const Products = () => {
	useEffect(() => {
		const products = localStorage.getItem("products");
		if (products !== null) {
			const initialState = JSON.parse(products);

			// Dispatch an action to set the initial state in Redux
			store.dispatch(loadAllProducts(initialState));
		}
	}, []);

	return (
		<div>
			<PageHero title="products" />
			<div className="p-5 lg:flex gap-10 lg:p-20 lg:pl-[15rem] lg:justify-center">
				<Filters />
				<div className="lg:w-10/12">
					<Sort />
					<ProductList />
				</div>
			</div>
		</div>
	);
};

export default Products;
