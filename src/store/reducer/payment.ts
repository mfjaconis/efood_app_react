import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

type PaymentState = {
    card_name: string;
    card_number: string;
    card_cvv: string;
    expiry_month: string;
    expiry_year: string;
    orderId: string | null;
};

const initialState: PaymentState = {
    card_name: "",
    card_number: "",
    card_cvv: "",
    expiry_month: "",
    expiry_year: "",
    orderId: null
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
        setOrderId(state, action: PayloadAction<string | null>) {
            state.orderId = action.payload;
        },
    },
});

export const { updatePayment, resetPayment, setOrderId } = paymentSlice.actions;
export default paymentSlice.reducer;
