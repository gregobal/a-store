import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {NoMatchPage} from "./index";

describe("NoMatch Page", () => {
    it("snapshot", () => {
        const view = render(
            <MemoryRouter>
                <NoMatchPage />
            </MemoryRouter>
        );

        expect(view).toMatchSnapshot();
    });
});
