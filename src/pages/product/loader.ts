import {LoaderFunctionArgs} from "@remix-run/router/utils";
import {getProduct} from "../../api";
import {Product} from "../../types/product";

export function productLoader({params: {id}}: LoaderFunctionArgs): Promise<Product> {
    if (!id) {
        throw new Error("Required param ':id' is undefined")
    }

    return getProduct(id);
}
