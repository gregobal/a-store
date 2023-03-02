import {createAsyncThunk} from "@reduxjs/toolkit";
import {createOrder} from "../../api";
import {Order, OrderDetails} from "../../types/order";
import {RootState} from "../index";

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
);
