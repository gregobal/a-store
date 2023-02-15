import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {ErrorPage} from "./index";

describe("Error Page", () => {
    it("snapshot", () => {
        const view = render(
            <MemoryRouter>
                <ErrorPage/>
            </MemoryRouter>
        );

        expect(view).toMatchSnapshot();
    });
});
