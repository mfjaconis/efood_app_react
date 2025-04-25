import { configureStore } from "@reduxjs/toolkit";

import api from "../services/api";
import reducerCart from "./reducer/cart";
import reducerClient from "./reducer/client";
import reducerPayment from "./reducer/payment";

export const store = configureStore({
	reducer: {
		cart: reducerCart,
		client: reducerClient,
		payment: reducerPayment,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
