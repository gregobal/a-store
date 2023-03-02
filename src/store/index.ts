import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "./cart";
import {orderReducer} from "./order";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        order: orderReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
