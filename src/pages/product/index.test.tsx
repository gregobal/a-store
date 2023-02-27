import {render, screen, waitFor} from "@testing-library/react";
import {Provider} from "react-redux";
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import {store} from "../../store";
import {Product} from "../../types/product";

import products from "../../utils/fixtures/products.json";
import {ProductPage} from "./index";

const product = products[0];
const loaderStub = () => new Promise<Product>((resolve) => resolve(product));

describe("Product Page", () => {
    it("snapshot", async () => {
        const view = render(
            <Provider store={store}>
                <RouterProvider router={
                    createMemoryRouter([{
                        path: "/:id",
                        element: <ProductPage/>,
                        loader: () => loaderStub()
                    }], {
                        initialEntries: [`/0`]
                    })}
                />
            </Provider>
        );

        await waitFor(() => {
            expect(screen.getByText(product.title)).toBeInTheDocument();
        });

        expect(view).toMatchSnapshot();
    });
});
