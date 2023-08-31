"use client";

import { clearFilters, updateFilters } from "@/redux/features/filters/actions";
import { useAppSelector } from "@/redux/hooks";
import { formatPrice, getUniqueValues } from "@/utils/helpers";
import { MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { AiOutlineCheck, AiOutlineClear } from "react-icons/ai";

const Filters = () => {
	const {
		filters: {
			text,
			category,
			company,
			color,
			min_price,
			price,
			max_price,
			shipping,
		},
		all_products,
	} = useAppSelector((store) => store.filters);

	const categories = getUniqueValues(all_products, "category");
	const companies = getUniqueValues(all_products, "company");
	const colors = getUniqueValues(all_products, "colors");

	return (
		<div className="lg:w-2/12">
			<form onSubmit={(e) => e.preventDefault()}>
				{/* search input */}
				<TextField
					size="small"
					className="w-full"
					type="text"
					name="text"
					placeholder="Search"
					value={text}
					onChange={updateFilters}
					variant="outlined"
				/>

				{/* categories */}
				<div className="mt-5 flex flex-col gap-2">
					<h1 className="font-bold text-slate-600 tracking-wider">Category</h1>
					<div className="flex flex-col gap-2 items-start">
						{categories.map((c: any, index: number) => {
							return (
								<button
									key={index}
									onClick={updateFilters}
									type="button"
									name="category"
									className={`${
										category === c.toLowerCase()
											? "border-b border-green-700"
											: ""
									} capitalize font-light text-slate-500 text-[15px] lg:text-[17px]`}
								>
									{c}
								</button>
							);
						})}
					</div>
				</div>

				{/* company */}
				<div className="flex flex-col gap-2 items-start mt-5">
					<h1 className="font-bold text-slate-600 tracking-wider">Category</h1>
					<Select
						size="small"
						className="w-4/12 lg:w-full capitalize"
						name="company"
						value={company}
						onChange={updateFilters}
					>
						{companies.map((c: any, index: number) => {
							return (
								<MenuItem className="capitalize" key={index} value={c}>
									{c}
								</MenuItem>
							);
						})}
					</Select>
				</div>

				{/* colors */}
				<div className="flex flex-col gap-2 items-start mt-5">
					<h1 className="font-bold text-slate-600 tracking-wider">Colors</h1>
					<div className="flex gap-2 items-center">
						{colors.map((c: any, index: number) => {
							if (c === "all") {
								return (
									<button
										key={index}
										name="color"
										onClick={updateFilters}
										data-color="all"
										className={`${
											color === "all" ? "border-b border-green-700" : ""
										}`}
									>
										All
									</button>
								);
							}
							return (
								<button
									key={index}
									name="color"
									style={{ backgroundColor: c }}
									className={`rounded-full w-5 h-5 flex items-center justify-center opacity-75`}
									data-color={c}
									onClick={updateFilters}
								>
									{color === c ? (
										<AiOutlineCheck size={13} color="white" />
									) : (
										""
									)}
								</button>
							);
						})}
					</div>
				</div>

				{/* price */}
				<div className="flex flex-col gap-2 items-start mt-5">
					<h1 className="font-bold text-slate-600 tracking-wider">Price</h1>
					<span className="text-sm text-slate-700">{formatPrice(price)}</span>
					<input
						type="range"
						name="price"
						className="lg:w-full"
						onChange={updateFilters}
						min={min_price}
						max={max_price}
						value={price}
					/>
				</div>

				{/* shipping */}
				<div className="flex items-center mt-5 gap-5">
					<h1 className="text-slate-600 tracking-wider font-light">
						Free Shipping
					</h1>
					<input
						type="checkbox"
						name="shipping"
						id="shipping"
						onChange={updateFilters}
						checked={shipping}
					/>
				</div>
			</form>

			{/* clear filters button */}
			<button
				className="bg-red-500 hover:bg-red-600 transition text-sm text-white py-2 px-3 rounded-md flex items-center justify-between gap-2 mt-5"
				type="button"
				onClick={clearFilters}
			>
				<span className="uppercase">Clear Filters</span>
				<AiOutlineClear size={20} />
			</button>
		</div>
	);
};

export default Filters;
