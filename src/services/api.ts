import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Restaurante } from "../App";
import type { ProductOrder } from "../components/Order";



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
		getMenuOrder: builder.query<ProductOrder, void>({
			query: () => "/checkout",
		}),
		postOrderCheckout: builder.mutation<void, ProductOrder>({
			query: (orderData) => ({
				url: "/checkout",
				method: "POST",
				body: orderData,
			}),
		}),
	}),
});

export const { useGetMenuRestaurantsQuery, useGetMenuRestaurantsByIdQuery, useGetMenuOrderQuery, usePostOrderCheckoutMutation } =
	api;

export default api;
