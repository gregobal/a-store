import {CaseReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {OrderProcessStatus} from "../../types/order";
import {placeAnOrder} from "./operations";

export type OrderStore = {
    status: OrderProcessStatus,
    result: string | null,
    error: string | null
}

const initialState: OrderStore = {
    status: 'idle',
    result: null,
    error: null
}

const init: CaseReducer<OrderStore> = (state) => {
    state.status = "idle"
    state.result = null
    state.error = null
}

const pending: CaseReducer<OrderStore> = (state) => {
    state.status = "loading";
    state.result = null;
}

const fulfilled: CaseReducer<OrderStore, PayloadAction<string>> = (state, {payload}) => {
    state.status = "succeeded";
    state.result = payload;
}

const rejected: CaseReducer<OrderStore, PayloadAction<unknown>> = (state, {payload}) => {
    state.status = "failed";
    state.error = payload as string;
}

export const {
    actions: orderActions,
    reducer: orderReducer
} = createSlice({
    name: "order",
    initialState,
    reducers: {
        init
    },
    extraReducers: (builder) => {
        builder
            .addCase(placeAnOrder.pending, pending)
            .addCase(placeAnOrder.fulfilled, fulfilled)
            .addCase(placeAnOrder.rejected, rejected)
    }
});
