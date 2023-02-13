import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {MainPage} from "./index";

describe("Main Page", () => {
    it("snapshot", () => {
        const view = render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>
        );

        expect(view).toMatchSnapshot();
    });
});
