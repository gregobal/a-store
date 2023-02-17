import {render, screen, waitFor} from "@testing-library/react";
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import {Product} from "../../types/product";

import products from "../made-in-alfa/_fixtures/products.json";
import {ProductPage} from "./index";

const product = products[0];
const loaderStub = () => new Promise<Product>((resolve) => resolve(product));

describe("Product Page", () => {
    it("snapshot", async () => {
        const view = render(
            <RouterProvider router={
                createMemoryRouter([{
                    path: "/:id",
                    element: <ProductPage/>,
                    loader: () => loaderStub()
                }], {
                    initialEntries: [`/0`]
                })}
            />
        );

        await waitFor(() => {
            expect(screen.getByText(product.title)).toBeInTheDocument();
        });

        expect(view).toMatchSnapshot();
    });
});
