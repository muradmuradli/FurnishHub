import { store } from "@/redux/store";
import {
	addToCart,
	clearCart,
	countCartTotals,
	removeItem,
	toggleAmount,
} from "./slice";

export const addToCartAction = ({
	id,
	color,
	amount,
	product,
}: {
	id: any;
	color: any;
	amount: any;
	product: any;
}) => {
	store.dispatch(addToCart({ id, color, amount, product }));
	const { cart } = store.getState();
	localStorage.setItem("cart", JSON.stringify(cart.cart));
	countCartTotalsAction();
};

export const clearCartAction = () => {
	store.dispatch(clearCart());
	const { cart } = store.getState();
	localStorage.setItem("cart", JSON.stringify(cart.cart));
	countCartTotalsAction();
};

export const removeItemAction = (id: string) => {
	store.dispatch(removeItem(id));
	const { cart } = store.getState();
	localStorage.setItem("cart", JSON.stringify(cart.cart));
	countCartTotalsAction();
};

export const toggleAmountAction = (id: string, value: any) => {
	store.dispatch(toggleAmount({ id, value }));
	const { cart } = store.getState();
	localStorage.setItem("cart", JSON.stringify(cart.cart));
	countCartTotalsAction();
};

export const countCartTotalsAction = () => {
	store.dispatch(countCartTotals());
	const { cart } = store.getState();
	localStorage.setItem("cart", JSON.stringify(cart.cart));
};
