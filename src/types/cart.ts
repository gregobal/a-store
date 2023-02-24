import {Product} from "./product";

export const cartItemOptionKeys = ["color", "size", "model", "stickerNumber"] as const;

export type CartItemOptionKey = typeof cartItemOptionKeys[number];

export type CartItemOptions = Record<CartItemOptionKey, string>;

export type CartItemId = string;

export type CartItem = {
    id: CartItemId,
    quantity: number,
    productId: Product["id"]
} & Pick<Product, "title" | "preview" | "price"> & CartItemOptions

export type Cart = CartItem[];
