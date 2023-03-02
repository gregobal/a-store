import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../index";

export const selectCart = (state: RootState) => state.cart;

export const selectCartTotalCount = createSelector(
    selectCart,
    cart => cart.reduce((acc, {quantity}) => acc + quantity, 0)
);

export const selectCartTotalPrice = createSelector(
    selectCart,
    cart => cart.reduce((acc, {price, quantity}) => acc + price * quantity, 0)
);
