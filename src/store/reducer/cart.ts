import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { CardapioItem } from "../../App";

type CartState = {
	items: CardapioItem[];
	counter: number;
};

const initialState: CartState = {
	items: [],
	counter: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		add: (state, action: PayloadAction<CardapioItem>) => {
			const newItem = {
				...action.payload,
				id: action.payload.id + state.counter,
			};
			state.items.push(newItem);
			state.counter += 1;
		},
		remove: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
	},
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
