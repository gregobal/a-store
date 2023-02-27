import {Delivery} from "../types/order";

export const deliveryOpts: Delivery[] = [
    {label: "Доставка по России — 350₽", value: "company", price: 350},
    {label: "Курьером по Москве — 300₽", value: "courier", price: 300},
    {label: "Самовывоз (пр-т Андропова, 18 корп. 3)", value: "none", price: 0}
]
