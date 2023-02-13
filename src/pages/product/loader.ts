import {LoaderFunctionArgs} from "@remix-run/router/utils";
import {Product} from "../../types/product";

import products from "../made-in-alfa/products.json";
import groups from "../own-design/groups.json";

// Очень временно - костыль с лоадерами,
// до появления стора (видимо ждем пришествия апи для полной ясности)

export async function productLoader({params}: LoaderFunctionArgs, productArr: Product[] = products) {
    const product = productArr.find(item => item.id.toString(10) === params.id);

    if (!product) {
        throw new Response("Not Found", {status: 404});
    }

    return product;
}

export async function groupProductLoader(args: LoaderFunctionArgs) {
    return await productLoader(args, groups.flatMap(({products}) => products));
}
