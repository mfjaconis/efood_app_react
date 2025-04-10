import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Restaurante } from "../App";

const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "https://fake-api-tau.vercel.app/api/efood/restaurantes",
	}),
	endpoints: (builder) => ({
		getMenuRestaurants: builder.query<Restaurante[], void>({
			query: () => "",
		}),
		getMenuRestaurantsById: builder.query<Restaurante, string>({
			query: (id) => `/${id}`,
		}),
	}),
});

export const { useGetMenuRestaurantsQuery, useGetMenuRestaurantsByIdQuery } =
	api;

export default api;
