import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {OwnDesignPage} from "./index";

describe("Own Design Page", () => {
    it("snapshot", () => {
        const view = render(
            <MemoryRouter>
                <OwnDesignPage />
            </MemoryRouter>
        );

        expect(view).toMatchSnapshot();
    });
});
