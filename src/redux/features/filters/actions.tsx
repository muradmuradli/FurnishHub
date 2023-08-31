import { store } from "@/redux/store";
import axios from "axios";
import {
	loadAllProducts,
	removeFilters,
	setFilters,
	setSort,
	sortProducts,
} from "./slice";

export const loadProducts = async () => {
	const { products } = store.getState();
	store.dispatch(loadAllProducts([...products.products]));
};

export const updateSort = (e: any) => {
	store.dispatch(setSort(e.target.value));
};

export const updateFilters = (e: any) => {
	let name = e.target.name;
	let value = e.target.value;

	if (name === "category") {
		value = e.target.textContent;
	}

	if (name === "color") {
		value = e.target.dataset.color;
	}

	if (name === "price") {
		value = Number(value);
	}

	if (name === "shipping") {
		value = e.target.checked;
	}

	store.dispatch(setFilters({ name, value }));
};

export const clearFilters = (e: any) => {
	store.dispatch(removeFilters());
};

export const sortFilteredProducts = async () => {
	store.dispatch(sortProducts());
};
