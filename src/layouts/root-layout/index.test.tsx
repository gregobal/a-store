import {render} from "@testing-library/react";
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import {RootLayout} from "./index";

describe("Root Layout", () => {
    it("snapshot", () => {
        const view = render(
            <RouterProvider router={
                createMemoryRouter([{
                    path: "/",
                    element: <RootLayout/>,
                }])}
            />
        );

        expect(view).toMatchSnapshot();
    });
});
