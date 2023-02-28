import {CaseReducer, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createOrder} from "../../api";
import {Order, OrderDetails, OrderProcessStatus} from "../../types/order";
import {RootState} from "../index";

export type OrderStore = {
    status: OrderProcessStatus,
    result: string | null,
    error: string | null
};

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

export const placeAnOrder = createAsyncThunk<string, OrderDetails, { state: RootState }>(
    "order/placeAnOrder",
    async (orderDetails, {getState, rejectWithValue}) => {
        const {cart} = getState();

        const products = cart.map(({productId, quantity, price, size, color, model, stickerNumber}) => ({
            id: productId,
            totalCount: quantity,
            totalPrice: quantity * price,
            sticketNumber: stickerNumber ? parseInt(stickerNumber) : undefined,
            model, color, size
        }));

        try {
            return await createOrder({
                ...orderDetails,
                products
            } as Order);
        } catch (e) {
            if (e instanceof Error) {
                return rejectWithValue(e.message);
            } else if (typeof e === "string") {
                return rejectWithValue(e);
            }
            return rejectWithValue("Неизвестная ошибка");
        }
    }
)

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
        builder.addCase(placeAnOrder.pending, (state, _) => {
            state.status = "loading";
            state.result = null;
        })
        builder.addCase(placeAnOrder.fulfilled, (state, {payload}) => {
            state.status = "succeeded";
            state.result = payload;
        })
        builder.addCase(placeAnOrder.rejected, (state, {payload}) => {
            state.status = "failed";
            state.error = payload as string
        })
    }
})

export const selectOrder = (state: RootState) => state.order;
