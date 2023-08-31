"use client";

import { updateSort } from "@/redux/features/filters/actions";
import { setGridView, setListView } from "@/redux/features/filters/slice";
import { useAppSelector } from "@/redux/hooks";
import { store } from "@/redux/store";
import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { MenuItem, Select } from "@mui/material";

const Sort = () => {
	const {
		filtered_products: products,
		grid_view,
		sort,
	} = useAppSelector((store) => store.filters);

	return (
		<div className="flex flex-col lg:flex-row items-start lg:items-center mt-7 lg:mt-0 gap-3 justify-between">
			{/* buttons to toggle the view */}
			<div className="flex items-center gap-2">
				<button
					onClick={() => store.dispatch(setGridView())}
					className={`${
						grid_view ? "bg-slate-600 text-white" : ""
					} p-1 rounded-md border border-slate-600`}
				>
					<BsFillGridFill size={20} />
				</button>
				<button
					onClick={() => store.dispatch(setListView())}
					className={`${
						!grid_view ? "bg-slate-600 text-white" : ""
					} p-1 rounded-md border border-slate-600`}
				>
					<BsList size={20} />
				</button>
			</div>

			{/* how many products fit the criteria */}
			<span className="lg:ml-3 capitalize text-sm lg:text-base text-slate-700">
				{products.length} products found
			</span>

			{/* line in the middle */}
			<div className="border-b border-slate-300 w-full lg:w-5/12"></div>

			{/* sorting form */}
			<div className="flex items-center gap-7">
				<label>Sort By</label>
				<Select
					size="small"
					className="capitalize"
					name="sort"
					id="sort"
					value={sort}
					onChange={updateSort}
				>
					<MenuItem value="price-lowest">Price (Lowest)</MenuItem>
					<MenuItem value="price-highest">Price (Highest)</MenuItem>
					<MenuItem value="name-a">Name (A-Z)</MenuItem>
					<MenuItem value="name-z">Name (Z-A)</MenuItem>
				</Select>
			</div>
		</div>
	);
};

export default Sort;
