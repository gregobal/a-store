import {Cart, CartItem, CartItemOptions} from "../../types/cart";
import {Product} from "../../types/product";
import products from "../../utils/fixtures/products.json";
import {cartActions, cartReducer} from "./index";

const initialState: Cart = []

const product: Product = products[0];
const options: CartItemOptions = {model: "", size: "", stickerNumber: "", color: ""}
const {id: productId, title, preview, price} = product;
const cartItem: CartItem = {
    id: "0",
    quantity: 1,
    productId, title, preview, price,
    ...options
}

describe("cart slice", () => {
    test("should return the initial state", () => {
        const actualState = cartReducer(undefined, {type: undefined});
        expect(actualState).toEqual(initialState);
    });

    test("should contain cart item when product being added to empty cart", () => {
        expect(cartReducer(initialState, cartActions.add({product, options}))).toEqual([
            cartItem
        ])
    });

    test("should increase cart item quantity when same product added one more time", () => {
        const previousState = [cartItem];
        const actualState = cartReducer(previousState, cartActions.add({product, options}));
        expect(actualState[0].quantity).toEqual(2);
    });

    test("should contain new cart item when new product added to existing cart", () => {
        const previousState = [cartItem];
        const actualState = cartReducer(previousState, cartActions.add({product: products[1], options}));
        expect(actualState).toHaveLength(2);
    });

    test("should not contain cart item in cart when it removed", () => {
        const previousState = [cartItem];
        const actualState = cartReducer(previousState, cartActions.remove(cartItem.id));
        expect(actualState).toHaveLength(0);
    });

    test("should increased cart item quantity when increment", () => {
        const previousState = [cartItem];
        const actualState = cartReducer(previousState, cartActions.increment(cartItem.id));
        expect(actualState[0].quantity).toEqual(2);
    });

    test("should decreased cart item quantity when decrement", () => {
        const itemWithQty2 = {
            ...cartItem,
            quantity: 2
        }
        const previousState = [itemWithQty2];
        const actualState = cartReducer(previousState, cartActions.decrement(cartItem.id));
        expect(actualState[0].quantity).toEqual(1);
    });
});
