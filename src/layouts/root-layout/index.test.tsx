import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {RootLayout} from "./index";

describe("Root Layout", () => {
    it("snapshot", () => {
        const view = render(
            <MemoryRouter>
                <RootLayout />
            </MemoryRouter>
        );

        expect(view).toMatchSnapshot();
    });
});
