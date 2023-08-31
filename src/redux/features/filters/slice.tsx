import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	filtered_products: [],
	all_products: [],
	grid_view: false,
	sort: "price-lowest",
	filters: {
		text: "",
		category: "all",
		color: "all",
		company: "all",
		min_price: 0,
		max_price: 0,
		price: 0,
		shipping: false,
	},
};

export const filtersSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		loadAllProducts: (state, action) => {
			let maxPrice = action.payload.map((p: any) => p.price);
			maxPrice = Math.max(...maxPrice);
			state.all_products = action.payload;
			state.filtered_products = action.payload;
			state.filters = {
				...state.filters,
				max_price: maxPrice,
				price: maxPrice,
			};
		},
		setGridView: (state) => {
			state.grid_view = true;
		},
		setListView: (state) => {
			state.grid_view = false;
		},
		setSort: (state, action) => {
			state.sort = action.payload;
		},
		sortProducts: (state) => {
			const { sort, filtered_products } = state;
			let tempProducts = [...filtered_products];
			if (sort === "price-lowest") {
				tempProducts = tempProducts.sort((a: any, b: any) => a.price - b.price);
			}
			if (sort === "price-highest") {
				tempProducts = tempProducts.sort((a: any, b: any) => b.price - a.price);
			}
			if (sort === "name-a") {
				tempProducts = tempProducts.sort((a: any, b: any) => {
					return a.name.localeCompare(b.name);
				});
			}
			if (sort === "name-z") {
				tempProducts = tempProducts.sort((a: any, b: any) => {
					return b.name.localeCompare(a.name);
				});
			}
			state.filtered_products = tempProducts;
		},
		setFilters: (state, action) => {
			const { name, value } = action.payload;
			state.filters = { ...state.filters, [name]: value };
		},
		applyFilters: (state) => {
			const { all_products } = state;
			const { text, category, company, color, price, shipping } = state.filters;

			let tempProducts = [...all_products];

			if (text) {
				tempProducts = tempProducts.filter((product: any) => {
					return product.name.toLowerCase().startsWith(text);
				});
			}

			if (category !== "all") {
				tempProducts = tempProducts.filter((product: any) => {
					return product.category === category;
				});
			}

			if (company !== "all") {
				tempProducts = tempProducts.filter((product: any) => {
					return product.company === company;
				});
			}

			if (color !== "all") {
				tempProducts = tempProducts.filter((product: any) => {
					return product.colors.find((c: any) => c === color);
				});
			}

			tempProducts = tempProducts.filter(
				(product: any) => product.price <= price
			);

			if (shipping) {
				tempProducts = tempProducts.filter(
					(product: any) => product.shipping === true
				);
			}

			state.filtered_products = tempProducts;
		},
		removeFilters: (state) => {
			state.filters = {
				...state.filters,
				text: "",
				company: "all",
				category: "all",
				color: "all",
				price: state.filters.max_price,
				shipping: false,
			};
		},
	},
});

export const {
	loadAllProducts,
	setGridView,
	setListView,
	setSort,
	sortProducts,
	setFilters,
	applyFilters,
	removeFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
