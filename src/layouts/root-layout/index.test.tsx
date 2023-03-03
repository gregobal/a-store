import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import {store} from "../../store";
import {RootLayout} from "./index";

describe("Root Layout", () => {
    it("snapshot", () => {
        const view = render(
            <Provider store={store}>
                <RouterProvider router={
                    createMemoryRouter([{
                        path: "/",
                        element: <RootLayout/>,
                    }])}
                />
            </Provider>
        );

        expect(view).toMatchSnapshot();
    });
});
