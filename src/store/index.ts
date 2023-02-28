import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "./cart-slice";
import {orderReducer} from "./order-slice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        order: orderReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
