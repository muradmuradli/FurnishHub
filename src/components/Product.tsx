"use client";

import { useState } from "react";
import { formatPrice } from "@/utils/helpers";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

interface ProductProps {
	image: string;
	name: string;
	price: string;
	id: string;
	width: string;
}

const Product: React.FC<ProductProps> = ({ image, name, price, id, width }) => {
	const [showSearch, setShowSearch] = useState(false);

	return (
		<div className={`my-10 lg:my-7 lg:w-[32%]`}>
			<Link
				href={`/products/${id}`}
				onMouseEnter={() => setShowSearch(true)}
				onMouseLeave={() => setShowSearch(false)}
				className="relative group hover:opacity-90 transition duration-200"
			>
				<img
					className="border border-slate-300 rounded-md h-48 w-full lg:h-60 lg:w-[23rem] object-cover"
					src={image}
					alt={name}
				/>
				<AnimatePresence>
					{showSearch && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<Link
								className={`hidden ${
									showSearch && "lg:block"
								} absolute top-1/2 left-1/2 -translate-x-1/2
										-translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-5 rounded-full transition`}
								href={`/products/${id}`}
							>
								<AiOutlineSearch />
							</Link>
						</motion.div>
					)}
				</AnimatePresence>
			</Link>
			<footer className="mt-2 flex justify-between font-light capitalize text-[15px] lg:text-[15px] tracking-widest">
				<h5>{name}</h5>
				<span className="text-green-600">{formatPrice(price)}</span>
			</footer>
		</div>
	);
};

export default Product;
