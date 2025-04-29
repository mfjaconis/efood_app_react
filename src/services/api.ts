import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Restaurante } from "../App";

type Product = {
	id: number;
	price: number;
}

type ProductOrderPayload = {
	products: Product[];
	orderId: string,
	delivery: {
		receiver: string,
		address: {
			description: string,
			city: string,
			zipCode: string,
			number: number,
			complement: string
		}
	},
	payment: {
		card: {
			name: string,
			number: string,
			code: number,
			expires: {
				month: number,
				year: number
			}
		}
	}
}



const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "https://fake-api-tau.vercel.app/api/efood",
	}),
	endpoints: (builder) => ({
		getMenuRestaurants: builder.query<Restaurante[], void>({
			query: () => "/restaurantes",
		}),
		getMenuRestaurantsById: builder.query<Restaurante, string>({
			query: (id) => `/restaurantes/${id}`,
		}),
		getMenuOrder: builder.query<void, ProductOrderPayload>({
			query: () => "/checkout",
		}),
		postOrderCheckout: builder.mutation<void, ProductOrderPayload>({
			query: (body) => ({
				url: "checkout",
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useGetMenuRestaurantsQuery, useGetMenuRestaurantsByIdQuery, useGetMenuOrderQuery, usePostOrderCheckoutMutation } =
	api;

export default api;
