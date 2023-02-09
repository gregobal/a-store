import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {MadeInAlfa} from "./index";

describe("Made In Alfa Page", () => {
    it("snapshot", () => {
        const view = render(
            <MemoryRouter>
                <MadeInAlfa />
            </MemoryRouter>
        );

        expect(view).toMatchSnapshot();
    });
});
