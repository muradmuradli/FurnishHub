import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import productsReducer from "./features/products/slice";
import filtersReducer from "./features/filters/slice";
import cartReducer from "./features/cart/slice";
import storage from "redux-persist/lib/storage";

// Configure persist options
const persistConfig = {
	key: "root", // Key for the root of the storage
	storage, // Storage engine
};

// Create persisted reducers
const persistedProductsReducer = persistReducer(persistConfig, productsReducer);
const persistedFiltersReducer = persistReducer(persistConfig, filtersReducer);
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
	reducer: {
		products: persistedProductsReducer,
		filters: persistedFiltersReducer,
		cart: persistedCartReducer,
	},
});

// Create the persisted store
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
