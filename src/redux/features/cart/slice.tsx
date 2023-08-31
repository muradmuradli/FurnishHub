import { createSlice } from "@reduxjs/toolkit";

// const getLocalStorage = () => {
// 	let cart = localStorage.getItem("cart");
// 	if (cart) {
// 		return JSON.parse(localStorage.getItem("cart"));
// 	} else {
// 		return [];
// 	}
// };

const initialState = {
	cart: [],
	total_items: 0,
	total_amount: 0,
	shipping_fee: 534,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const { id, color, amount, product } = action.payload;
			const tempItem = state.cart.find((i: any) => i.id === id + color);
			if (tempItem) {
				const tempCart: any = state.cart.map((cartItem: any) => {
					if (cartItem.id === id + color) {
						let newAmount = cartItem.amount + amount;
						if (newAmount > cartItem.max) {
							newAmount = cartItem.max;
						}
						return { ...cartItem, amount: newAmount };
					} else {
					}
				});

				state.cart = tempCart;
			} else {
				const newItem: any = {
					id: id + color,
					name: product.name,
					color,
					amount,
					image: product.images[0].url,
					price: product.price,
					max: product.stock,
				};
				state.cart.push(newItem);
			}
		},
		removeItem: (state, action) => {
			const tempCart = state.cart.filter(
				(item: any) => item.id !== action.payload
			);
			state.cart = tempCart;
		},
		toggleAmount: (state, action) => {
			const { id, value } = action.payload;
			const tempCart = state.cart.map((item: any) => {
				if (item.id === id) {
					if (value === "inc") {
						let newAmount = item.amount + 1;
						if (newAmount > item.max) {
							newAmount = item.max;
						}
						return { ...item, amount: newAmount };
					} else if (value === "dec") {
						let newAmount = item.amount - 1;
						if (newAmount < 1) {
							newAmount = 1;
						}
						return { ...item, amount: newAmount };
					}
				} else {
					return item;
				}
			});

			state.cart = tempCart;
		},
		clearCart: (state) => {
			state.cart = [];
		},
		countCartTotals: (state) => {
			const { total_items, total_amount } = state.cart.reduce(
				(total: any, cartItem: any) => {
					const { amount, price } = cartItem;
					total.total_items += amount;
					total.total_amount += price * amount;
					return total;
				},
				{
					total_items: 0,
					total_amount: 0,
				}
			);
			state.total_items = total_items;
			state.total_amount = total_amount;
		},
	},
});

export const {
	addToCart,
	removeItem,
	toggleAmount,
	clearCart,
	countCartTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
