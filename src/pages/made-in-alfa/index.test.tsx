import {render, screen, waitFor} from "@testing-library/react";
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import {madeInAlfa} from "../../constants/routes";
import {Product} from "../../types/product";

import products from "../../utils/fixtures/products.json";
import {MadeInAlfaPage} from "./index";

const loaderStub = () => new Promise<Product[]>((resolve) => resolve(products));

describe("Made In Alfa Page", () => {
    it("snapshot", async () => {
        const view = render(
            <RouterProvider router={
                createMemoryRouter([{
                    path: madeInAlfa.path,
                    element: <MadeInAlfaPage/>,
                    loader: () => loaderStub()
                }], {
                    initialEntries: [`/${madeInAlfa.path}`]
                })}
            />
        );

        await waitFor(() => {
            expect(screen.getByText(madeInAlfa.title)).toBeInTheDocument();
        });

        expect(view).toMatchSnapshot();
    });
});
