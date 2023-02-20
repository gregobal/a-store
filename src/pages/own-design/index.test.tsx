import {render, screen, waitFor} from "@testing-library/react";
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import {ownDesign} from "../../constants/routes";
import {Group} from "../../types/group";

import groups from "./_fixtures/groups.json";

import {OwnDesignPage} from "./index";

const loaderStub = () => new Promise<Group[]>((resolve) => resolve(groups));

describe("Own Design Page", () => {
    it("snapshot", async () => {
        const view = render(
            <RouterProvider router={
                createMemoryRouter([{
                    path: ownDesign.path,
                    element: <OwnDesignPage/>,
                    loader: () => loaderStub()
                }], {
                    initialEntries: [`/${ownDesign.path}`]
                })}
            />
        );

        await waitFor(() => {
            expect(screen.getByText(ownDesign.title)).toBeInTheDocument();
        });

        expect(view).toMatchSnapshot();
    });
});