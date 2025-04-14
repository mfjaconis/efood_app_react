import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

type ClientState = {
	receiver: string;
	address: string;
	city: string;
	cep: string;
	number: string;
	complement?: string;
};

const initialState: ClientState = {
	receiver: "",
	address: "",
	city: "",
	cep: "",
	number: "",
	complement: "",
};

const clientSlice = createSlice({
	name: "client",
	initialState,
	reducers: {
		updateClient(state, action: PayloadAction<ClientState>) {
			return { ...state, ...action.payload };
		},
		resetClient() {
			return initialState;
		},
	},
});

export const { updateClient, resetClient } = clientSlice.actions;
export default clientSlice.reducer;
