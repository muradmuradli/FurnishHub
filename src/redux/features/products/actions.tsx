import { store } from "@/redux/store";
import axios from "axios";
import {
	setError,
	setFeaturedProducts,
	setProducts,
	setProductsLoading,
	setSingleProduct,
} from "./slice";

export const fetchProducts = async (url: string) => {
	store.dispatch(setProductsLoading(true));

	try {
		const response = await axios.get(url);
		store.dispatch(setProducts(response.data));
		store.dispatch(setFeaturedProducts(response.data));

		const products = JSON.stringify(response.data);
		localStorage.setItem("products", products);
	} catch (error) {
		store.dispatch(setError(true));
	}

	store.dispatch(setProductsLoading(false));
};

export const fetchSingleProduct = async (url: string) => {
	store.dispatch(setProductsLoading(true));

	try {
		const response = await axios.get(url);
		store.dispatch(setSingleProduct(response.data));
	} catch (error) {
		store.dispatch(setError(true));
	}

	store.dispatch(setProductsLoading(false));
};
