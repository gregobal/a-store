import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {PolicyPage} from "./index";

describe("Policy Page", () => {
    it("snapshot", () => {
        const view = render(
            <MemoryRouter>
                <PolicyPage/>
            </MemoryRouter>
        );

        expect(view).toMatchSnapshot();
    });
});
