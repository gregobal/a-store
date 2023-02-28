import {DeliveryType} from "../types/order";

export const deliveryCost: Record<DeliveryType, number> = {
    "Доставка по России — 350₽": 350,
    "Курьером по Москве — 300₽": 300,
    "Самовывоз (пр-т Андропова, 18 корп. 3)": 0
}

export const withoutDelivery: DeliveryType = "Самовывоз (пр-т Андропова, 18 корп. 3)";
