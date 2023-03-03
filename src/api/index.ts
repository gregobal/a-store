import axios from "axios";
import {Group} from "../types/group";
import {Order} from "../types/order";
import {Product} from "../types/product";

const BASE_URL = "http://qa-games.ru/astore";

export const getMadeInAlfa = (): Promise<Product[]> =>
    axios.get<Product[]>(
        `${BASE_URL}/made-in-alfa`
    ).then((res) => res.data);

export const getYourDesign = (): Promise<Group[]> =>
    axios.get<Group[]>(
        `${BASE_URL}/your-design`
    ).then((res) => res.data);

export const getProduct = (id: string): Promise<Product> =>
    axios.get<Product>(
        `${BASE_URL}/product/${id}`
    ).then((res) => res.data);

export const createOrder = (order: Order): Promise<string> =>
    axios.post<string>(
        `${BASE_URL}/create-order`,
        order
    ).then((res) => res.data);
