import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

type PaymentState = {
    card_name: string;
    card_number: string;
    card_cvv: string;
    expiry_month: string;
    expiry_year: string;
};

const initialState: PaymentState = {
    card_name: "",
    card_number: "",
    card_cvv: "",
    expiry_month: "",
    expiry_year: ""
};

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        updatePayment(state, action: PayloadAction<PaymentState>) {
            return { ...state, ...action.payload };
        },
        resetPayment() {
            return initialState;
        },
    },
});

export const { updatePayment, resetPayment } = paymentSlice.actions;
export default paymentSlice.reducer;
