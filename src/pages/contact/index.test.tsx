import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {ContactPage} from "./index";

describe("Contact Page", () => {
    it("snapshot", () => {
        const view = render(
            <MemoryRouter>
                <ContactPage/>
            </MemoryRouter>
        );

        expect(view).toMatchSnapshot();
    });
});
