import React, { useEffect } from "react";
import GridView from "./GridView";
import { useAppSelector } from "@/redux/hooks";
import ListView from "./ListView";
import { sortFilteredProducts } from "@/redux/features/filters/actions";
import { applyFilters } from "@/redux/features/filters/slice";
import { store } from "@/redux/store";

const ProductList = () => {
	const {
		filtered_products: products,
		grid_view,
		sort,
		filters,
	} = useAppSelector((store) => store.filters);

	useEffect(() => {
		store.dispatch(applyFilters());
		sortFilteredProducts();
	}, [sort, filters]);

	if (products.length < 1) {
		return <h5>Sorry, no products matched your search...</h5>;
	}

	if (grid_view === false) {
		return <ListView products={products} />;
	}
	return <GridView products={products} />;
};

export default ProductList;
