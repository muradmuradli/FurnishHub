"use client";

import Contact from "@/components/Contact";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { loadProducts } from "@/redux/features/filters/actions";
import { fetchProducts } from "@/redux/features/products/actions";
import { products_url } from "@/utils/constants";
import React, { useEffect } from "react";

const Home = () => {
	useEffect(() => {
		fetchProducts(products_url);
		loadProducts();
	}, []);

	return (
		<div>
			<Hero />
			<FeaturedProducts />
			<Services />
			<Contact />
		</div>
	);
};

export default Home;
