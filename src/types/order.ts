import {CartItemOptions} from "./cart";

export const deliveryTypes =
    ["Доставка по России — 350₽", "Курьером по Москве — 300₽", "Самовывоз (пр-т Андропова, 18 корп. 3)"] as const;

export type DeliveryType = typeof deliveryTypes[number];

export type PaymentType = "Банковская карта" | "Промокод";

type OrderProduct = {
    id: number,
    totalPrice: number,
    totalCount: number,
    sticketNumber?: number
} & Omit<CartItemOptions, "stickerNumber">

export type OrderContact = {
    name: string,
    email: string,
    phone: string,
    address: string,
    comment?: string
}

export type OrderDetails = OrderContact & {
    deliveryType: DeliveryType,
    paymentType: PaymentType
}

export type Order = OrderDetails & {
    products: OrderProduct[]
}

export type OrderProcessStatus = "idle" | "loading" | "succeeded" | "failed";
