"use client";

import React, { useEffect } from "react";
import { useAppSelector } from "@/redux/hooks";
import { fetchSingleProduct } from "@/redux/features/products/actions";
import { single_product_url } from "@/utils/constants";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import { useRouter } from "next/navigation";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import ProductImages from "@/components/ProductImages";
import Stars from "@/components/Stars";
import { formatPrice } from "@/utils/helpers";
import AddToCart from "@/components/AddToCart";

const SingleProduct = ({ params }: { params: { productId: string } }) => {
	const router = useRouter();
	const {
		products_loading: loading,
		products_error: error,
		single_product: product,
	} = useAppSelector((store) => store.products);

	useEffect(() => {
		fetchSingleProduct(`${single_product_url}${params.productId}`);
	}, [params.productId]);

	useEffect(() => {
		if (error) {
			setTimeout(() => {
				router.push("/");
			}, 3000);
		}
	}, [error]);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <Error />;
	}

	const {
		name,
		price,
		description,
		stock,
		stars,
		reviews,
		id: sku,
		company,
		images,
	}: any = product;

	return (
		<div className="py-5 flex flex-col gap-2 items-start">
			<PageHero title={name} product={product} />
			<Link
				className="p-2 mx-5 px-3 lg:mx-[12rem] py-1 uppercase font-light tracking-wider bg-blue-400 text-white rounded-md hover:bg-blue-500 transition my-9"
				href={"/products"}
			>
				Back to Products
			</Link>
			<div className="lg:flex gap-5 px-5">
				<ProductImages images={images} />
				<section className="flex flex-col mt-10 lg:mt-0 gap-4 lg:w-4/12 lg:pr-5">
					<h1 className="text-3xl font-bold tracking-wide capitalize text-slate-800 lg:text-5xl">
						{name}
					</h1>
					<Stars stars={stars} reviews={reviews} />
					<h1 className="font-bold text-sm text-slate-700 lg:text-2xl">
						{formatPrice(price)}
					</h1>
					<span className="tracking-wide text-slate-700 text-sm text-justify leading-7 lg:text-lg">
						{description}
					</span>
					<div className="text-sm flex justify-between lg:text-lg">
						<span className="font-bold text-slate-700">Available: </span>
						<span className="ml-10">
							{stock > 0 ? "In Stock" : "Out of Stock"}
						</span>
					</div>
					<div className="text-sm flex gap-10 justify-between lg:text-lg">
						<span className="font-bold text-slate-700">SKU: </span>
						<span className="ml-10">{sku}</span>
					</div>
					<div className="text-sm flex gap-10 justify-between lg:text-lg">
						<span className="font-bold text-slate-700">Brand: </span>
						<span className="ml-10">{company}</span>
					</div>
					<hr />
					{stock > 0 && <AddToCart product={product} />}
				</section>
			</div>
		</div>
	);
};

export default SingleProduct;
