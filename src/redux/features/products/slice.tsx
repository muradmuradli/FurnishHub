import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isSidebarOpen: false,
	products_loading: false,
	products_error: false,
	products: [],
	featured_products: [],
	single_product: {},
};

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setSidebar: (state) => {
			state.isSidebarOpen = !state.isSidebarOpen;
		},
		setProductsLoading: (state, action) => {
			state.products_loading = action.payload;
		},
		setProducts: (state, action) => {
			state.products = action.payload;
		},
		setError: (state, action) => {
			state.products = action.payload;
		},
		setFeaturedProducts: (state, action) => {
			state.featured_products = action.payload.filter(
				(product: any) => product.featured === true
			);
		},
		setSingleProduct: (state, action) => {
			state.single_product = action.payload;
		},
	},
});

export const {
	setSidebar,
	setProductsLoading,
	setProducts,
	setError,
	setFeaturedProducts,
	setSingleProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
