import { configureStore } from "@reduxjs/toolkit";

import api from "../services/api";
import reducerCart from './reducers/cart'

export const store = configureStore({
	reducer: {
		cart: reducerCart,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

export type rootReducer = ReturnType<typeof store.getState>;
