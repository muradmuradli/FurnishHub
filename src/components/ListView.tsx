import { formatPrice } from "@/utils/helpers";
import Link from "next/link";
import React from "react";

interface ListViewProps {
	products: any;
}

const ListView: React.FC<ListViewProps> = ({ products }) => {
	return (
		<div className="flex flex-col gap-6 lg:gap-14 mt-7">
			{products.map((product: any) => {
				const { id, image, name, price, description } = product;
				return (
					<article
						className="flex flex-col lg:flex-row gap-3 lg:gap-6 lg:w-full"
						key={id}
					>
						<img
							className="h-56 object-cover w-full lg:w-4/12 rounded-md"
							src={image}
							alt={name}
						/>
						<div className="flex flex-col gap-1 lg:w-8/12 items-start">
							<h1 className="text-2xl font-bold capitalize text-slate-700">
								{name}
							</h1>
							<h1 className="text-sm lg:text-base text-slate-600">
								{formatPrice(price)}
							</h1>
							<p className="text-sm lg:text-base text-slate-600">
								{description.substring(0, 150)}...
							</p>
							<Link
								className="text-xs lg:text-lg mt-4 bg-blue-600 text-white rounded-md py-1 px-3 text-center"
								href={`/products/${id}`}
							>
								Details
							</Link>
						</div>
					</article>
				);
			})}
		</div>
	);
};

export default ListView;
